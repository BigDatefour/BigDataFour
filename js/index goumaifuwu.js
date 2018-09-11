$(function(){
	let X=$(".header span i")
	let alert=$(".alert")
	X.click(function(){
		alert.css("display","none")
	})
// 单击下一步出现弹框
   let next=$(".section .btn")
   next.click(function(){
   	alert.css("display","block")
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
})