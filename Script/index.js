const scrollleft = () => {
    console.log("Left")
    document.getElementById("img-container").scrollLeft -= 400;
}
const scrollright = () => {
    console.log("Right")
    document.getElementById("img-container").scrollLeft += 400;
}
var elements = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
]

var addmargin = (element) => {
    elements.map((id) => {
        if (id != element.id) {
            var el = document.getElementById(id)
            el.classList.remove("margin-maker")
            console.log(el.querySelectorAll("div").item)
            el.querySelectorAll("div")[1].classList.remove("rotate-right")
            el.querySelectorAll("div")[2].classList.remove("rotate-left")
            setTimeout(() => {
                el.classList.remove("godown")
            }, 1000)
        }
    })
    // no.classList.add("margin-maker")
    var el = document.getElementById(element.id)
    el.classList.add("margin-maker")


    var data = el.querySelectorAll("div")[1].classList.add("rotate-right")
    var data = el.querySelectorAll("div")[2].classList.add("rotate-left")
    setTimeout(() => {
        el.classList.add("godown")
    }, 1000)
    console.log(data)



}
var removemargin = () => {
    document.getElementsByClassName("image-block").length

}