import dotenv from 'dotenv';

dotenv.config();



export function random(len:number){
    let options =process.env.options || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = "";
    for (let i = 0; i < len; i++) {
        result += options.charAt(Math.floor(Math.random() * options.length));
    }
    return result;
}