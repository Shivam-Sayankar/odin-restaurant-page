import './style.css'
import { loadHomePageContent } from './pages/home-page'

console.log("Hare Krishna!")

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')

const contentDivID = 'content'

function clearContent() {
    const contentDiv = document.getElementById(contentDivID)
    contentDiv.replaceChildren()
}

function setBackgroundPattern(page) {
    const bgClass = `${page}-page-bg`
    document.body.classList.remove()
    document.body.classList.add(bgClass)
}

homeButton.addEventListener('click', () => {
    clearContent()
    setBackgroundPattern('home')
    loadHomePageContent(contentDivID)
})

// menuButton.addEventListener('click', () => {
//     clearContent()
//     setBackgroundPattern('menu')
// })


loadHomePageContent(contentDivID)