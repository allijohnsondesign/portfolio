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
