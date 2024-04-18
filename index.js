import express from 'express';
import mongoose from 'mongoose';

const PORT=5000;
const DB_URL = `mongodb+srv://kardy:nfc0956490410@todolist.katuxbn.mongodb.net/?retryWrites=true&w=majority&appName=todolist`

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('server working a looot');
})

async function startApp(){
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, ()=> console.log('server started on port ' + PORT));
    }catch(e){
        console.log(e);
    }
}

startApp();