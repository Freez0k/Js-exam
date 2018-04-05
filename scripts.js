
var p1 = new Page ("images/HM_almostforgot_01.jpg","images/HM_almostforgot_02.png","images/HM_almostforgot_03.png","images/HM_almostforgot_04.png","Folowing The DNA Project,the year-long musical experiment that documented the making of his latest album in real-time J.Views and Hello Monday","#1640e5","#AlmostForgot A new kind of music video","#345aef");
var p2 = new Page("images/yt-kid-01.jpg","images/yt-kid-02.png","images/yt-kid-03.png","","Together with Youtube, we've created an app directed at children so they can enjoy the enormous amount of fun, educational","#ef1a1a","Youtube Kids Safe and fun digital playtime","#513e3e");
var p3 = new Page("images/HM_nasagenelab_01.jpg","images/HM_nasagenelab_02.png","","","Cutting-edge biological expriments conducted in space. Discoveries made in microgravity. This is GeneLab","#ad7951","NASA GeneLab Visualizing biology in microgravity","#2a2856");
var p4 = new Page("images/HM_Landing_page_nat-geo_layer1.jpg","images/HM_Landing_page_nat-geo_layer2.png","images/HM_Landing_page_nat-geo_layer3.png","","Follow the journeys of 4 bears navigating the heart of Yellowstone,as seen from the bears own point of view.","#323138","National Geographic A Bear's Eye View of Yellowstone","#4c4a54");
var p5 = new Page("images/HM_gcp_01.jpg","images/HM_gcp_02.png","images/HM_gcp_03.png","images/HM_gcp_04.png","Machine Learning meets abstract expressionism in this thoug  ht-provoking video for Google Cloud Platform","#45434c","Google Cloud Platform Machine Learning","#d3d2d8");
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
$(function()
 {  
    window.onmousemove = function(e){
        var MouseX = e.clientX;
        var MouseY = e.clientY;
        $(".im1").css('left',MouseX/40 + 200+"px");
        $(".im2").css('left',MouseX/35 + 160+"px");
        $(".im3").css('left',MouseX/20 + 145+"px");
        $(".im4").css('left',MouseX/15 + 150+"px");
        
        
        $(".im1").css('top',MouseY/45 + 110+"px");
        $(".im2").css('top',MouseY/40 + 70+"px");
        $(".im3").css('top',MouseY/35 + 100+"px");
        $(".im4").css('top',MouseY/15 + 90+"px");
    }
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
        var prev = $(".prev");
        var current = $(".current");
        
        $(".prev img").animate({
            top:"0%"
        },700)
        $(".current img").animate({
            top:"-=150%"
        },1400)
        $(".text").css("color",Pages[count].colortext);
        $(".colorblock").css("background-color",Pages[count].color);
        $(".header").text(Pages[count].header);
        $(".text").text(Pages[count].text);
        prev.removeClass("prev");
        prev.addClass("current");
        
        current.removeClass("current");
        current.addClass("prev");
        
        var im1 = $(".im1");
        var im2 = $(".im2");
        var im3 = $(".im3");
        var im4 = $(".im4");
        
        var previm1 = $(".prev_img1");
        var previm2 = $(".prev_img2");
        var previm3 = $(".prev_img3");
        var previm4 = $(".prev_img4");
        
        var nextim1 = $(".next_img1");
        var nextim2 = $(".next_img2");
        var nextim3 = $(".next_img3");
        var nextim4 = $(".next_img4");
        im1.removeClass("im1");
        im1.addClass("next_img1");
        im2.removeClass("im2");
        im2.addClass("next_img2");
        im3.removeClass("im3");
        im3.addClass("next_img3");
        im4.removeClass("im4");
        im4.addClass("next_img4");
        
        previm1.removeClass("prev_img1");
        previm1.addClass("im1");
        previm2.removeClass("prev_img2");
        previm2.addClass("im2");
        previm3.removeClass("prev_img3");
        previm3.addClass("im3");
        previm4.removeClass("prev_img4");
        previm4.addClass("im4");
        
        nextim1.removeClass("next_img1");
        nextim1.addClass("prev_img1");
        nextim2.removeClass("next_img2");
        nextim2.addClass("prev_img2");
        nextim3.removeClass("next_img3");
        nextim3.addClass("prev_img3");
        nextim4.removeClass("next_img4");
        nextim4.addClass("prev_img4");
        $(".im1").attr('src',Pages[count].firstImage);
        $(".im2").attr('src',Pages[count].secondImage);
        $(".im3").attr('src',Pages[count].thirdImage);
        $(".im4").attr('src',Pages[count].fourthImage);

        if(count - 1 < 0)
        {
            $(".prev_img1").attr('src',Pages[6].firstImage);
            $(".prev_img2").attr('src',Pages[6].secondImage);
            $(".prev_img3").attr('src',Pages[6].thirdImage);
            $(".prev_img4").attr('src',Pages[6].fourthImage);
        }
        else
        {
            $(".prev_img1").attr('src',Pages[count-1].firstImage);
            $(".prev_img2").attr('src',Pages[count-1].secondImage);
            $(".prev_img3").attr('src',Pages[count-1].thirdImage);
            $(".prev_img4").attr('src',Pages[count-1].fourthImage);
        }
        if(count + 1 > 6)
        {
            $(".next_img1").attr('src',Pages[0].firstImage);
            $(".next_img2").attr('src',Pages[0].secondImage);
            $(".next_img3").attr('src',Pages[0].thirdImage);
            $(".next_img4").attr('src',Pages[0].fourthImage);
        }
        else
        {
            $(".next_img1").attr('src',Pages[count+1].firstImage);
            $(".next_img2").attr('src',Pages[count+1].secondImage);
            $(".next_img3").attr('src',Pages[count+1].thirdImage);
            $(".next_img4").attr('src',Pages[count+1].fourthImage);
        }
        
        /*$("#im1").attr('src',Pages[count].firstImage);
        $("#im2").attr('src',Pages[count].secondImage
                      );
        $("#im3").attr('src',Pages[count].thirdImage
                      );
        $("#im4").attr('src',Pages[count].fourthImage)
        $(".text").css("color",Pages[count].colortext);
        $(".colorblock").css("background-color",Pages[count].color);
        $(".header").text(Pages[count].header);
        $(".text").text(Pages[count].text);
        */
    })
    $("#gal2").click(function()
                        {
        if(count == 0)
            count = 6;
        else
            count--;
        /*$("#im1").attr('src',Pages[count].firstImage);
        $("#im2").attr('src',Pages[count].secondImage
                      );
        $("#im3").attr('src',Pages[count].thirdImage
                      );
        $("#im4").attr('src',Pages[count].fourthImage
                       
                      );
        $(".text").css("color",Pages[count].colortext);
        $(".colorblock").css("background-color",Pages[count].color);
        $(".header").text(Pages[count].header);
        $(".text").text(Pages[count].text);*/
    })
})