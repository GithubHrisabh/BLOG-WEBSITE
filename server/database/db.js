
import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@clone-inshort-shard-00-00.h8jl2.mongodb.net:27017,clone-inshort-shard-00-01.h8jl2.mongodb.net:27017,clone-inshort-shard-00-02.h8jl2.mongodb.net:27017/INSHORTS?ssl=true&replicaSet=atlas-8vsv0g-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
