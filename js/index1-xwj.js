$(function(){
    // 侧导航栏选项卡
$(".m_left .ml_list").hover(function() {
    let index = $(this).index();
    $(".m_left .ml_list").css("color","#a3a3a3").eq(index).css("color","#4381e6");
    $(".into_c").css("display","none").eq(index).css("display","block");
},function () {
    $(".m_left .ml_list").css("color","#a3a3a3");
})
$(".m_left").mouseleave(function() {
    $(".into_c").css("display","none");
})

$(".into_list").each(function(index,D){
    $(D).mouseenter(function(){
        $(".into_list").css("color","#a3a3a3").eq(index).css("color","#4381e6"); 
    })
})





















})