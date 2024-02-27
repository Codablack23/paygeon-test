"use client"
import { useContext, useEffect, useState } from "react";
import DashboardHero from "./components/DashboardHero";
import MainLayout from "./components/MainLayout";
import { ThemeContext } from "../contexts/ThemContext";
import Onboarding from "./components/Onboarding";
import { OnboardingTaskObject } from "../interfaces";
import { onboardingTask } from "../utils/constants/onboarding";

export default function Page(){
    const {darkMode} = useContext(ThemeContext)
    const [tasks,setTasks] = useState<OnboardingTaskObject[]>(onboardingTask)

    const completeTask = (id:string)=>{
        const updatedTask = tasks.filter(task=>task.id !== id)
        setTasks(updatedTask)
        localStorage.setItem("onboardingTasks",JSON.stringify(updatedTask))

    }
    useEffect(()=>{
        const localOnboardingTasks = localStorage.getItem("onboardingTasks")
        if(localOnboardingTasks){
            setTasks(JSON.parse(localOnboardingTasks))
        }
    },[])

    return(
        <MainLayout active="dashboard">
            <div className="font-monty">
                <DashboardHero tasksLeft={tasks.length}/>
                <Onboarding completeTask={completeTask} tasks={tasks} darkMode={darkMode}/>
            </div>
        </MainLayout>
    )
}