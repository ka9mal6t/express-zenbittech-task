import { Router, Request, Response } from "express";
import { DealService } from './deal.services';

const router = Router()

const dealService = new DealService()

router.post('/', (req: Request, res: Response) => {
    const deal = dealService.createTwit(req.body)
    res.status(201).json(deal)
})

router.get('/', async(req: Request, res: Response)=>{
    const deals = await dealService.getTwits()
    res.json(deals)
})

export const DealRouter = router