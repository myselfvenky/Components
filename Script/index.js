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
]

var addmargin = (element) => {
    elements.map((id) => {
        if (id != element.id) {
            var el = document.getElementById(id)
            el.classList.remove("margin-maker")
            console.log(el.querySelectorAll("div").item)
            document.getElementById("carousel").style.backgroundColor = "none"
            el.querySelectorAll("div")[0].classList.remove("rotate-center")
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

    document.getElementById("carousel").style.backgroundColor = "#000"
    var data = el.querySelectorAll("div")[0].classList.add("rotate-center")
    var data = el.querySelectorAll("div")[1].classList.add("rotate-right")
    var data = el.querySelectorAll("div")[2].classList.add("rotate-left")
    setTimeout(() => {
        el.classList.add("godown")
    }, 2000)
    console.log(data)



}