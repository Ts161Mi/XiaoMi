

$(function () {
    $("#shopping").mouseover(function () {
        $("#commodity").show();
        var num=$("#commodity").children("ul").size();
        if(num>0){

        }else{
            $("#commodity .loading").text("购物车中还没有商品，赶紧选购吧！");
        }
    }).mouseout(function () {
        $("#commodity").hide();
    })
    $("#search").focus(function () {
        $(".search-hot-words").hide();
        $(".header-search .keyword-list").css("display","block").siblings().css("border","1px solid #ff6700");
    }).blur(function () {
        $(".search-hot-words").show();
        $(".header-search .keyword-list").css("display","none").siblings().css("border","1px solid #e0e0e0");
        $(".header-search .search-hot-words").css("border","none");
    })
})

