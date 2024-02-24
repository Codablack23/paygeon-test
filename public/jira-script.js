const myWindow = window
const triggerEl = document.querySelector(".report-problem-btn")
const triggerEl2 = document.getElementById("report-problem-2")

console.log({
    triggerEl,triggerEl2
})

myWindow.ATL_JQ_PAGE_PROPS = {
    "triggerFunction": function (showCollectorDialog) {
    triggerEl.addEventListener("click",(e)=>{
        console.log(e)
        setTimeout(function () {
            showCollectorDialog();
            }, 50);
    })
   
}
}