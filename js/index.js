const menu = document.getElementById("menu")
const mobileMenu = document.getElementById("mobile-menu")
const menuGroup = document.getElementById("menu-group")
const show = document.getElementById("show")
const videoShow = document.getElementById("video-show")
const videoMenu = document.getElementById("video-menu")
const videoShowTitle = document.getElementById("video-show-title")
const videoShowDesc = document.getElementById("video-show-desc")
const search = document.getElementById("search");
search.value = ""
const logo = document.getElementById("logo")
const logo2 = document.getElementById("logo2")
let video = {}

const createElement = ( tagName = "div", className = "", father = "", innerHTML = "") => {
    let tag = document.createElement(tagName)
    tag.className = className
    tag.innerHTML = innerHTML
    father.appendChild(tag)
    return tag
}

search.addEventListener("onchange", ()=>{
    console.log("Salom")
})

const data = [
    {
        id: 1,
        name: "Travel by Captiva",
        img: "././images/Img1.jpg",
        video: "./videos/video1.mp4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam.",
        time: "0:12"
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        img: "././images/Img2.jpg",
        video: "./videos/video2.mp4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam.",
        time: "0:23"
    },
    {
        id: 3,
        name: "Cobalt drift",
        img: "././images/Img3.jpg",
        video: "./videos/video3.mp4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam.",
        time: "0:10"
    },
    {
        id: 4,
        name: "Captiva Kartej",
        img: "././images/Img4.jpg",
        video: "./videos/video4.mp4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam.",
        time: "0:43"
    },
    {
        id: 5,
        name: "Gentra kotta bollarniki",
        img: "././images/Img5.jpg",
        video: "./videos/video5.mp4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam.",
        time: "0:07"
    },
    {
        id: 6,
        name: "Cristiano Ronaldo",
        img: "././images/Img6.jpg",
        video: "./videos/video6.mp4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam.",
        time: "0:25"
    },
]


data.forEach(item => {
    const col_4 = createElement("div", "col-4", menuGroup, "")
    const card = createElement("div", "card", col_4, "")
    const img = createElement("div", "img", card, "")
    const span = createElement("span", "", img, item.time)
    const info = createElement("div", "info", card, "")
    const h1 = createElement("h1", "", info, item.name)
    const p = createElement("p", "", info, item.description)
    img.style.backgroundImage = `url(${item.img})`
    card.addEventListener("click", () => {
        video = item
        show.style.display = "block"
        menu.style.display = "none";
        videoShow.src = `${item.video}`
        videoShowTitle.innerHTML = item.name
        videoShowDesc.innerHTML = item.description

        data.forEach(menu=>{
            const menu_item = createElement("div", "menu-item",videoMenu, "")
            const menu_img = createElement("div", "img",menu_item, "")
            menu_img.style.backgroundImage = `url(${menu.img})`
            const vidoe_info = createElement("div", "video-info",menu_item, "")
            const h1 = createElement("h1", "", vidoe_info, menu.name)
            const p = createElement("p", "", vidoe_info, menu.description)
            menu_item.addEventListener("click", ()=>{
                console.log("salom")
                video = item
                videoShow.src = `${menu.video}`
                videoShowTitle.innerHTML = menu.name
                videoShowDesc.innerHTML = menu.description
            })
        })
    })
})

logo.addEventListener("click", () => {
    show.style.display = "none"
    menu.style.display = "block"
    videoMenu.innerHTML = ""
    videoShow.src = ""
})

logo2.addEventListener("click", () => {
    show.style.display = "none"
    menu.style.display = "block"
    videoMenu.innerHTML = ""
    videoShow.src = ""
})


function openCloseMenu(){
    mobileMenu.style.display =  mobileMenu.style.display == "none"? "block" : "none"
}