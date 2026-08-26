import './style.css'
import { loadHomePageContent } from './pages/home-page'
import { loadMenuPageContent } from './pages/menu-page'

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
    document.body.className = ''
    document.body.classList.add(bgClass)
}

homeButton.addEventListener('click', () => {
    clearContent()
    setBackgroundPattern('home')
    loadHomePageContent(contentDivID)
})

menuButton.addEventListener('click', () => {
    clearContent()
    setBackgroundPattern('menu')
    loadMenuPageContent(contentDivID)
})


loadHomePageContent(contentDivID)