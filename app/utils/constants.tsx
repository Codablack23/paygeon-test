import { DeepPartial } from "@magicbell/magicbell-react/dist/lib/types";
import { DashboardLinkObject } from "../interfaces";
import { Image } from "antd"
import { IMagicBellTheme } from "@magicbell/magicbell-react";

const baseRoute = "/dashboard"

export const dashboardLinks:DashboardLinkObject[] = [
    {
        url:baseRoute,
        slug:"dashboard",
        name:"Dashboard",
        icon:<Image
        src="/images/icons/sidebar/dashboard.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/dashboard-active.png"
        />,
    },
    {
        url:`${baseRoute}/accounts`,
        slug:"accounts",
        name:"Accounts",
        icon:<Image
        src="/images/icons/sidebar/accounts.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/accounts-active.png"
        />
    },
    {
        url:`${baseRoute}/integrations`,
        slug:"integrations",
        name:"Integrations",
        icon:<Image
        src="/images/icons/sidebar/cards.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/cards-active.png"
        />
    },
    {
        url:`${baseRoute}/perks`,
        slug:"perks",
        name:"Perks",
        icon:<Image
        src="/images/icons/sidebar/payment.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/payment-active.png"
        />
    },
    // {
    //     url:`${baseRoute}/transactions`,
    //     slug:"transactions",
    //     name:"Transactions",
    //     icon:<Image
    //     src="/images/icons/sidebar/transactions.png"
    //     />,
    //     activeIcon:<Image
    //     src="/images/icons/sidebar/transactions-active.png"
    //     />
    // },
    {
        url:`${baseRoute}/payments`,
        slug:"payments",
        name:"Payments",
        icon:<Image
        src="/images/icons/sidebar/payment.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/payment-active.png"
        />
    },
    {
        url:`${baseRoute}/invoices`,
        slug:"invoices",
        name:"Invoices",
        icon:<Image
        src="/images/icons/sidebar/invoicing.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/invoicing-active.png"
        />
    },
    {
        url:"",
        type:"button",
        handler() {
            const blankWindow = window.open('Report a bug');
            const document = blankWindow?.document;
            document?.open();
            document?.write(`${JIRA_CONSTANTS.JIRA_ISSUE_COLLECTOR_SCRIPT}`);
            document?.close();
        },
        slug:"report",
        className:"mt-10",
        name:"Report a Bug",
        icon:<Image
        src="/images/icons/sidebar/report.png"
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/report-active.png"
        />
    },
]

export const JIRA_CONSTANTS = {
    JIRA_ISSUE_COLLECTOR_SCRIPT: `
    <html>
        <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://paygeon.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/tod1zk/b/4/b0105d975e9e59f24a3230a22972a71a/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=1626c298"></script>
        <script type="text/javascript">
            window.ATL_JQ_PAGE_PROPS = {
                "triggerFunction": function (showCollectorDialog) {
                    jQuery(document).ready(function () {
                        setTimeout(function () {
                        showCollectorDialog();
                        }, 50);
                    });
                }
            };
        </script>
        </head>
        <body>
        </body>
    </html>`,
};

export const magicbellTheme:DeepPartial<IMagicBellTheme> = {
    "icon":{
        "borderColor":"#747A80",
        "width":"24px"
    },
    "banner":{
        "fontSize":"14px",
        "backgroundColor":"#F8F5FF",
        "textColor":"#3A424D","backgroundOpacity":1
    },
    "unseenBadge":{"backgroundColor":"#F80808"},
    "header":{
        "fontFamily":"inherit",
        "fontSize":"15px",
        "backgroundColor":"#FFFFFF",
        "textColor":"#5225C1",
        "borderRadius":"16px"
    },
    "footer":{
        "fontSize":"15px",
        "backgroundColor":"#FFFFFF",
        "textColor":"#5225C1",
        "borderRadius":"16px"
    },
    "notification":{
        "default":{
            "fontFamily":"inherit",
            "fontSize":"14px",
            "textColor":"#3A424D",
            "borderRadius":"16px",
            "backgroundColor":"#FFFFFF",
            "hover":{"backgroundColor":"#F2EDFC"},
            "state":{"color":"transparent"},
            "margin":"8px"
        },
        "unseen":{
            "textColor":"#3A424D",
            "backgroundColor":"#F8F5FF",
            "hover":{"backgroundColor":"#F2EDFC"},
            "state":{"color":"#5225C1"}},
            "unread":{"textColor":"#3A424D",
            "backgroundColor":"#F8F5FF",
            "hover":{"backgroundColor":"#F2EDFC"},
            "state":{"color":"#5225C1"}
        }
    },
    "dialog":{
        "backgroundColor":"#F5F5F5",
        "textColor":"#313131",
        "accentColor":"#5225C1"
    }
};