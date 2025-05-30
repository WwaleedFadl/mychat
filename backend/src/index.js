import cookieParser from 'cookie-parser'
import express from 'express';

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'

import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';

import cors from 'cors'
import { app, server, } from './lib/socket.js';

dotenv.config()

////////////// MIDDLEWARES \\\\\\\\\
//
const PORT = process.env.PORT;

app.use(express.json())

app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173"
  , credentials: true
}))

////////////// ROUTES \\\\\\\\\\\\\\
//
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

///////////////////////////////////////////////////////
//
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
  connectDB()
})
