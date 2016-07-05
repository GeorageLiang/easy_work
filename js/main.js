/**
 * Created by Administrator on 2016/7/4.
 */
$("document").ready(function(){
    $(".close").on("click",function(){
        $(".mask").hide();
        $(".pop-container").hide();
        return false;
    });

    $("body").on("click",function(){
        $(".pop6").show();
        $(".mask").show();
        return false
    });
});
