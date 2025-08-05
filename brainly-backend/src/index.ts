import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User, Content, Link, Tags } from './db.js';
import { authMiddleware, type CustomRequest } from './middleware.js';
import { random } from './utils.js';
// import { v4 as uuidv4 } from 'uuid';
const JWT_SECRET = 'shreyansh';
const PORT = 3000;

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 3);
        await User.create({
            username:username, 
            password: hashedPassword 
        });
        // const user = new User({ username, password: hashedPassword });
        // await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});


app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error signing in", error });
    }
});

app.post("/api/v1/content", authMiddleware, async (req: CustomRequest, res) => {
    const { link, type, title, tag } = req.body;

    try {
        await Content.create({
            link,
            type,
            title,
            tag: [req.userId]
        });
        // const content = new Content({ link, type, title, tag, author: userId });
        // await content.save();
        res.status(201).json(
            {message:"content"});
    } catch (error) {
        res.status(500).json({ message: "Error creating content", error });
    }
});

app.get("/api/v1/content", authMiddleware, async (req: CustomRequest, res) => {
    const userId = req.userId;
    try {
    
        
        const contents = await Content.find({ tag: { $in: [userId] } }).populate('tag', 'username -_id');;
        res.json({ contents });
    } catch (error) {
        res.status(500).json({ message: "Error fetching content", error });
    }
});

app.delete("/api/v1/content", authMiddleware, async (req: CustomRequest, res) => {
    const { contentId } = req.body;
    const userId = req.userId;

    try {
        const content = await Content.deleteMany({ _id: contentId, tag: { $in: [userId] } });
        if (!content) {
            return res.status(404).json({ message: "Content not found or user not authorized" });
        }
        res.json({ message: "Content deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting content", error });
    }
});

app.post("/api/v1/brain/share", authMiddleware, async (req: CustomRequest, res) => {
    const { share } = req.body;
    if (share) {
        try {
            const shareLink = new Link({ userId: req.userId, hash: random(10) });
            await shareLink.save();
            res.json({ shareLink: `http://localhost:${PORT}/api/v1/brain/${shareLink.hash}` });
        } catch (error) {
            res.status(500).json({ message: "Error creating share link", error });
        }
    } else {
        await Link.deleteOne({ userId: req.userId });
        res.json({ message: "Share link deleted successfully" });
    }
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const { shareLink } = req.params;
    try {
        const link = await Link.findOne({ hash: shareLink });
        if (!link) {
            return res.status(404).json({ message: "Share link not found" });
        }
        const contents = await Content.find({ tag: link.userId });
        res.json(contents);
    } catch (error) {
        res.status(500).json({ message: "Error fetching shared content", error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
