/**
 * Created by jserk on 2017/5/5.
 */
$(function () {
    pageBase.init();
});

var navId = '';

var pageBase = function () {
    var pageBase = {};

    function is_weixin(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    pageBase.init = function () {
        $(".homePageNav").click(function () {
            $(".navPart").removeClass("navPartActive");
            if(document.getElementById("productFunction")) {
                console.log(1);
                if (navId != 'homePage') {
                    $('html,body').animate({scrollTop: 0}, 800);
                    navId = 'homePage';
                }
            }else{
                window.location = '/';
            }
        });

        $(".productFunctionNav").click(function () {
            $(".navPart").removeClass("navPartActive")
            $(this).addClass("navPartActive");
            if(document.getElementById("productFunction")) {
                if (navId != 'productFunction') {
                    $('html,body').animate({scrollTop: $('#productFunction').offset().top - 60}, 800);
                    navId = 'productFunction';
                }
            }else{
                window.location = '/#productFunction';
            }
        });

         $(".versionSelectNav").click(function () {
            $(".navPart").removeClass("navPartActive")
            $(this).addClass("navPartActive");
            if(document.getElementById("versionSelect")) {
                if (navId != 'versionSelect') {
                    $('html,body').animate({scrollTop: $('#versionSelect').offset().top - 60}, 800);
                    navId = 'versionSelect';
                }
            }else{
                window.location = '/#versionSelect';
            }
        });

        $(".excellentCaseNav").click(function () {
            $(".navPart").removeClass("navPartActive")
            $(this).addClass("navPartActive");
            if(document.getElementById("productFunction")) {
                if (navId != 'excellentCase') {
                    $('html,body').animate({scrollTop: $('#excellentCase').offset().top - 60}, 800);
                    navId = 'excellentCase';
                }
            }else{
                window.location = '/#excellentCase';
            }
        });


        $(".partIntro").click(function () {
            $(".navPart").removeClass("navPartActive")
            $(this).addClass("navPartActive");
            if(document.getElementById("productFunction")) {
                if (navId != 'partIntro') {
                    $('html,body').animate({scrollTop: $('#partIntro').offset().top - 60}, 800);
                    navId = 'partIntro';
                }
            }else{
                window.location = '/#partIntro';
            }
        });

        $(".wxIcon").mouseenter(function () {
            $(".wxQrcodeBox").show();
        });

        $(".wxIcon").mouseleave(function () {
            $(".wxQrcodeBox").hide();
        });

       

        $(".weiboIcon").click(function () {
            window.open('http://weibo.com/u/6249221138?refer_flag=1001030101_&is_all=1');
        })
    };

    return pageBase;
}();