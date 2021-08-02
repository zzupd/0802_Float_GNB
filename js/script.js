$(function(){

    $("#gnb li").mouseover(function(){
        $("#gnb .subMenu").stop().slideDown(800);
        $("#subMenuBG").stop().slideDown(800);
    });

    $("#gnb li").mouseout(function(){
        $("#gnb .subMenu").stop().slideUp(300);        
        $("#subMenuBG").stop().slideUp(300);
    });

});