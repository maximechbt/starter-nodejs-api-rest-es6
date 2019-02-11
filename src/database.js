import mongoose from 'mongoose';
require('dotenv').config()


const options = {
    useNewUrlParser: true
};

const urlmongo = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

mongoose.connect(urlmongo, options );

export default mongoose.connection;

