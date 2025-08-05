import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'shreyansh';

// Define a custom request type that includes the userId property
export interface CustomRequest extends Request {
  userId?: string;
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    try {
        const decoded = jwt.verify(authHeader, JWT_SECRET) as { userId: string };
        if (decoded && decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            res.status(403).json({
                message: "Wrong credential"
            });
        }
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
