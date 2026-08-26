
export function loadMenuPageContent(id) {

    console.log('Menu Page Loaded!')
    const contentDiv = document.getElementById(id)

    const menuSection = document.createElement('div')
    menuSection.className = 'menu-section'

    const MENU = {
        'The Great Feast': {
            'Thor\'s Thunder Roast': 18,
            'Odin\'s Allfather Platter': 24,
            'Sæhrímnir\'s Eternal Roast': 22,
            'Einherjar\'s Feast': 20
        },
        'From the Golden Hearth': {
            'Bifrost Bread': 6,
            'Golden Hearth Potatoes': 7,
            'Freya\'s Harvest': 9,
            'Frost Giant\'s Stew': 10
        },
        'Mead & Brews': {
            'Odin\'s Golden Mead': 8,
            'Bifrost Elixir': 7,
            'Frost Giant Brew': 8,
            'Idunn\'s Apple Tonic': 6
        },
        'Sweet Offerings': {
            'Idunn\'s Golden Apples': 8,
            'Valhalla Honey Cake': 9,
            'Asgardian Berry Tart': 9
        }
    }

    // page title
    const menuPageTitleContainer = document.createElement('div')
    menuPageTitleContainer.className = 'section'
    menuPageTitleContainer.id = 'menu-page-title'

    const menuPageTitle = document.createElement('div')
    menuPageTitle.className = 'section-heading'
    menuPageTitle.textContent = 'The Feast of the Nine Realms'

    menuPageTitleContainer.append(menuPageTitle)
    menuSection.append(menuPageTitleContainer)

    for (const category in MENU) {

        if (!Object.hasOwn(MENU, category)) continue;

        const section = document.createElement('div')
        section.className = 'section'

        const textArea = document.createElement('div')
        textArea.className = 'text-area'

        const sectionHeading = document.createElement('div')
        sectionHeading.className = 'section-heading'

        sectionHeading.textContent = category

        const sectionContent = document.createElement('div')
        sectionContent.className = 'section-content'

        const categoryItems = MENU[category]

        for (const dish in categoryItems) {

            const menuItem = document.createElement('div')
            menuItem.className = 'menu-item'

            const dishName = document.createElement('span')
            dishName.className = 'dish-name'
            dishName.textContent = dish

            const dishPrice = document.createElement('div')
            dishPrice.className = 'dish-price'
            dishPrice.textContent = categoryItems[dish]

            menuItem.append(dishName, dishPrice)

            sectionContent.append(menuItem)
        }

        textArea.append(sectionHeading, sectionContent)
        section.append(textArea)
        menuSection.append(section)

        // Adding dummy sections
        const dummySection = document.createElement('div')
        dummySection.className = 'section'
        dummySection.style.setProperty('display', 'none')

        menuSection.append(dummySection)
    }

    contentDiv.append(menuSection)
}