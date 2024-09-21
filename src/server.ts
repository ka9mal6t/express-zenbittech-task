import express, {Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { DealRouter } from './deal/deal.controller';
import { PrismaClient } from '@prisma/client';

dotenv.config()

const app = express()
const prisma = new PrismaClient()

async function main() {
    app.use(express.json())

    app.use('/api/deals', DealRouter)

    app.get('/error', (req: Request, res: Response) => {
        throw new Error('This is a test error')
    })

    app.all('*', (req: Request, res: Response) => {
        res.status(404).json({ message: 'Not found' })
    })

    app.use((err:Error, req: Request, res: Response, next:NextFunction) => {
        res.status(500).send('Something wrong')
    })

    const PORT = process.env.PORT || 4200
    app.listen(PORT, ()=>{
        // console.info(`Server is running on port ${PORT}`)
    })
}

main()
    .then(async()=>{
        await prisma.$connect()
    })
    .catch(async (e)=>{
        await prisma.$disconnect()
        process.exit(1)
    })