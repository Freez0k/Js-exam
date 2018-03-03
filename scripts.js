elem1 = document.getElementById("im1");
elem2 = document.getElementById("im2");
elem3 = document.getElementById("im3");
elem4 = document.getElementById("im4");

function Parallax(event)
{
    var MouseX = event.clientX;
    var elem = event.srcElement;
    
    elem1.style.left = MouseX/30 + 110+"px";
    elem2.style.left = MouseX/15 + 50+"px";
    elem3.style.left = MouseX/10 + 100+"px";
    elem4.style.left = MouseX/8 + 90+"px";
}