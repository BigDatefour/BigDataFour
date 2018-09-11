$(function(){
    //²àµ¼º½
    $(".aside li").mouseenter(function(){
        $(".aside li").eq($(this).index()).addClass("guanli")
        // $(".aside li").eq(0).removeClass("guanli")
        $(".aside li .point").eq($(this).index()).css("display","block").animate({width:180,height:40,top:0,borderRadius:5},300)
    })
    $(".aside li").mouseleave(function(){
        $(".aside li").eq($(this).index()).removeClass("guanli")
        $(".aside li .point").css("display","none").css("width","30px").css("height","30px").css("border-radius","50%")
    })
    //    ·­Ò³
    $(".list_bottom li").mouseenter(function(){
        $(".list_bottom li").eq($(this).index()).addClass("hot")
        // $(".list_bottom li").eq(1).removeClass("hot")
    })
    $(".list_bottom li").mouseleave(function(){
        $(".list_bottom li").eq($(this).index()).removeClass("hot")
    })
})




