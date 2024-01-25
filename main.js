const hours = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const pm = document.getElementById("pm");
alert(" ur Watching EST Time zone")
function clock()
{
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var pm="am"
    if(h>12){
        h=h-12
        pm="AM"
    }
    hours.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    
}
clock()