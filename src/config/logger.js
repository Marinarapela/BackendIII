import winston from "winston";
import path from "path";
import fs from "fs";
import __dirname from "../utils/index.js";
import config from "./config.js";

const { MODE } = config;

// Crear carpeta de logs si no existe
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Niveles personalizados
const customLevels = {
    levels: {
        grave: 0, // Errores críticos
        warn: 1,  // Advertencias
        info: 2,  // Información general
        leve: 3,  // Detalles o debug
    },
    colors: {
        grave: "red",
        warn: "yellow",
        info: "blue",
        leve: "green",
    },
};

winston.addColors(customLevels.colors);

// Transporte: archivo (solo errores graves)
const transportFile = new winston.transports.File({
    level: "grave",
    filename: path.join(logDir, "grave.log"),
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
});

// Transporte: consola (solo en desarrollo)
const transportConsole = new winston.transports.Console({
    level: "leve",
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(({ timestamp, level, message, ...rest }) => {
            const meta = rest.meta ? JSON.stringify(rest.meta) : "";
            return `[${timestamp}] ${level}: ${message} ${meta}`;
        })
    ),
});

// Crear logger
const logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [transportFile],
});

// Agregar consola si estamos en modo dev
if (MODE === "dev") {
    logger.add(transportConsole);
}

// Middleware para Express
const middLogg = (req, res, next) => {
    req.logger = logger;
    next();
};

export default middLogg;
