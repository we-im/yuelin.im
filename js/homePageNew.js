
$(function () {
    homePageNew.init();
});


    function GetQueryString(name) {  //鑾峰彇search鍙傛暟
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    homePageNew.init = function () {

        //灏哻hannel瀛樺叆cookie
        var channel = GetQueryString('channel');
        $.cookie('channel', channel, {
            expires: 7,
            domain: 'www.weimtek.com',
            path: '/'
        });
     
            if(scroll_top>=$('#productFunction').offset().top - 60&&scroll_top < $('#productFunction').offset().top + 300){
                $(".navPart").removeClass("navPartActive");
                $(".productFunctionNav").addClass("navPartActive");
            }else if (scroll_top>=$('#excellentCase').offset().top - 60&&scroll_top < $('#excellentCase').offset().top + 300){
                $(".navPart").removeClass("navPartActive");
                $(".excellentCaseNav").addClass("navPartActive");
            }else{
                $(".navPart").removeClass("navPartActive")
            }

        })

        $(".casePart").mouseenter(function () {
            $(this).find(".qrcodeImg").fadeIn(200);
        })

        $(".casePart").mouseleave(function () {
            $(this).find(".qrcodeImg").fadeOut(200);
        })

        $(".btnGrey,.m_btnGrey").mousedown(function () {
            $("this").addClass('btnGreyClick')
        });

        $(".btnGrey,.m_btnGrey").mouseup(function () {
            $("this").removeClass('btnGreyClick')
        });

        $(".btnBlue,.m_btnBlue").mousedown(function () {
            $("this").addClass('btnBlueClick')
        });

        $(".btnBlue,.m_btnBlue").mouseup(function () {
            $("this").removeClass('btnBlueClick')
        });

        //璁剧疆鏉ユ簮cookie
        function GetQueryString(name) {  //鑾峰彇search鍙傛暟
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
        var channel = GetQueryString('channel');

        $.cookie('channel', channel, {
            expires: 7,
            domain: 'xiaoe-tech.com',
            path: '/'
        });
    }

    return homePageNew;
}();