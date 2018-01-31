<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Player</title>
 <style type="text/css">
 body{
 	height:2000px;
 }
 #aa{
 	position:absolute;
 	width:300px;
 	height:300px;
 	background:red;

 	}
#a{ 
	position:absolute;
	
	top:10px;
;
	padding:10px;
	width:200px;
	height:200px;
	background:blue;
	overflow:auto;
}
button{
    position:fixed;
    right:0;
    bottom:0;
    
}
 </style>
 <script type="text/javascript" src="/test/js/jquery-easyui-1.4.4/jquery.min.js"></script>
</head>
<body>
<div id = "aa">
 <div id="a">
对方水电费第三方的贷款纠纷可视对讲飞快的说了荆防颗粒电视剧分类看电视剧弗兰克
的设计费看了电视剧弗兰克的就发了看电视就发了看电视就发了看电视荆防颗粒离开大家来看风的速度放松放松对方水电费第三方的是范德萨范德萨范德萨对方水电费第三方的贷款纠纷可视对讲飞快的说了荆防颗粒电视剧分类看电视剧弗兰克
的设计费看了电视剧弗兰克的就发了看电视就发了看电视就发了看电视荆防颗粒离开大家来看风的速度放松放松对方水电费第三方的是范德萨范德萨范德萨
对方水电费第三方的贷款纠纷可视对讲飞快的说了荆防颗粒电视剧分类看电视剧弗兰克
的设计费看了电视剧弗兰克的就发了看电视就发了看电视就发了看电视荆防颗粒离开大家来看风的速度放松放松对方水电费第三方的是范德萨范德萨范德萨

 </div>
</div>
 <button id = "b">按钮</button>

 <script type="text/javascript">

 $("button").on("click",function(){
	 console.log("浏览器的高度");
	 console.log("浏览器的宽度");
	 console.log("浏览器视口的高度"+$(window).height());
	 console.log("浏览器视口的宽度"+$(window).width());
	 console.log("a距离浏览器顶部距离"+$("#a").offset().top);
	 console.log("a距离浏览器左边距离"+$("#a").offset().left);
	 console.log("a距离上一个定位父元素的顶部距离"+$("#a").position().top);
	 console.log("a距离上一个定位父元素的左边距离"+$("#a").position().left);
	 console.log("测试position.left和css.left是否一样"+$("#a").css("left"));
	 console.log("a的高度"+$("#a").height());
	 console.log("a的宽度"+$("#a").width());
	 console.log("获取div的总高度，包括scroll"+document.getElementById("a").scrollHeight+$("#a").prop("scrollHeight")+$("#a")[0].scrollHeight);
	 console.log("是否没有left的时候用css能获取到"+$("#a").css("left"));
	 console.log("a的scroll顶部长度"+$("#a").scrollTop());
	 console.log("a的scroll底部长度");
	 console.log("a的scroll左边长度"+$("#a").scrollLeft());
	 console.log("a的scroll右边长度");
	 console.log("页面的文档高度"+$(document).height());
	 console.log("页面的文档宽度"+$(document).width());
	 alert($("#a"));
	 alert($("#a")[0]);
	 
	 
 })


 </script>
</body>
</html>
