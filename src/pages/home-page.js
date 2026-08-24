
export function loadHomePageContent(id) {

    document.body.classList.add('home-page-bg')

    console.log('Home Paged Loaded!')
    const contentDiv = document.getElementById(id)


    // ---- HERO SECTION ----
    const heroSection = document.createElement('div')
    heroSection.classList.add('hero-section')

    const h1 = document.createElement("h1")
    h1.textContent = 'Odin Feast'

    const h4 = document.createElement("h4")
    h4.textContent = 'The Eternal Hall of Asgard'

    heroSection.append(h1, h4)


    // ---- CONTENTS SECTION ----
    const contentsSections = document.createElement('div')
    contentsSections.classList.add('content-sections')

    // 1st section
    const sectionOne = document.createElement('div')
    sectionOne.classList.add('section')

    const textAreaOne = document.createElement('div')
    textAreaOne.classList.add('text-area')

    const sectionOneHeading = document.createElement('div')
    sectionOneHeading.classList.add('section-heading')

    sectionOneHeading.textContent = 'A hall of fire, gold, and feast - inspired by the legends of Asgard.'

    const horizontalRuleOne = document.createElement('hr')

    const sectionOneContent = document.createElement('div')
    sectionOneContent.classList.add('section-content')

    sectionOneContent.textContent = 'At Odin Feast, every dish is crafted with purpose, blending bold flavors with a touch of the divine. Each table is more than a place to dine — it is where moments are shared and stories begin.'

    textAreaOne.append(
        sectionOneHeading,
        horizontalRuleOne,
        sectionOneContent
    )

    sectionOne.append(
        textAreaOne
    )


    // 2nd section
    const sectionTwo = document.createElement('div')
    sectionTwo.classList.add('section')

    const textAreaTwo = document.createElement('div')
    textAreaTwo.classList.add('text-area')

    const sectionTwoHeading = document.createElement('div')
    sectionTwoHeading.classList.add('section-heading')

    sectionTwoHeading.textContent = 'What Awaits You'

    const horizontalRuleTwo = document.createElement('hr')

    const subHeadingOne = document.createElement('div')
    subHeadingOne.classList.add('section-sub-heading')
    subHeadingOne.textContent = 'Feasts for the Worthy'

    const boxedTextOne = document.createElement('div')
    boxedTextOne.classList.add('section-content', 'boxed-text')
    boxedTextOne.textContent = 'Hearty, flame-crafted meals designed to satisfy both hunger and spirit.'

    const subHeadingTwo = document.createElement('div')
    subHeadingTwo.classList.add('section-sub-heading')
    subHeadingTwo.textContent = 'Mythic Brews'

    const boxedTextTwo = document.createElement('div')
    boxedTextTwo.classList.add('section-content', 'boxed-text')
    boxedTextTwo.textContent = 'Golden mead and rich ales, poured in the tradition of ancient halls.'


    const subHeadingThree = document.createElement('div')
    subHeadingThree.classList.add('section-sub-heading')
    subHeadingThree.textContent = 'Timeless Ambience'

    const boxedTextThree = document.createElement('div')
    boxedTextThree.classList.add('section-content', 'boxed-text')
    boxedTextThree.textContent = 'Warm firelight, echoing spaces, and an atmosphere that lingers long after you leave.'

    const sideImage = document.createElement('div')
    sideImage.classList.add('side-image')

    textAreaTwo.append(
        sectionTwoHeading,
        horizontalRuleTwo,

        subHeadingOne,
        boxedTextOne,

        subHeadingTwo,
        boxedTextTwo,

        subHeadingThree,
        boxedTextThree
    )

    sectionTwo.append(
        textAreaTwo,
        sideImage
    )

    // 3rd section
    const sectionThree = document.createElement('div')
    sectionThree.classList.add('section')

    const textAreaThree = document.createElement('div')
    textAreaThree.classList.add('text-area')

    const sectionThreeHeading = document.createElement('div')
    sectionThreeHeading.classList.add('section-heading')
    sectionThreeHeading.textContent = 'Experience'

    const horizontalRuleThree = document.createElement('hr')

    const sectionThreeContent = document.createElement('div')
    sectionThreeContent.classList.add('section-content')
    sectionThreeContent.textContent = 'Inspired by the spirit of Odin, every detail is shaped to create a dining experience that feels both powerful and timeless.\nHere, meals are not rushed — they are savored, shared, and remembered.'

    textAreaThree.append(
        sectionThreeHeading,
        horizontalRuleThree,
        sectionThreeContent
    )

    sectionThree.append(
        textAreaThree
    )


    // 4th section
    const sectionFour = document.createElement('div')
    sectionFour.classList.add('section')

    const textAreaFour = document.createElement('div')
    textAreaFour.classList.add('text-area')

    const sectionFourHeading = document.createElement('div')
    sectionFourHeading.classList.add('section-heading')
    sectionFourHeading.textContent = 'Closing Invite'

    const horizontalRuleFour = document.createElement('hr')

    const sectionFourContent = document.createElement('div')
    sectionFourContent.classList.add('section-content')
    sectionFourContent.textContent = 'Whether you come to feast, to unwind, or simply to experience something different, Odin Feast welcomes you.\nYour seat awaits in the hall.'

    textAreaFour.append(
        sectionFourHeading,
        horizontalRuleFour,
        sectionFourContent
    )

    sectionFour.append(
        textAreaFour
    )


    contentsSections.append(
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour
    )

    contentDiv.append(
        heroSection,
        contentsSections
    )
}
