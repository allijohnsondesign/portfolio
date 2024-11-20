let carousel3Elements = {
    background: document.getElementById("carousel-bg-3"),
    leftArrow: document.getElementById("carousel-left-3"),
    rightArrow: document.getElementById("carousel-right-3"),
    contentElement: document.getElementById("carousel-content-3"),
    headerElement: document.getElementById("process-header-3"),
    bodyElement: document.getElementById("process-body-3"),
    content: [
        '<img src="./assets/images/Weaving Center Process/Screenshot 2024-11-08 at 6.48.38ΓÇ»PM 1.png" alt="">',
        '<img src="./assets/images/Weaving Center Process/Attract Screen - Pink 1.png" alt="">',
        '<video src="./assets/images/Weaving Center Process/Weaving Center Video.mp4" controls></video>'
    ],
    headers: [
        'Prototype | Figma',
        'Low Fidelity Mockup | Figma',
        'High Fidelity Final | Figma'
    ],
    bodies: [
        'I created a low-fidelity mockup in Figma based on a blueprint created by the Lead Interactive Designer, Brad McKinney.',
        'During my internship, I designed the low fidelity mockup for the interactive. This included experimenting with the user flow, creating themed assets, and interpreting the original blueprint provided. (No video available)',
        'Based on the low fidelity mockup from my internship, Brad McKinney finalized the design of the interactive, complete with animated transitions and the final visual design.'
    ]
    
}

let carousel4Elements = {
    background: document.getElementById("carousel-bg-4"),
    leftArrow: document.getElementById("carousel-left-4"),
    rightArrow: document.getElementById("carousel-right-4"),
    contentElement: document.getElementById("carousel-content-4"),
    headerElement: document.getElementById("process-header-4"),
    bodyElement: document.getElementById("process-body-4"),
    content: [
        '<img src="./assets/images/Monkey Drone Process/Screenshot 2024-11-08 at 7.05.44ΓÇ»PM Cropped 1.png" alt="">',
        '<img src="./assets/images/Monkey Drone Process/Monkey UI.png" alt="">',
        '<video src="./assets/images/Monkey Drone Process/Monkey Drone VIdeo.mp4" controls></video>'
    ],
    headers: [
        'Prototype | Figma',
        'Low Fidelity Mockup | Figma',
        'High Fidelity Final | Figma'
    ],
    bodies: [
        'I created a low-fidelity mockup in Figma based on a blueprint created by the Lead Interactive Designer, Brad McKinney. I also created the basic assets in Adobe Illustrator.',
        'During my internship, I designed the low fidelity mockup for the interactive. This included experimenting with the user flow, creating themed assets, and interpreting the original blueprint provided. (No video available)',
        'Based on the low fidelity mockup from my internship, Brad McKinney finalized the design of the interactive, complete with the final visual design and polished assets.'
    ]
    
}

carousel3 = new Carousel([], carousel3Elements);
carousel4 = new Carousel([], carousel4Elements);

carousel3.click_listeners()
carousel4.click_listeners()