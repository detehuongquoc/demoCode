const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    handleClickBtn(e)
})

function handleClickBtn(event) {
    //get element
    const target = event.target
    if(target.nodeName == "DIV") {
        return
    }
    const tabTarget = event.target.getAttribute("data-tab")

    // handle event
    const content = document.getElementById("content")
    const childNodes = content.children
    
    for(let childNode of childNodes) {
        let id = childNode.getAttribute("id")
        if(tabTarget == id) {
            childNode.classList.add("show")
        } else {
            childNode.classList.remove("show")
        }
    }
    const btns = document.getElementById("btn")
    const childNodesBtn = btns.children

    for(let btn of childNodesBtn) {
        let atr = btn.getAttribute("data-tab")
        if(tabTarget == atr) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    }
}
