var container = document.getElementsByClassName('container')[0];
var arrow = document.getElementsByClassName('arrow')[0];
var header = document.getElementsByTagName('header')[0];
var counter = document.getElementsByClassName('counter');
var headerHeight = header.offsetHeight;


arrow.addEventListener('click', click);
function click() {
    smoothScroll("scroll");
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID) {    
    var node = document.getElementsByClassName(eID)[0];
    var y = node.offsetTop;
    while (node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = 20
    var step = 10;
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; 
            if (leapY > stopY){
                leapY = stopY;
            } 
                
            timer++;
        } return;
   
}

function count(i, cur) {
    counter[i].innerHTML = cur + "%";
    if (cur < numbers[i]) {
        cur++;
        setTimeout(function(){
            count(i, cur);
        }, 10);
    }
}

    // var i=0;    //number counter
   
    // function count(){
    //     for( var j = 0; j < 1; j++){
    //           i++;
    //         timeR = setTimeout("count()", 10);
    //         var num = numbers[j];
    //         counter[j].innerHTML = i + "%";
        
    //         if(i >= num)
    //             {
    //                 clearInterval(timeR);
    //             }
    //             // console.log(counter[j]);
    //     }
       
    // }
  
var numbers = [75, 92, 68, 100, 83, 50];

var windowHeight = document.documentElement.clientHeight;
var counterId = document.getElementById('counterId');
var counterIdHeight = counterId.offsetHeight;
var height = (windowHeight - counterIdHeight)/2;
var windowCounter = false;


window.onscroll = function(){
    if (counterId.getBoundingClientRect()['top'] <= height && windowCounter == false){
        for (var i = 0; i < 6; i++) {
            count(i, 0);
        }
        windowCounter = true
    }
}







