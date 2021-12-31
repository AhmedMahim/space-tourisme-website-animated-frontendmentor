function tabBgChange(){
    if(x.matches){
        document.querySelector('#banner').src = './assets/technology/image-launch-vehicle-landscape.jpg';
    }else{
        document.querySelector('#banner').src = './assets/technology/image-launch-vehicle-portrait.jpg';
    }
}

var x = window.matchMedia('(max-width: 768px)');

tabBgChange(x);

x.addListener(tabBgChange);