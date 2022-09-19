// dotenv
require("dotenv").config();

// path
const path = require("path");
global.__approot = path.resolve(__dirname);

// express
const express = require("express");
const app = express();

// ansi escape colors
const ansiColors = require(__dirname + "/constants/ansi-esc-color-constants.js");

// configs
const databaseConfig = require(__dirname + "/config/database.js");

// routes

/**
 * App Instance 
 * @returns <function>
 */
const AppInstance = () => {
    /**
     * Function constructor
     */
    const construct = async () => {
        try {
            await databaseConfig(process.env.MONGODB_URI);
            initMiddlewares();
            initRoutes();
            initPort();
        } catch (error) {
            console.error(
                `${ansiColors.red}[app] App configuration initialization failed:`,
                error
            );
        }
    };

    /**
     * Initialize middlewares 
     */
    const initMiddlewares = () => {
        app.use(express.json());
    };

    /**
     * Initialize routes
     */
    const initRoutes = () => {
        // ---
    };

    /**
     * Initialize port for the Node instance
     */
    const initPort = () => {
        app.listen(
            process.env.APP_PORT,
            console.info(`${ansiColors.green}[app] App listening on port ${process.env.APP_PORT}`)
        );
    };

    /**
     * Return constructor
     */
    return construct();
};

/**
 * Initialize the AppInstance
 */
AppInstance();
