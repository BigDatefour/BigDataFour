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

let ass = $(".leftBox ul li a");
ass.each(function(index,item){
    $(item).click(function(){
        ass.removeClass("active")
        $("div").remove(".yuan")
        console.log($(this))
        $("<div>").addClass("yuan").appendTo(this).animate({
            width:"300px",
            height:"300px",
        },1000)
        $(this).addClass("active")
    })
})
//////////////////////////////顶部弹出框//////////////////////////////////
let boxs = $(".projectile");
let icon = $(".icon-down-trangle");
// console.log(boxs,icon);
icon.click(function(){
    boxs.slideToggle()
})



















})