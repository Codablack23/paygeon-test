import {MercoaClient,Mercoa} from  "@mercoa/javascript"

const mercoaApiKey = process.env.NEXT_PUBLIC_MERCOA_KEY
const mercoa = new MercoaClient({
    token: mercoaApiKey as string,
})

interface Data{
    name:string,
    [key:string]:string | number | boolean
}
interface MercoaResponse{
    status:"success"|"failed"|"pending",
    entity:Mercoa.EntityWithPaymentMethodResponse | null,
    error?:any,
    error_message:string | null
}

class MercoaService{
    async generateUserJWT(foreignId:string){
        try {
            const entities = await mercoa.entity.find({foreignId})
            if(entities.data.length === 0){
                return null
            }
            const token = await mercoa.entity.getToken(entities.data[0].id, {
                pages: {
                    paymentMethods: true,
                    notifications: true
                }
            })
            return token
        } catch (error) {
            console.log(error)
        }
        return null
    }
    async getEntity(foreignId:string){
        const response:MercoaResponse = {
            status:"pending",
            entity:null,
            error_message:null
        }
        try {
            const entities = await mercoa.entity.find({foreignId})
            if(entities.data.length === 0){
               response.status = "failed"
               response.error_message="The entity does not exist or have been deleted"
               return response
            }
            response.entity = entities.data[0]
            response.status = "success"
        } catch (error) {
            console.log(error)
            response.error = error
            response.status = "failed"
            response.error_message ="An Error occured in our servers please try again later"
        }
        return response
    }
    async createEntity(userId:string,email:string,legalBusinessName:string){
        // console.log({userId,email,legalBusinessName})
        try {
            await mercoa.entity.create({
                isCustomer: true,
                isPayor: true,
                isPayee: false,
                foreignId:userId,
                accountType: Mercoa.AccountType.Business,
                profile: {
                    business:{
                        legalBusinessName,
                        email
                    }
                }
            });
            return{status:"success"}
        } catch (error) {
            console.log(error)
        }
        return {
            status:"failed"
        }
    }
    async updateEntity(id:string,data:Data){
        try {
            await mercoa.entity.update(id,{
                isCustomer: true,
                isPayor: true,
                isPayee: false,
                accountType: Mercoa.AccountType.Business,
                profile: {
                    business:{
                        legalBusinessName:data.name,
                        email:data.email as string
                    }
                }
            });
            return{status:"success"}
        } catch (error) {
            console.log(error)
        }
        return {
            status:"failed"
        }
    }
}

export default new MercoaService as MercoaService