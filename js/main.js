/**
 * Created by Administrator on 2016/7/4.
 */
$("document").ready(function(){
    $(".close").on("click",function(){
        $(".mask").hide();
        $(".pop-container").hide();
        return false;
    });

    $(".gift-btn--rule").on("click",function(){
//            $(".cake").css("background","url('../images/cake/cake4.png')");
        $(".pop6").show();
        $(".mask").show();
        return false
    });
});



//        $(".cake").css("background","url('../images/cake/cake4.png')");   //点亮蛋糕,cake0,cake1..cake4