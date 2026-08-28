

export function loadAboutPageContent(id) {

    console.log('About Page Loaded!')
    const contentDiv = document.getElementById(id)

    const aboutSection = document.createElement('div')
    aboutSection.className = 'about-section'


    // HERO SECTION
    const heroSection = document.createElement('div')
    heroSection.className = 'hero-section'

    const h2 = document.createElement('h2')
    h2.textContent = 'Odin Feast'

    const h4 = document.createElement('h4')
    h4.textContent = 'A Hall at the Heart of Asgard'

    heroSection.append(h2, h4)

    // SECTION
    const section = document.createElement('div')
    section.className = 'section'

    const textArea = document.createElement('div')
    textArea.className = 'text-area'

    const sectionHeading = document.createElement('div')
    sectionHeading.className = 'section-heading'
    sectionHeading.textContent = 'About Odin Feast'

    const hr = document.createElement('hr')

    const sectionContent = document.createElement('div')
    sectionContent.className = 'section-content'
    sectionContent.innerHTML = '<strong>A Hall for All</strong><br><br>\
                        At Odin Feast, we believe a great meal is best shared with good company. <br><br>\
                        Inspired by the halls of Asgard, we bring together hearty food, warm hospitality, and the spirit of the Nine Realms under one roof. <br><br>\
                        Whether you\'ve crossed the Bifrost for a grand feast or simply stopped by for a quiet meal, there is always a place at our table. <br><br>\
                        <strong>Come hungry. Leave legendary.</strong>'

    textArea.append(sectionHeading, hr, sectionContent)
    section.append(textArea)

    aboutSection.append(heroSection, section)
    contentDiv.append(aboutSection)
}