import { OnboardingCardProps, OnboardingProps, OnboardingTaskObject } from "@/app/interfaces"
import DashboardCarousel from "./DashboardCarousel"



function OnboardingCard(props:OnboardingCardProps){
    const {task} = props
    const actionText = task.actionType === "link"?"Link Now":task.actionType === "automation"?"Automate Now":"Verify Now"
    return (
        <div className="card rounded-sm p-4 mb-4">
            <p className="uppercase light-text-dark text-lg font-bold">{task.required?"important":"optional"}</p>
            <p className="text-xl font-bold mt-1 capitalize">{task.title}<span className="inline-block light-text-dark ml-2 text-sm">3 mins ETA</span></p>
            {task.required?<p className="my-1 font-semibold">Required</p>:null}
            <div className="text-right" onClick={props.actionHandler}> <button className="text-right text-theme font-bold capitalize">{actionText} <i className="bi ml-3 bi-arrow-right text-theme"></i></button></div>
        </div>
    )
}
export default function Onboarding(props:OnboardingProps){
    function actionHandler(id:string,url:string){
        return ()=>{
            props.completeTask(id)
            window.open(url,"_blank")
        }
    }
    return(
    <div className={`-top-32 p-3 md:p-6 relative min-h-[180px] ${props.darkMode?"dark":"light"}`}>
       <div className="lg:flex gap-8 w-full">
        {props.tasks.length > 0
        ?(<div className="flex-[3]">
            <ul className="lg:w-[90%]">
            {props.tasks.map(task=>(
            <OnboardingCard 
            task={task}
            completeTask={props.completeTask}
            actionHandler={actionHandler(task.id,task.actionURL)}
            key={task.id}/>
            ))}
            </ul>
        </div>)
        :<div className="h-[350px] flex-[3] lg:w-[90%] card p-2 text-center flex items-center justify-center">
            <div className="flex-1">
                <p className="font-bold text-xl">No more tasks at this time</p>
            </div>
        </div>
        }
        <div className="flex-[2]">
            <DashboardCarousel/>
        </div>
       </div>
    </div>
    )
}