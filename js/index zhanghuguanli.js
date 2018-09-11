$(function(){
	// 点击导入出现导入弹框
	let alert=$(".alert");
	let add=$(".bottom .btn3")
	add.click(function(){
		alert.css("display","block");
	})
	// 点击错号关闭批量导入框
	let X=$(".alert .header span i")
	X.click(function(){
		alert.css("display","none");
	})
	// 点击新建学生弹出新建学生弹框
	let student=$(".bottom .btn2")
	let alert1=$(".alert1")
	student.click(function(){
		alert1.css("display","block");
	})
	// 点击错号关闭批量导入框
	let X1=$(".alert1 .header span i")
	X1.click(function(){
		alert1.css("display","none");
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