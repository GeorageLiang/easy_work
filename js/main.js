/**
 * Created by Administrator on 2016/7/4.
 */
try {
    //if(swfobject){
    //    swfobject.embedSWF("swf/bg1920x760.swf", "swf", "1920", "760", "9",null,null, {menu: "false",wmode:"transparent",scale:"noscale",allowScriptAccess: "always"});
    //}
}
catch(e){
    console.error("swfobject erro");
}
finally{
    $("document").ready(function(){
        $(".close").on("click",function(){
            $(".mask").hide();
            $(".pop-container").hide();
            return false;
        });
        $("body").on("click",function(){
            $(".pop1").show();
            $(".mask").show();
            return false
        });
    });
}






