import express  from "express";

export async function startServer() {
    let app = express();
    let PORT = 3500;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}