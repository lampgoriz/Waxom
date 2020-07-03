let slider ={
    sliderImagesSrc: ["url('./img/slider/header__bg-1.png')","url('./img/slider/header__bg-2.png')", "url('./img/slider/header__bg-3.png')"],
    i: 0,
    sliderButtonPrev: document.getElementById('prevButton'),
    sliderButtonNext: document.getElementById('nextButton'),
    sliderDotsArr: document.getElementsByClassName("slider__dot"),
    start: function () {
        let that = this;

        this.sliderButtonPrev.addEventListener('click',function (event) {
            that.sliderButtonPrevClick(event);
        });

        this.sliderButtonNext.addEventListener('click',function (event) {
            that.sliderButtonNextClick(event);
        });
    },
    sliderButtonNextClick: function (event){
    this.sliderDotsArr[this.i].classList.remove('active__dot');
    this.i++;
    if(this.i > 2){
        this.i = 0;
    }
    this.sliderDotsArr[this.i].classList.add('active__dot');
    introH.style.backgroundImage = this.sliderImagesSrc[this.i];
    },
    sliderButtonPrevClick: function (event){
    this.sliderDotsArr[this.i].classList.remove('active__dot');
    this.i--;
    if(this.i < 0){
        this.i = 2;
    }
    this.sliderDotsArr[this.i].classList.add('active__dot');
    introH.style.backgroundImage = this.sliderImagesSrc[this.i];
    },

}