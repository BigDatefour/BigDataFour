window.onload = function(){

// let lis = document.querySelectorAll(".leftBox ul li a")    
// lis.forEach((item,index)=>{
//     item.onclick = function(){
//         lis.forEach((i,v)=>{
//             i.classList.remove("active");
//         })
//         item.classList.add("active");
//     }
// })

// let tijiao = document.querySelector(".main .top button");
// let tankuang = document.querySelector(".tankuang")
// let quxiao = document.querySelector(".tankuang .quxiao")
// console.log(tijiao,tankuang);
// tijiao.onclick = function(){
//     tankuang.style.display = "block";
// }
// quxiao.onclick=function(){
//     tankuang.style.display = "none";
// }

console.log()
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










}