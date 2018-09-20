$(function(){
	let add=$(".bottom .add");
	let alert1=$(".alert1");
// 出弹框
add.click(function(){
	alert1.css("display","block")
})
//出弹框里的一级 二级 三级 内容
let headerChoice=$(".headerChoice input")
let choice=$("form .choice");
console.log(headerChoice,choice)
headerChoice.each(function(index,D){
	$(D).click(function(){
		choice.eq(index).css("display","block");
	})
	})
// 点击错号关闭弹出框
let X=$(".header a i")
   X.click(function(){
   	alert1.css("display","none")
})
   // 侧导航点击效果
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
let icon = $(".icon-arrow");
// console.log(boxs,icon);
icon.click(function(){
    boxs.slideToggle()
})
})