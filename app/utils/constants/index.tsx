"use client"
import { DashboardLinkObject, IntegrationDataObject } from "@/app/interfaces";
import LordIcon from "@/app/components/LordIcon";
import { iconData as icons } from "./iconData";
import { JIRA_CONSTANTS } from "./jiraConstants";

const baseRoute = "/dashboard"


export const dashboardLinks:DashboardLinkObject[] = [
    {
        url:`${baseRoute}/inbox`,
        slug:"inbox",
        name:"Inbox",
        icon:<LordIcon color="#747A80" icon={icons.inbox}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.inbox}/>,
        activeIcon:<LordIcon icon={icons.inbox}/>
    },
    {
        url:`${baseRoute}/perks`,
        slug:"perks",
        name:"Perks",
        icon:<LordIcon color="#747A80" icon={icons.compare}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.compare}/>,
        activeIcon:<LordIcon icon={icons.compare}/>
    },
    {
        url:`${baseRoute}/settings`,
        slug:"settings",
        name:"Settings",
        icon:<LordIcon color="#747A80" icon={icons.settings}/>,
        activeIcon:<LordIcon icon={icons.settings}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.settings}/>
    },
    {
        url:"",
        type:"button",
        handler() {
            // const blankWindow = window.open('Report a bug');
            // const document = blankWindow?.document;
            // document?.open();
            // document?.write(`${JIRA_CONSTANTS.JIRA_ISSUE_COLLECTOR_SCRIPT}`);
            // document?.close();
        },
        id:"report-problem",
        slug:"report",
        className:"mt-10",
        name:"Report a Bug",
        icon:<LordIcon color="#747A80" icon={icons.helpCenter}/>,
        activeIcon:<LordIcon icon={icons.compare}/>
    },
]
export const bottomBarLinks:DashboardLinkObject[] = [
    {
        url:`${baseRoute}/inbox`,
        slug:"inbox",
        name:"Inbox",
        icon:<LordIcon color="#747A80" icon={icons.inbox}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.inbox}/>,
        activeIcon:<LordIcon icon={icons.inbox}/>
    },
    {
        url:`${baseRoute}/perks`,
        slug:"perks",
        name:"Perks",
        icon:<LordIcon color="#747A80" icon={icons.compare}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.compare}/>,
        activeIcon:<LordIcon icon={icons.compare}/>
    },
    {
        url:`${baseRoute}/settings`,
        slug:"settings",
        name:"Settings",
        icon:<LordIcon color="#747A80" icon={icons.settings}/>,
        activeIcon:<LordIcon icon={icons.settings}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.settings}/>
    },
    {
        url:"",
        type:"button",
        handler() {
            // const blankWindow = window.open('Report a bug');
            // const document = blankWindow?.document;
            // document?.open();
            // document?.write(`${JIRA_CONSTANTS.JIRA_ISSUE_COLLECTOR_SCRIPT}`);
            // document?.close();
        },
        id:"report-problem-2",
        slug:"report",
        className:"mt-10",
        name:"Report a Bug",
        icon:<LordIcon color="#747A80" icon={icons.helpCenter}/>,
        activeIcon:<LordIcon icon={icons.compare}/>
    },
]


