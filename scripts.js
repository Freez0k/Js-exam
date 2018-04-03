elem1 = document.getElementById("im1");
elem2 = document.getElementById("im2");
elem3 = document.getElementById("im3");
elem4 = document.getElementById("im4");
var p1 = new Page ("images/HM_almostforgot_01.jpg","images/HM_almostforgot_02.png","images/HM_almostforgot_03.png","images/HM_almostforgot_04.png","Folowing The DNA Project,the year-long musical experiment that documented the making of his latest album in real-time J.Views and Hello Monday","#1640e5","#AlmostForgot A new kind of music video","#345aef");
var p2 = new Page("images/yt-kid-01.jpg","images/yt-kid-02.png","images/yt-kid-03.png","","Together with Youtube, we've created an app directed at children so they can enjoy the enormous amount of fun, educational","#ef1a1a","Youtube Kids Safe and fun digital playtime","#513e3e");
var p3 = new Page("images/HM_nasagenelab_01.jpg","images/HM_nasagenelab_02.png","","","Cutting-edge biological expriments conducted in space. Discoveries made in microgravity. This is GeneLab","#ad7951","NASA GeneLab Visualizing biology in microgravity","#2a2856");
var p4 = new Page("images/HM_Landing_page_nat-geo_layer1.jpg","images/HM_Landing_page_nat-geo_layer2.png","images/HM_Landing_page_nat-geo_layer3.png","","Follow the journeys of 4 bears navigating the heart of Yellowstone,as seen from the bears own point of view.","#323138","National Geographic A Bear's Eye View of Yellowstone","#4c4a54");
var p5 = new Page("images/HM_gcp_01.jpg","images/HM_gcp_02.png","images/HM_gcp_03.png","images/HM_gcp_04.png","Machine Learning meets abstract expressionism in this thought-provoking video for Google Cloud Platform","#45434c","Google Cloud Platform Machine Learning","#d3d2d8");
var p6 = new Page ("images/HM_Landing_page_tnc_layer1.jpg","images/HM_Landing_page_tnc_layer2.png","images/HM_Landing_page_tnc_layer3.png","","Why save a single forest when you can save 100 forests? This is the philosophy of The Nature Converservancy of California, one of the world's most infulential and reliable nonprofit ogranizations.","#45434c","The Nature Conservancy, CA Website redesign","#d3d2d8");
var p7 = new Page ("images/HM_Landing_page_bendy10_layer1.jpg","images/HM_Landing_page_bendy10_layer2.png","images/HM_Landing_page_bendy10_layer3.png","images/HM_Landing_page_bendy10_layer4.png","The ancient myth of Narcissus is becoming more revelant than ever. Obviously, you're bound to become a bit self-centered when you're the son of the river god and a nymph,but the story shows","#521756","Bendy 10 Capturing the spirit of our time","#944a99")
var Pages = [];
var count = 0;
Pages.push(p1);
Pages.push(p2);
Pages.push(p3);
Pages.push(p4);
Pages.push(p5);
Pages.push(p6);
Pages.push(p7);


function Page(firstImage,secondImage,thirdImage,fourthImage,text,color,header,colortext){
    this.firstImage = firstImage;
    this.secondImage = secondImage;
    this.thirdImage = thirdImage;
    this.fourthImage = fourthImage;
    this.text = text;
    this.color = color;
    this.header = header;
    this.colortext = colortext;
}
function Parallax(event)
{
    var MouseX = event.clientX;
    var MouseY = event.clientY;
    var elem = event.srcElement;
    
    elem1.style.left = MouseX/40 + 200+"px";
    elem2.style.left = MouseX/35 + 160+"px";
    elem3.style.left = MouseX/20 + 145+"px";
    elem4.style.left = MouseX/15 + 150+"px";
    
    elem1.style.top = MouseY/45 + 110+"px";
    elem2.style.top = MouseY/40 + 70+"px";
    elem3.style.top = MouseY/35 + 100+"px";
    elem4.style.top = MouseY/15 + 90+"px";     
}
$(function()
 {  
    
    $('#b').on('mousewheel',function(e)
                          {
        if(e.deltaY == 100)
            
            $("#gal1").click();
        else
            {
            $("#gal2").click();
                e.preventDefault();
            }
    });

    $("#gal1").click(function()
                        {
        if(count == 6)
            count = 0;
        else
            count++;
        $("#im1").attr('src',Pages[count].firstImage);
        $("#im2").attr('src',Pages[count].secondImage
                      );
        $("#im3").attr('src',Pages[count].thirdImage
                      );
        $("#im4").attr('src',Pages[count].fourthImage)
        $(".text").css("color",Pages[count].colortext);
        $(".colorblock").css("background-color",Pages[count].color);
        $(".header").text(Pages[count].header);
        $(".text").text(Pages[count].text);
        
    })
    $("#gal2").click(function()
                        {
        if(count == 0)
            count = 6;
        else
            count--;
        $("#im1").attr('src',Pages[count].firstImage);
        $("#im2").attr('src',Pages[count].secondImage
                      );
        $("#im3").attr('src',Pages[count].thirdImage
                      );
        $("#im4").attr('src',Pages[count].fourthImage
                       
                      );
        $(".text").css("color",Pages[count].colortext);
        $(".colorblock").css("background-color",Pages[count].color);
        $(".header").text(Pages[count].header);
        $(".text").text(Pages[count].text);
    })
})