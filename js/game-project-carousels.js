let carousel1Elements = {
    background: document.getElementById("carousel-bg-1"),
    leftArrow: document.getElementById("carousel-left-1"),
    rightArrow: document.getElementById("carousel-right-1"),
    contentElement: document.getElementById("carousel-content-1"),
    headerElement: document.getElementById("process-header-1"),
    bodyElement: document.getElementById("process-body-1"),
    content: [
        '<img src="./assets/images/R4 Process/image 4.png" alt="">',
        '<img src="./assets/images/R4 Process/Chapter Select and Customize Menu Demo.gif" alt="">',
        '<img src="./assets/images/R4 Process/Options Menu Demo.gif" alt="">'
    ],
    headers: [
        'Prototype | Adobe XD',
        'Character Customization Final | Godot',
        'Options Menu Final | Godot'
    ],
    bodies: [
        'Focused on 2 interactions: the options menu and the character customization menu.',
        'In the character customization menu, the user can choose the pronouns, voice, and color palette of their character. (Visuals by Kylee Dicken)',
        'In the options menu, the user can adjust the volume settings of the voices and music, as well as the text speed. (Visuals by Kylee Dicken)'
    ]
    
}

let carousel2Elements = {
    background: document.getElementById("carousel-bg-2"),
    leftArrow: document.getElementById("carousel-left-2"),
    rightArrow: document.getElementById("carousel-right-2"),
    contentElement: document.getElementById("carousel-content-2"),
    headerElement: document.getElementById("process-header-2"),
    bodyElement: document.getElementById("process-body-2"),
    content: [
        '<video src="./assets/images/Archer in Training Process/TeamHyperpopMilestone.mp4" controls></video>',
        '<video src="./assets/images/Archer in Training Process/Hyperpop Archer_In_Training_FINAL.mp4" controls></video>'
    ],
    headers: [
        'Prototype | Godot',
        'Final Gameplay | Godot'
    ],
    bodies: [
        'Experimenting with UX implementation in project 1, and testing 3D movement in project 2, though this was scrapped.',
        'Now complete with visuals, narrative, sound design, and UI/UX design, “Archer in Training” contains 3 levels that get more difficult as the player progresses.'
    ]
    
}

carousel1 = new Carousel([], carousel1Elements);
carousel2 = new Carousel([], carousel2Elements);

carousel1.click_listeners()
carousel2.click_listeners()