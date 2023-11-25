const dotenv = require("dotenv");
const e = require("express");
const joi = require("joi");

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "./config/dev.env" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "./config/prod.env" });
} else {
  dotenv.config({ path: "./config/test.env" });
}

const envSchema =  joi.object({
    NODE_ENV: joi.string().valid("development", "production", "test"),
    PORT: joi.number().required(),
    CHECK: joi.string().required()
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error){
    console.log(error.message);
} else {
    console.log("All env variables are valid")
}

console.log(process.env.CHECK);
