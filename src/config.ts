try{
    process.loadEnvFile()
} catch {
    console.log('Error: .env not found')
}

export const PORT = Number(process.env.PORT ?? 3000)
const uri = process.env.MONGODB_URI ?? ''

if(!uri) {
    console.log("Error: MongoDB URI not defined")
}

export const MONGODB_URI = uri