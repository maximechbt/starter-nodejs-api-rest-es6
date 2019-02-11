import express from 'express'
import {ROUTES} from "./routes";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import database from "./database";

const MIDDLEWARES = [
    cors(),
    morgan('combined'),
    bodyParser.json(),
    bodyParser.urlencoded({
        extended: false
    })
];

class App {
    constructor () {
        this.express = express();
        this.setupBDD(() => {
            this.setupMiddlewares();
            this.setupRoutes()
        })
    }

    setupBDD(callback) {
        database.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
        database.once('open', function () {
            console.log("Connexion à la base OK");
            callback();
        });
    }

    setupMiddlewares() {
        MIDDLEWARES.forEach(middleware => this.express.use(middleware));
    }

    setupRoutes () {
        ROUTES.forEach(route => this.express.use(route.prefix, route.target));
    }
}

export default new App().express
