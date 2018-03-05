elem1 = document.getElementById("im1");
elem2 = document.getElementById("im2");
elem3 = document.getElementById("im3");
elem4 = document.getElementById("im4");
var p1 = new Page ("images/HM_almostforgot_01.jpg","images/HM_almostforgot_02.png","images/HM_almostforgot_03.png","images/HM_almostforgot_04.png");
var p2 = new Page("images/yt-kid-01.jpg","images/yt-kid-02.jpg","images/yt-kid-03.jpg","");
var p3 = new Page("images/HM_nasagenelab_01.jpg","images/HM_nasagenelab_02.jpg","","");
var p4 = new Page("images/HM_Landing_page_nat-geo_layer1.jpg","images/HM_Landing_page_nat-geo_layer2.jpg","","");
var p5 = new Page("images/HM_gcp_01.jpg","images/HM_gcp_02.jpg","images/HM_gcp_03.jpg","images/HM_gcp_04.jpg");
var p6 = new Page ("images/HM_Landing_page_tnc_layer1.jpg","images/HM_Landing_page_tnc_layer2.jpg","images/HM_Landing_page_tnc_layer3.jpg","");
var p7 = new Page ("images/HM_Landing_page_bendy10_layer1.jpg","images/HM_Landing_page_bendy10_layer2.jpg","images/HM_Landing_page_bendy10_layer3.jpg","images/HM_Landing_page_bendy10_layer4.jpg")
var Pages = [];
Pages.push(p1);
Pages.push(p2);
Pages.push(p3);
Pages.push(p4);
Pages.push(p5);
Pages.push(p6);
Pages.push(p7);


function Page(firstImage,secondImage,thirdImage,fourthImage){
    this.firstImage = firstImage;
    this.secondImage = secondImage;
    this.thirdImage = thirdImage;
    this.fourthImage = fourthImage;
}
function Parallax(event)
{
    var MouseX = event.clientX;
    var MouseY = event.clientY;
    var elem = event.srcElement;
    
    elem1.style.left = MouseX/30 + 110+"px";
    elem2.style.left = MouseX/15 + 50+"px";
    elem3.style.left = MouseX/10 + 100+"px";
    elem4.style.left = MouseX/8 + 90+"px";
    
    elem1.style.top = MouseY/40 + 110+"px";
    elem2.style.top = MouseY/30 + 50+"px";
    elem3.style.top = MouseY/20 + 100+"px";
    elem4.style.top = MouseY/15 + 90+"px";     
}