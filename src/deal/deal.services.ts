import { PrismaClient, Deal} from "@prisma/client";
import { ICreateDeal } from "./deal.types";
import { error } from "console";


export class DealService{
    private prisma = new PrismaClient()
    
    createTwit(deal: ICreateDeal): Promise<Deal>{
        try{
            return this.prisma.deal.create({
                data: deal
            })
        }
        catch(error)
        {
            throw new Error('Error while creating deal')
        }
    }

    async getTwits(): Promise<Deal[]> {
        try{
            return this.prisma.deal.findMany()
        }
        catch(error)
        {
            throw new Error('Error while get deals')
        }
        
    }

}