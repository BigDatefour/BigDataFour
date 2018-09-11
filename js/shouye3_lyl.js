$(function(){

    $(".login").click(function(){
        $(".bg .denglu .name p").css("display","none")
        if( $(".name input").val()=="12345678"){
            return;
        }else{
            $(".bg .denglu .name p").css("display","block")
        }
    })














})