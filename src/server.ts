
import env from "./env/variaveis";
import app from "./app";



app.listen({port: env.NODE_PORT}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${env.NODE_PORT}`);
});