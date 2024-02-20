"use client"

export default function ExternalScript(){
    return(
        <>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script 
            onLoad={(e)=>{
            console.log
            }}
            type="text/javascript" src="https://paygeon.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/tod1zk/b/4/b0105d975e9e59f24a3230a22972a71a/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=1626c298"></script>
            <script type="text/javascript">
            </script>
        </>
    )
}