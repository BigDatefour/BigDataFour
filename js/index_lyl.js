$(function () {
    

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

