let active_links = {
    linksArr: document.getElementsByClassName('nav__link'),
    i:0,

    start: function(){
        let that = this;
        for (let i = 0; i < this.linksArr.length; i++){
            let linkButton = this.linksArr[i];
            linkButton.addEventListener('click',function (event) {
                that.addActiveLink(event);
            });
        }
    },

    addActiveLink: function (event) {
    let clickedLink = event.currentTarget;

    for (this.i = 0; this.i < this.linksArr.length; this.i++){
        if(this.linksArr[this.i].classList.contains("nav__link-active")){
            this.linksArr[this.i].classList.remove("nav__link-active");
        }
    }

    clickedLink.classList.add("nav__link-active");
    nav_toggle.classList.remove('nav-toggle-active');
    header.classList.remove('header__fixed-active');
    navMenu.classList.remove('nav__active');
    },
}
