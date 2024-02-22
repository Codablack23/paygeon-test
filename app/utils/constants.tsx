import { DashboardLinkObject, IntegrationDataObject } from "../interfaces";
import { Image } from "antd"

const baseRoute = "/dashboard"

export const dashboardLinks:DashboardLinkObject[] = [
    // {
    //     url:baseRoute,
    //     slug:"dashboard",
    //     name:"Dashboard",
    //     icon:<Image
    //     src="/images/icons/sidebar/dashboard.png"
    //     preview={false}
    //     />,
    //     activeIcon:<Image
    //     preview={false}
    //     src="/images/icons/sidebar/dashboard-active.png"
    //     />,
    // },
    {
        url:`${baseRoute}/inbox`,
        slug:"inbox",
        name:"Inbox",
        icon:<Image
        src="/images/icons/sidebar/invoicing.png"
        preview={false}
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/invoicing-active.png"
        preview={false}
        />
    },
    {
        url:`${baseRoute}/integrations`,
        slug:"integrations",
        name:"Integrations",
        icon:<Image
        src="/images/icons/sidebar/cards.png"
        preview={false}
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/cards-active.png"
        preview={false}
        />
    },
    {
        url:`${baseRoute}/settings`,
        slug:"settings",
        name:"Settings",
        icon:<i className="bi text-light bi-gear text-xl"></i>,
        activeIcon:<i className="bi bi-gear text-xl"></i>
    },
    {
        url:`${baseRoute}/perks`,
        slug:"perks",
        name:"Perks",
        icon:<Image
        src="/images/icons/sidebar/payment.png"
        preview={false}
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/payment-active.png"
        preview={false}
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
        preview={false}
        />,
        activeIcon:<Image
        src="/images/icons/sidebar/report-active.png"
        preview={false}
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

export const integrationsData:IntegrationDataObject[] = [
    {
        name:"quickbooks",
        bgUrl:"https://loopple.s3.eu-west-3.amazonaws.com/images/w5G98LJ5sghVLaDJ8Aziv6lZKYOdRBJTQ1eOlcjv.png",
        logo:"https://loopple.s3.eu-west-3.amazonaws.com/images/X0p5ld0TwyzDavKthcaHKsvwzuQ8HDeXnOXIe78z.svg",
        link:"/integrations/quickbooks"
    },
    {
        name:"xero",
        bgUrl:"https://loopple.s3.eu-west-3.amazonaws.com/images/I9xEb9XWK7PQm7X6OZdP4i3PG6tjwtopggDrjmXX.png",
        logo:"https://loopple.s3.eu-west-3.amazonaws.com/images/zw6ZIVEY0fNKHNLqxZ2doAENvbgb2Z1rkpgCHM2c.svg",
        link:"/integrations/quickbooks"
    },
    {
        name:"zapier",
        bgUrl:"https://loopple.s3.eu-west-3.amazonaws.com/images/xtgy3eakIHa7LayJxzICZpMl4G1XtutKYvCyWCQa.jpg",
        logo:"https://loopple.s3.eu-west-3.amazonaws.com/images/hQmlUm8MOBFFZva6eTCKbywZQFcwqKV7Sbx1854o.svg",
        link:"/integrations/quickbooks"
    },
    {
        name:"IFTTT",
        bgUrl:"https://loopple.s3.eu-west-3.amazonaws.com/images/wM72Z4rNr6sE3J63Q1yLYGP7RnECM4GA2Z3Juwq3.jpg",
        logo:"https://loopple.s3.eu-west-3.amazonaws.com/images/JYfBCm1FueVL1bdPyUhcuTNi9lbtPK6ElV0l1AGr.svg",
        link:"/integrations/quickbooks"
    },
    {
        name:"hubspot",
        bgUrl:"https://loopple.s3.eu-west-3.amazonaws.com/images/Nr9FNGkb65jUe2b0FB5fHWBCvRRsybZGWQUB71f0.webp",
        logo:"https://loopple.s3.eu-west-3.amazonaws.com/images/KZGE1v3n0ei7POaGfBaEmnNki33QwRF3XTEVj04c.svg",
        link:"/integrations/quickbooks"
    },
    {
        name:"slack",
        bgUrl:"https://loopple.s3.eu-west-3.amazonaws.com/images/Ta8RBIBpdvmTr2zQrcArnOKUVMXwYIVX1zakLI1F.jpg",
        logo:"https://loopple.s3.eu-west-3.amazonaws.com/images/RDyzOARu35hoFaDMyHXcXJkGoDbabQizHQNsyMAL.svg",
        link:"/integrations/quickbooks"
    },
]