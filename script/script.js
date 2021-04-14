$(function () {

    var slideGo = setInterval(fnSlide, 2000);

 ////////////////////자동 슬라이드쇼//////////////////////////////////

    function fnSlide(){
        $(".shuttleFrame").animate({
            "margin-left":"-370px"
        },
        800,
        "swing",
        function(){
            $(".shuttleFrame>span:first").insertAfter(".shuttleFrame>span:last");
            $(".shuttleFrame").css({"margin-left":"0px"});
        });
    }
 ////////////////////자동 슬라이드쇼//////////////////////////////////

////////////////////일시정지&시작 버튼 전환/////////////////////

    $(".btnArea").mouseover(function () {
        var srcValue = "images/control_play.png"
        $("#pauseBtn").attr("src", srcValue);

        clearInterval(slideGo);

    });


    $(".btnArea").mouseout(function () {
        var srcValue = "images/control_pause.png"
        $("#pauseBtn").attr("src", srcValue);

        slideGo = setInterval(fnSlide, 2000);

    });

 ////////////////////일시정지&시작 버튼 전환/////////////////////

 ////////////////////이전(btnPrev)으로 이동버튼/////////////////////
        $("#btnPrev").click(function(){
            $(".shuttleFrame").css({"margin-left":"-370px"});
            $(".shuttleFrame>span:last").insertBefore(".shuttleFrame>span:first");

        $(".shuttleFrame").animate({
            "margin-left":"0px"
        },
        800,
        )
    });
 ////////////////////이전(btnPrev)으로 이동버튼/////////////////////

////////////////////다음(btnNext)으로 이동버튼/////////////////////
    $("#btnNext").click(function(){
        $(".shuttleFrame").animate({
            "margin-left":"-370px"
        },
        800,
        function(){
            $(".shuttleFrame>span:first").insertAfter(".shuttleFrame>span:last");
            $(".shuttleFrame").css({"margin-left":"0px"});
        });
    });
////////////////////다음(btnNext)으로 이동버튼/////////////////////




});






