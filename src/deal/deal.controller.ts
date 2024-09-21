import { Router, Request, Response } from "express";
import { DealService } from './deal.services';

const router = Router()

const twitService = new DealService()

router.post('/', (req: Request, res: Response) => {
    const twit = twitService.createTwit(req.body)
    res.status(201).json(twit)
})

router.get('/', async(req: Request, res: Response)=>{
    const twits = await twitService.getTwits()
    res.json(twits)
})

export const twitRouter = router