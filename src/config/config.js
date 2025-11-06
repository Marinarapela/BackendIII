import dotenv from "dotenv";
import { Command, Option } from "commander";


const program = new Command();
let mode = "dev"

program
    .addOption(
        new Option("-m, --mode <MODE>", "Modo de ejecución del servidor")
            .choices(["prod", "dev"])
            .default("dev")
    );

if (process.env.NODE_ENV !== "test") {
    program.allowUnknownOption(true);
    program.parse(process.argv);
    mode = program.opts().mode;
} else {
  mode = "dev"; // valor por defecto para entorno de test
}


dotenv.config({
    path: mode === "prod" ? "./.env.prod" : "./.env.dev",
});

// Configuración general de la app
const config = {
    MODE: mode,
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME || "default_db",
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin123",
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "changeme",
};


export default config;
