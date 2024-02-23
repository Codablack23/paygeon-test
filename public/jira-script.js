const myWindow = window
const triggerEl = document.getElementById("report-problem")
const triggerEl2 = document.getElementById("report-problem-2")

myWindow.ATL_JQ_PAGE_PROPS = {
    "triggerFunction": function (showCollectorDialog) {
    triggerEl.addEventListener("click",(e)=>{
        console.log(e)
        setTimeout(function () {
            showCollectorDialog();
            }, 50);
    })
    triggerEl2.addEventListener("click",()=>{
        setTimeout(function () {
            showCollectorDialog();
            }, 50);
    })
}
}