import mongoose from 'mongoose';
require('dotenv').config()

const urlmongo = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

mongoose.connect(urlmongo, {
    useNewUrlParser: true
});

export default mongoose.connection;

