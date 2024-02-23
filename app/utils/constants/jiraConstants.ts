
export const JIRA_ISSUE_URL = "https://paygeon.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/tod1zk/b/4/b0105d975e9e59f24a3230a22972a71a/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=1626c298"
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