const dotenv = require("dotenv");
const Joi = require("joi");

if (process.env.NODE_ENV == "production") {
  dotenv.config({
    path: process.cwd() + "/configs/prod.env",
  });
}

if (process.env.NODE_ENV == "development") {
  dotenv.config({
    path: process.cwd() + "/configs/dev.env",
  });
}

const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().default(5000),
    MONGO_URI: Joi.string().default("mongodb://localhost:27017/express-mongo"),
    JWT_SECRET: Joi.string().required().description("JWT Secret required to sign"),
    JWT_EXPIRATION: Joi.number().default(86400),
    SMTP_HOST: Joi.string().required(),
    SMTP_PORT: Joi.number().required(),
    SMTP_USER: Joi.string().required(),
    SMTP_PASS: Joi.string().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongo: {
        uri: envVars.MONGO_URI,
    },
    jwt: {
        secret: envVars.JWT_SECRET,
        expiration: envVars.JWT_EXPIRATION,
    },
    smtp: {
        host: envVars.SMTP_HOST,
        port: envVars.SMTP_PORT,
        user: envVars.SMTP_USER,
        pass: envVars.SMTP_PASS,
    },
};

module.exports = config;

