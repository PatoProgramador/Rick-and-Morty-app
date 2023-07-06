import mongoose from 'mongoose'

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI
        if(!mongoUri) {
            throw new Error('No hay conexión con la base de datos')
        }
        const conn = await mongoose.connect(mongoUri)
        console.log(`Conection to ${conn.connection.name} database established`)
    } catch (error) {
        console.log(error)
    }
}
