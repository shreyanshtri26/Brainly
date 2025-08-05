import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || "mongodb+srv://shreyanshtri26:Fb123@cluster0.cwpcwbl.mongodb.net/brainly";

mongoose.connect(databaseUrl)

const UserSchema=new mongoose.Schema({
    username :{type:String,required:true,unique:true},
    password :{type:String,required:true},
})


const contentTypes = ['image', 'youtube', 'twitter', 'article', 'audio'];
const ContentSchema =new mongoose.Schema({
    link:String,
    type:{type:String,enum:contentTypes,required:true},
    title:String,
    tag:[{type:mongoose.Schema.Types.ObjectId ,ref:'User',required:true}],
})

const TagsSchema =new mongoose.Schema({
    title:String

})

const LinkSchema=new mongoose.Schema({
    hash:String,
    userId:{type:mongoose.Schema.Types.ObjectId , ref:'User' ,required:true ,unique:true}

})

export const User=mongoose.model('User',UserSchema);
export const Content=mongoose.model('Content',ContentSchema);
export const Tags=mongoose.model('Tags',TagsSchema);
export const Link=mongoose.model('Link',LinkSchema);
