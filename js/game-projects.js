class Carousel {
    constructor(contentList, carousel ){
        this.contentList = contentList;
        this.carousel = carousel;
        this.currentIndex = 0;
    }

    click_listeners(){
        this.carousel.leftArrow.addEventListener("click", () => this.previous_slide())
        this.carousel.rightArrow.addEventListener("click", () => this.next_slide())
        this.change_content()
    }

    update_arrows(){
        if (this.currentIndex <= 0){
            this.carousel.leftArrow.style.opacity = '.5'
        }else{
            this.carousel.leftArrow.style.opacity = '1'
        }

        if(this.currentIndex >= this.carousel.content.length-1){
            this.carousel.rightArrow.style.opacity = '.5'
        }else{
            this.carousel.rightArrow.style.opacity = '1'
        }
    }

    change_content(){
        this.update_arrows()
        this.carousel.contentElement.innerHTML = this.carousel.content[this.currentIndex]
        this.carousel.headerElement.innerHTML = this.carousel.headers[this.currentIndex]
        this.carousel.bodyElement.innerHTML = this.carousel.bodies[this.currentIndex]
        switch(this.currentIndex) {
            case 0:
                this.carousel.background.style.backgroundImage = 'linear-gradient(to right, #FF5493, rgba(0,0,0,0) 50%, #FF5493)'
                break;
            case 1:
                this.carousel.background.style.backgroundImage = 'linear-gradient(to right, #E770FF, rgba(0,0,0,0) 50%, #E770FF)'
                break;
            default:
                this.carousel.background.style.backgroundImage = 'linear-gradient(to right, #9B94FF, rgba(0,0,0,0) 50%, #9B94FF)'
                break;
        }
    }

    previous_slide(){
        console.log("previous")
        if (this.currentIndex > 0){
            this.currentIndex --;
            this.change_content()
        }
    }

    next_slide() {
        console.log("next")
        if (this.currentIndex < this.carousel.content.length-1){
            this.currentIndex ++;
            this.carousel.contentElement.innerHTML = this.carousel.content[this.currentIndex]
            this.change_content()
        }
    }
}

let carousel1Elements = {
    background: document.getElementById("carousel-bg-1"),
    leftArrow: document.getElementById("carousel-left-1"),
    rightArrow: document.getElementById("carousel-right-1"),
    contentElement: document.getElementById("carousel-content-1"),
    headerElement: document.getElementById("process-header-1"),
    bodyElement: document.getElementById("process-body-1"),
    content: [
        '<img src="assets/images/R4 Process/image 4.png" alt="">',
        '<img src="assets/images/R4 Process/Chapter Select and Customize Menu Demo.gif" alt="">',
        '<img src="assets/images/R4 Process/Options Menu Demo.gif" alt="">'
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
        '<video src="assets/images/Archer in Training Process/TeamHyperpopMilestone.mp4" controls></video>',
        '<video src="assets/images/Archer in Training Process/Hyperpop Archer_In_Training_FINAL.mp4" controls></video>'
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

let carousel3Elements = {
    background: document.getElementById("carousel-bg-3"),
    leftArrow: document.getElementById("carousel-left-3"),
    rightArrow: document.getElementById("carousel-right-3"),
    contentElement: document.getElementById("carousel-content-3"),
    headerElement: document.getElementById("process-header-3"),
    bodyElement: document.getElementById("process-body-3"),
    content: [
        '<video src="assets/images/Archer in Training Process/TeamHyperpopMilestone.mp4" controls></video>',
        '<video src="assets/images/Archer in Training Process/Hyperpop Archer_In_Training_FINAL.mp4" controls></video>'
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

carousel1 = new Carousel([], carousel1Elements);
carousel2 = new Carousel([], carousel2Elements);

carousel1.click_listeners()
carousel2.click_listeners()
