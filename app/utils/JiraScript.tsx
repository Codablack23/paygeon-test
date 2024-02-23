"use client";

import  Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { JIRA_ISSUE_URL } from "./constants/jiraConstants";

interface ExtendedWindowObject extends Window{
    [key:string]:any
}
function handleLoadScript(){
    const myWindow:ExtendedWindowObject = window
    const triggerEl = document.getElementById("report-problem") as HTMLDivElement
    console.log(triggerEl)
    myWindow.ATL_JQ_PAGE_PROPS = {
        "triggerFunction": function (showCollectorDialog:VoidFunction) {
        triggerEl.addEventListener("click",()=>{
            setTimeout(function () {
                showCollectorDialog();
                }, 50);
        })
    }
   }
}

export default function JiraScript(){
    return (
        <>
        <Script id="jquery" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script id="jira-issue-script" src={JIRA_ISSUE_URL}/>
        <Script id="my-custom-script" src="/jira-script.js"/>
        </>
    )
}
