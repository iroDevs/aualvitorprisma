import dotenv from "dotenv";
import { z } from "zod";
dotenv.config();


const envSchema = z.object({
    NODE_ENV: z.string(),
    NODE_PORT: z.coerce.number(),
});


const env = envSchema.parse(process.env);

export default env;
