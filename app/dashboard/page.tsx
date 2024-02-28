"use client"
import { useContext, useEffect, useState } from "react";
import DashboardHero from "./components/DashboardHero";
import MainLayout from "./components/MainLayout";
import { ThemeContext } from "../contexts/ThemContext";
import Onboarding from "./components/Onboarding";
import { OnboardingTaskObject } from "../interfaces";
import { onboardingTask } from "../utils/constants/onboarding";
import FirestoreService from "../services/FirestoreService";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "firebase/auth";

export default function Page(){
    const {user} = useContext(AuthContext)
    const {darkMode} = useContext(ThemeContext)
    const [completed,setCompleted] = useState<string []>([])
    const [tasks,setTasks] = useState<OnboardingTaskObject[]>([])

    const completeTask = async(id:string)=>{
        setCompleted(prev=>[...prev,id])
        const response = await FirestoreService.setDoc("completedTask",(user as User).email as string,{
            completed:completed.length > 0?[...completed,id]:[id]
        })
        const updatedTask = tasks.filter(task=>task.id !== id)
        setTasks(updatedTask)
        return response

    }
    useEffect(()=>{
        const getCompletedTask = async ()=>{
            const response = await FirestoreService.getData((user as User).email as string)
            console.log(response)
            if(response.status === "success"){
                const completed = response.data?.completed
                console.log(completed)
                if(completed){
                    const pendingTask = onboardingTask.filter(task => !completed.includes(task.id))
                    setTasks(pendingTask)
                }else{
                    setTasks(onboardingTask)
                }
            }
        }
        if(user){
            getCompletedTask()
        }
    },[user])

    return(
        <MainLayout active="dashboard">
            <div className="font-monty">
                <DashboardHero tasksLeft={tasks.length}/>
                <Onboarding completeTask={completeTask} tasks={tasks} darkMode={darkMode}/>
            </div>
        </MainLayout>
    )
}