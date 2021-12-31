function tabBgChange(){
    if(x.matches){
        document.querySelector('body').style.background = 'url(./assets/home/background-home-tablet.jpg)';
    }else{
        document.querySelector('body').style.background = 'url(./assets/home/background-home-desktop.jpg)';
        document.querySelector('body').style.backgroundSize = 'cover';
        document.querySelector('body').style.backgroundPosition = 'top center';
    }
}

var x = window.matchMedia('(max-width: 768px)');

tabBgChange(x);

x.addListener(tabBgChange);

