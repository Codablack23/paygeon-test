import { OnboardingTaskObject } from "@/app/interfaces";

export const onboardingTask:OnboardingTaskObject[] = [
    {
        title:"Complete Know Your Customer (KYC)",
        required:true,
        id:"1",
        actionURL:"/dashboard/inbox",
        actionType:"verification",
        completed:false,
    },
    {
        title:"Link Bank Account via Plaid",
        required:true,
        id:'2',
        actionURL:"/dashboard/inbox",
        actionType:"link",
        completed:false,
    },
    {
        title:"Automate Your Invoices Using Vuala",
        required:false,
        id:"3",
        actionURL:"https://vualapp.com/register?ref=paygeon",
        actionType:"automation",
        completed:false,
    },
]