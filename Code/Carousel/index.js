const myArrayImage = [
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg",
    "https://thumbs.dreamstime.com/b/beautiful-landscape-dry-tree-branch-sun-flowers-field-against-colorful-evening-dusky-sky-use-as-natural-background-backdrop-48319427.jpg",
    "https://us.123rf.com/450wm/maaravic/maaravic2210/maaravic221000291/193003749-fond-de-papillons-de-diff%C3%A9rentes-couleurs-arc-en-ciel-diff%C3%A9rentes-tailles-et-formes-tr%C3%A8s-beaux-et.jpg?ver=6",
    "https://us.123rf.com/450wm/mbgraphicdesign/mbgraphicdesign2301/mbgraphicdesign230103651/197284091-shiny-butterflies-illustration.jpg?ver=6",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
] 



let index = 0

showImage(index)
function autoSilde(ms) {
    let time = null
    return () => {
        if(time) {
            clearInterval(time)
            time = null
        }
        time = setInterval(() => {
            handleCarousel(true)
        }, ms);
    }

}
// const auto = autoSilde(2000)
// auto()
const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")

nextButton.addEventListener("click", () => {
    handleCarousel(true)
})
prevButton.addEventListener("click", () => {
    handleCarousel(false)
})

function handleCarousel(isNext) {
   if(isNext) { 
    if(index + 1 < myArrayImage.length) {
        index++
    } else {
        index = 0
    }
   } else {
    if(index - 1 >= 0 ) {
        index--
    } else {
        index = myArrayImage.length - 1
    }
   }
   showImage(index)
}

function showImage(index) {

    const image = document.getElementById("img")
    image.className = '';
    image.setAttribute("src", myArrayImage[index])
    setTimeout(() => {
        image.className = 'active';
    }, 200);
}