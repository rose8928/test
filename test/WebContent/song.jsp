<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path = request.getContextPath();
String al = request.getParameter("album");
if(al==null){al = "bed";}
//out.println(al);
%>
<html>
<head>
 <meta charset="UTF-8"> 	
<meta http-equiv="X-UA-Compatible" content="IE=9"/>
<meta http-equiv="X-UA-Compatible" content="IE=10"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
 <title>周杰伦的床边故事</title>
 <style type="text/css">
 *{margin:0;padding:0;}
 html,body{
  font-size:14px;
  font-family:"微软雅黑","宋体";
  width:100%;
  height:100%;


 }

 #wrapper{ 
  box-sizing:border-box;
  width:100%;
  height:100%;
 }

 #audio-wrapper{
  position:fixed;
  bottom:0px; 
  text-align:center;
	
  width:100%;
 }

 #myaudio{
  position:relative;
  border:1px solid silver;
  height:80px;
  width:100%;
  min-width:650px;

 }
 	#myaudio #arlog{
 	  position:absolute;
 	  background:url(<%=path%>/pic/bo-j.jpg) 0 0 no-repeat;
 	  overflow:hidden;
 	  width:80px;
 	  height:80px; 	  
 	  
 	}
 	#myaudio #bolog{
 	  position:absolute;
 	  left:80px;
 	  width:188px;
 	  height:80px;
 	  border:1px solid pink;	  
 	}
 		#bolog .pre{
 		  position:absolute;
 		  width:60px;
 		  text-align:center;
 		  line-height:80px;
 		  cursor:pointer;
 		}
 		#bolog .play{
 		  position:absolute;
 		  left:60px;
 		  width:60px;
 		  text-align:center;
 		  line-height:80px;
 		  cursor:pointer;
 		}
 		#bolog .next{
 		  position:absolute;
 		  left:120px;
 		  width:60px;
 		  text-align:center;
 		  line-height:80px;
 		  cursor:pointer;
 		}
 	#myaudio #prolog{
 	  position:absolute;
 	  left:268px;
 	  width:800px;
 	  height:80px;
 	  border:1px solid green;
 	
 	}
 		#prolog .curTime{
 		  position:absolute;
 		  top:30px;
 		  width:60px;
 		  
 		  border:1px solid black;
 		}
 		#prolog .cprogress{
 		  position:absolute;
 		  top:35px;
 		  left:65px;
 		  background:red;
 		  height:12px;
 		  border-radius:10px;
 		  
 		}
 		#prolog .progress{
 		  position:absolute;
 		  top:34px;
 		  left:65px;
 		  width:660px;
 		  height:12px;
 		  border:1px solid silver;
 		  border-radius:10px;
 		  cursor:pointer;
 		
 		  
 		}
 			.progress .button{
 				position:absolute;
 				top:-5px;
 				left:-10px;
 				border:1px solid silver;
 				width:20px;
 				height:20px;
 				background:red;
 			
 			}
 			.progress .button:hover{
 				box-shadow:1px 1px 5px #dddddd,-1px -1px 5px #dddddd;
 				cursor:pointer;
 			}
 		#prolog .allTime{
 		  position:absolute;
 		  top:30px;
 		  right:0px;
 		  width:60px;
 		  border:1px solid black;
 		}
 	#myaudio #muslog{
 	  position:absolute;
 	  right:0px;
 	  width:200px;
 	  height:80px;
 	  border:1px solid yellow;
 	}
 		#muslog .mlog{
 		  position:absolute;
 		  top:30px;
 		  width:40px;
 		  
 		}
 		#muslog .cplog{
 		  position:absolute;
 		  top:38px;
 		  left:41px;
 		  width:120px;
 		  height:6px;
 
 		  border-radius:2px;
 		  background:yellow;
 		}
 		#muslog .plog{
 		  position:absolute;
 		  top:37px;
 		  left:40px;
 		  width:120px;
 		  height:6px;
 		  border:1px solid silver;
 		  border-radius:2px;
 		  cursor:pointer;
 		}
 			.plog .vbutton{
 				visibility:hidden;
 				position:absolute;
 				left:114px;
 				top:-4px;
 				width:12px;
 				height:12px;
 				border:1px solid silver;
 				background:yellow;
 			}
 			.plog:hover .vbutton{
 				visibility:visible;
 				box-shadow:1px 1px 5px #dddddd,-1px -1px 5px #dddddd
}
 .activated{
  color:#33b;
  font-weight:bold;
  background:#ddf;
 }

 #lrc{
  position:relative;
  text-align:center;
  width:360px;
  height:100%; 
  box-shadow:2px 2px 2px silver;
  overflow-y:auto;
  float:left;
  border:2px solid pink;
 }
 


 #lrc p:hover{
  background:#e5e5e8;
  cursor:pointer;
 }
 #lrc p{
  text-indent:0;
  margin:0;
  padding:6px;
 }
#m{
	position:absolute;
	right:10px;
	top:10px;
	margin:5px;
	width:20px;
	height:30px;
	background:#aaaaaa;	
	opacity:0.3;
	

}

#m:hover{
	box-shadow:1px 1px 5px #dddddd,-1px -1px 5px #dddddd;
	cursor:pointer;
    opacity:0.8;
}
#m .b{
	position:absolute;
	width:0px;
	height:0px;
	top:10;
	border-style:solid;
	border-width:0px 10px 10px 10px;
	border-color:transparent transparent #ffffff transparent;
	
	
}
#m .s{
	position:absolute;
	width:0px;
	height:0px;
	top:16px;
	left:2px;
	border-style:solid;
	border-width:0px 8px 8px 8px;
	border-color:transparent transparent #aaaaaa transparent;

}

#p{
	position:absolute;
	right:10px;
	top:50px;
	margin:5px;
	width:20px;
	height:30px;
	background:#aaaaaa;	
	opacity:0.3;

}
#p:hover{
	box-shadow:1px 1px 5px #dddddd,-1px -1px 5px #dddddd;
	cursor:pointer;
	opacity:0.8;

}

#p .b{
	position:absolute;
	width:0px;
	height:0px;
	bottom:10;
	border-style:solid;
	border-width:10px 10px 0px 10px;
	border-color:#ffffff transparent transparent  transparent;
	
	
}
#p .s{
	position:absolute;
	width:0px;
	height:0px;
	bottom:16px;
	left:2px;
	border-style:solid;
	border-width:8px 8px 0px 8px;
	border-color:#aaaaaa transparent transparent transparent;

}

 #list{
 	position:absolute;
 	left:362px;
 	width:600px;
 	height:100%;
 	overflow-y:auto;
 	background:#f5f5f5;
 	border:2px solid green;
 }
 #ulist{
 	margin-top:10px;
 }
 li.ji{
 	
 	list-style-type:none;
 	background:#f5f5f7;
 	height:20px;
 	
 
 }
 li.ou{
 	
 	list-style-type:none;
 	background:#fafafa;
 	height:20px;
 	
 
 }
 li:hover{
 	background:#e5e5e8;
 	cursor:pointer;
 }
 li:active{
 	background:red;
 }
 .activ{
 	background:#ddf;
 	font-weight:bold;
 }
 li span.xu{
 	position:absolute;
 	left:10px;
 	font-size:8px;
 	line-height:20px;
 }
 li span.na{
 	position:absolute;
 	left:100px;
 	font-size:8px;
 	line-height:20px;
 }
 li span.ar{
 	position:absolute;
 	left:400px;
 	font-size:8px;
 	line-height:20px;
 }
 
::-webkit-scrollbar
{
	width: 12px;

}
::-webkit-scrollbar-track {
    border: 1px #d3d3d3 solid;
    box-shadow: 0px 0px 3px #dfdfdf inset;
    border-radius: 10px;
    background: #eee;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color:rgba(200,200,200,0.5);
}
::-webkit-scrollbar-thumb:hover {
    background: #bbbbbb;
}
 

 </style>
 <script type="text/javascript" src="<%=path%>/js/jquery-easyui-1.4.4/jquery.min.js"></script>
</head>
<body>

<div id = "wrapper">

 
 <div id="audio-wrapper">
  <p><audio src="<%=path%>/MP3/<%=al%>/gaobai.mp3"></audio></p>
  <div id = "myaudio">
  <div id = "arlog"></div>
  <div id = "bolog">
  	<div class = "pre">上一首</div>
  	<div class = "play">播放</div>
  	<div class = "next">下一首</div>
  </div>
  <div id = "prolog">
  	<div class = "curTime">curTime</div>
    <div class = "cprogress"></div>
    <div class = "progress">
    	<div class = "button">hi</div>
    </div>
    <div class = "allTime">allTime</div>
  </div>
  <div id = "muslog">
  	<div class = "mlog">声音</div>
  	<div class = "cplog"></div>
  	<div class = "plog">
  		<div class = "vbutton"></div>
  	</div>
  </div>
  </div>
 </div>
 <div id="lrc"></div>
 <div id= "list">
 	<ul id = "ulist">

 	</ul>
 </div>

</div>

<script type = "text/javascript">

	if("<%=al%>"=="bed"){ 
		
		$("#ulist").html('<li tag ="gaobai" class = "ji"><span class = "xu">1</span><span class = "na">告白气球</span><span class = "ar">周杰伦</span></li>'+
		'<li tag = "bugai" class = "ou"><span class = "xu">2</span><span class = "na">不该</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "aiqing" class = "ji"><span class = "xu">3</span><span class = "na">爱情废柴 </span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "chuangbian" class = "ou"><span class = "xu">4</span><span class = "na">床边故事</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "shuozou" class = "ji"><span class = "xu">5</span><span class = "na">说走就走</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "yidian" class = "ou"><span class = "xu">6</span><span class = "na">一点点</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "qianshi" class = "ji"><span class = "xu">7</span><span class = "na">前世情人</span><span class = "ar">周杰伦</span></li>'+ 		
				'<li tag = "yingxiong" class = "ou"><span class = "xu">8</span><span class = "na">英雄</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "tuer" class = "ji"><span class = "xu">9</span><span class = "na">土耳其冰淇淋</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "now" class = "ou"><span class = "xu">10</span><span class = "na">Now You See Me</span><span class = "ar">周杰伦</span></li>');
	}
	
	if("<%=al%>"=="jay"){
		
		$("title").html("Jay");
		$("#ulist").html('<li tag ="douniu" class = "ji"><span class = "xu">1</span><span class = "na">斗牛</span><span class = "ar">周杰伦</span></li>'+
		'<li tag = "fanfang" class = "ou"><span class = "xu">2</span><span class = "na">反方向的钟</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "heise" class = "ji"><span class = "xu">3</span><span class = "na">黑色幽默 </span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "keai" class = "ou"><span class = "xu">4</span><span class = "na">可爱女人</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "longjuan" class = "ji"><span class = "xu">5</span><span class = "na">龙卷风</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "niangzi" class = "ou"><span class = "xu">6</span><span class = "na">娘子</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "wanmei" class = "ji"><span class = "xu">7</span><span class = "na">完美主义</span><span class = "ar">周杰伦</span></li>'+ 		
				'<li tag = "xingqing" class = "ou"><span class = "xu">8</span><span class = "na">星晴</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "yindi" class = "ji"><span class = "xu">9</span><span class = "na">印第安老斑鸠</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "yisi" class = "ou"><span class = "xu">10</span><span class = "na">伊斯坦堡</span><span class = "ar">周杰伦</span></li>');
	}
	
	if("<%=al%>"=="aiyou"){
		
		$("title").html("哎呦，不错哦");
		$("#ulist").html('<li tag ="yangming" class = "ji"><span class = "xu">1</span><span class = "na">阳明山</span><span class = "ar">周杰伦</span></li>'+
		'<li tag = "qieai" class = "ou"><span class = "xu">2</span><span class = "na">窃爱</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "suanshen" class = "ji"><span class = "xu">3</span><span class = "na">算什么男人 </span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "tianya" class = "ou"><span class = "xu">4</span><span class = "na">天涯过客</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "zenme" class = "ji"><span class = "xu">5</span><span class = "na">怎么了</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "yikou" class = "ou"><span class = "xu">6</span><span class = "na">一口气全念对</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "woyao" class = "ji"><span class = "xu">7</span><span class = "na">我要夏天</span><span class = "ar">周杰伦</span></li>'+ 		
				'<li tag = "shouxie" class = "ou"><span class = "xu">8</span><span class = "na">手写的从前</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "xiezi" class = "ji"><span class = "xu">9</span><span class = "na">鞋子特大号</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "tingba" class = "ou"><span class = "xu">10</span><span class = "na">听爸爸的话</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "meiren" class = "ou"><span class = "xu">11</span><span class = "na">美人鱼</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "tingjian" class = "ji"><span class = "xu">12</span><span class = "na">听见下雨的声音</span><span class = "ar">周杰伦</span></li>');
	}
	if("<%=al%>"=="fan"){
		
		$("title").html("范特西");
		$("#ulist").html('<li tag ="aizai" class = "ji"><span class = "xu">1</span><span class = "na">爱在西元前</span><span class = "ar">周杰伦</span></li>'+
		'<li tag = "bacomma" class = "ou"><span class = "xu">2</span><span class = "na">爸，我回来了</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "jiandan" class = "ji"><span class = "xu">3</span><span class = "na">简单爱 </span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "renzhe" class = "ou"><span class = "xu">4</span><span class = "na">忍者</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "kaibu" class = "ji"><span class = "xu">5</span><span class = "na">开不了口</span><span class = "ar">周杰伦</span></li>'+
		 		'<li tag = "shanghai" class = "ou"><span class = "xu">6</span><span class = "na">上海1943</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "duibu" class = "ji"><span class = "xu">7</span><span class = "na">对不起</span><span class = "ar">周杰伦</span></li>'+ 		
				'<li tag = "weilian" class = "ou"><span class = "xu">8</span><span class = "na">威廉古堡</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "shuangjie" class = "ji"><span class = "xu">9</span><span class = "na">双节棍</span><span class = "ar">周杰伦</span></li>'+
				'<li tag = "anjing" class = "ou"><span class = "xu">10</span><span class = "na">安静</span><span class = "ar">周杰伦</span></li>');
	}
	
</script>

<script type="text/javascript">

$(document).ready(function(){	

	var he = $("#myaudio").height()+4;
	var offset = 0;
	$("#lrc").height(document.body.offsetHeight-he);
	$("#list").height(document.body.offsetHeight-he);
	
	var w_width = $("#myaudio").width();
	var w_height = $(window).height();
	var left = $("#arlog").width()+$("#bolog").width();
	var right;
	if(w_width<700){
		$("#muslog").width(0);
		right = 0;
	}
	else{
		$("#muslog").width(200);
		right = $("#muslog").width();
	}
	var w = w_width-left-right;
	//alert(w);
	$("#prolog").width(w);
	$(".progress").width(w-132);
	
	

	
	$("#lrc").on("scroll",function(){
		var scrtop = $("#lrc").scrollTop();
		$("#m").css("top",scrtop+10+"px");
		$("#p").css("top",scrtop+50+"px");
				
	});
	
	$("#lrc").on("click","#m",function(){
		offset-=1;
	
		
	});
	$("#lrc").on("click","#p",function(){
		
		offset+=1;
		
		
	});

	
	$(window).on("resize",function(){		
		
		if($("#myaudio").width()<700){
			$("#muslog").width(0);
		}
		else{
			$("#muslog").width(200);
		}
		
		$("#lrc").height(document.body.offsetHeight-he);	
		$("#list").height(document.body.offsetHeight-he);
		
		w_width = $("#myaudio").width();
		w_height = $(window).height();
		left = $("#arlog").width()+$("#bolog").width();
		right = $("#muslog").width();
		var w = w_width-left-right;
		//alert(w);
		$("#prolog").width(w);
		$(".progress").width(w-132);
		

	});	

	
 	//alert($("audio"));
	//alert($("audio")[0]);
  var flag = 1;
  var isplayed = 0;
  var $lrc = $('#lrc');
  var html ='';
  var audio = $("audio")[0];
  var curname = "gaobai";

  
  $('li').on('click',function(){
	 
	 
	 var sname = $(this).attr("tag");
	 activ($(this));
	 plays(sname);

  });  
  $("audio").on("play",function(){
	 if(isplayed == 0){
		var curSrc = audio.src;
		var reg = "<%=path%>/MP3/<%=al%>/(.*).mp3";
		var curNa = curSrc.match(reg);
		var curLi = getsnameaudio();
		activ(curLi);
		displays(curNa[1]);
		getalltime();
		getcurtime();
	 }
  });
  
  $("#lrc").on("click","p",function(){
	  var ltime = $(this).attr("tag");
	  ltime = parseInt(ltime)-offset;
	  //console.log(ltime);
	  audio.currentTime=ltime;
	  //alert(offset);
	
	 //audio.currentTime(10); 
	  
	  
  });
  
  $("#lrc").on("mouseover",function(){
	  flag = 0;
	  
  });
  
  $("#lrc").on("mouseout",function(){
	  flag = 1;
	  
  });
    
  //var caudio = $("audio")[0];
	$(".play").on("click",function(){
		if(audio.paused){
			audio.play();	
			$(this).html("暂停");
	}
		else{
			audio.pause();
			$(this).html("播放");
		}

	});
	$(".pre").on("click",function(){


		playpre();
	});
	
	$(".next").on("click",function(){

		playnext();
	});
	
	$("audio").on("ended",function(){
		playnext();
	});
	
	function playpre(){
		var curSrc = audio.src;
	    var reg = "<%=path%>/MP3/<%=al%>/(.*).mp3";
		var curNa = curSrc.match(reg);
		var curLi;
		var Li;
		$("#ulist").find("li").each(function(){
			
			if($(this).attr("tag")==curNa[1]){
				
				curLi = $(this);
			}			
		});
		//alert(curNa[1]);
		
		//caudio.play();	
		if(curLi.attr("tag")==$("#ulist").find("li").first().attr("tag")){
			Li = $("#ulist").find("li").last();
			curNa = $("#ulist").find("li").last().attr("tag");
			//alert(curNa);
		}
		else{
			Li = curLi.prev();
			curNa = curLi.prev().attr("tag");
			//alert(curNa);
		}
		
		activ(Li);
		plays(curNa);
		$(".play").html("暂停");
		
	}
	
	function playnext(){
		var curSrc = audio.src;
	    var reg = "<%=path%>/MP3/<%=al%>/(.*).mp3";
		var curNa = curSrc.match(reg);
		var curLi;
		var Li;
		$("#ulist").find("li").each(function(){
			
			if($(this).attr("tag")==curNa[1]){
				
				curLi = $(this);
			}			
		});
		//alert(curNa[1]);
		
		//caudio.play();	
		if(curLi.attr("tag")==$("#ulist").find("li").last().attr("tag")){
			Li = $("#ulist").find("li").first();
			curNa = $("#ulist").find("li").first().attr("tag");
			//alert(curNa);
		}
		else{
			Li = curLi.next();
			curNa = curLi.next().attr("tag");
			//alert(curNa);
		}
		//alert(curNa);
		activ(Li);	
		plays(curNa);
		$(".play").html("暂停");	
		
	}
	
	function activ(cthis){		  
	 
		  $("#ulist").find("li").each(function(){
			  $("#ulist").find("li").removeClass("activ");
			  cthis.addClass("activ");
		  });
		  $(".play").html("暂停");
	}
	
	function plays(sname){
		isplayed = 1;
		audio.src = "<%=path%>/MP3/<%=al%>/"+sname+".mp3";
		audio.play();
		displays(sname);
		getalltime();
		getcurtime();

		//alert(allTi);
		//$(".allTime").html(allTi);
		
	}
	function getcurtime(){
		setInterval(function(){
			var s = Math.floor(audio.currentTime%60);
			var m = Math.floor(audio.currentTime/60);
			if(m<10){
				m = "0"+m;
			}
			if(s<10){
				s = "0"+s;
			}
			var cti = m+":"+s;
			$(".curTime").html(cti);	
			sbutton();
		},100)
	}
	
	var isdown = 0;
	var isdownv = 0;
	var dura;	
	getalltime();
	getcurtime();
	$(".button").on("mousedown",function(){
		isdown = 1;
		
	});
	
	$(document).on("mouseup",function(){
		if(isdown==1){
		var curP = $(".button").position().left;
		var pwidth = $(".progress").width();
		var halfwidth = $(".button").width()/2;
		var curTi = dura*((curP+10)/pwidth);
		audio.currentTime = curTi;
		}
		isdown = 0;
		isdownv = 0;
	});
	
	$(document).on("mousemove",function(){
		if(isdown==1){
			var pwidth = $(".progress").width();
			event.preventDefault(); 
			var curx = event.clientX;
			var cury = event.clientY;
			console.log(curx);
			var x = $(".progress").offset().left;
			var rx = curx-x-10;
			if(rx<-10){rx=-10;}
			if(rx>pwidth-10){rx=pwidth-10;}
			$(".button").css("left",rx+"px");
			getalltime();
			getcurtime();
			//console.log("positionleft"+$(".progress").position().left);
			//console.log("offsetleft:"+$(".progress").offset().left);
			//console.log("document.body.offsetWidth"+document.body.offsetWidth);
			//console.log($(".progress").parent().position().left);
			//console.log(cury);			
		}		
		if(isdownv==1){
			
			var pwidth = $(".plog").width();
			event.preventDefault();
			var curx = event.clientX;
			var cury = event.clientY;
			var x = $(".plog").offset().left;
			var rx = curx-x-6;
			var curP = curx-x;
			if(curP<0){curP=0;}
			if(curP>pwidth){curP=pwidth;}
			if(rx<-6){rx=-6;}
			if(rx>pwidth-2){rx=pwidth-2;}
			$(".vbutton").css("left",rx+"px");
			$(".cplog").css("width",curP+"px");
			$(".vbutton").css("visibility","visible");
		
			var curV = Math.round(100*(curP/pwidth))/100;
			audio.volume = curV;
		}
	});
	
	$(".progress").on("click",function(){

		var curx = event.clientX;
		var cury = event.clientY;
		var x = $(".progress").offset().left;
		var rx = curx-x;		
		$(".button").css("left",rx+"px");
		getalltime();
		getcurtime();
		var curP = $(".button").position().left;
		var pwidth = $(".progress").width();
		var halfwidth = $(".button").width()/2;
		var curTi = dura*(curP/pwidth);
		audio.currentTime = curTi;
		
		
	})
	
	$(".vbutton").on("mousedown",function(){
	   isdownv = 1;
		
	});
	
	$(".plog").on("click",function(){
		
		var pwidth = $(".plog").width();
		
		var curx = event.clientX;
		var cury = event.clientY;
		var x = $(".plog").offset().left;
		var rx = curx-x-6;
		var curP = curx-x;
		if(curP<0){curP=0;}
		if(curP>pwidth){curP=pwidth;}

		$(".vbutton").css("left",rx+"px");
		$(".cplog").css("width",curP+"px");
		

		
		var halfwidth = $(".vbutton").width()/2;
		var curTi = Math.round(100*(curP/pwidth));
		var curV = curTi/100;
		console.log(curP);
		console.log(curV);

		audio.volume = curV;
	});
	
	function getwinleft(k){

	}
	
	
	function sbutton(){
		
		if(isdown == 0){
		var pwidth = $(".progress").width();
		var halfwidth = $(".button").width()/2;
		var step = pwidth/(dura*10);
		var curp = audio.currentTime/dura*pwidth;
		var dleft = curp+step-halfwidth;
		var dwidth = curp+step;
		$(".button").css("left",dleft+"px");
		$(".cprogress").css("width",dwidth+"px");
		}
		//console.log(pheight);
		//console.log(dura);
		//console.log(step);
		//console.log(dleft);
	}	
	
	function getalltime(){		
	
			setTimeout(function(){			
		
			if(isNaN(audio.duration)){
				getalltime();
			}
			else{				
				var allTi = sectomin(audio.duration);
				$(".allTime").html(allTi);
				dura = audio.duration;
				
			}
		},200);
	
		
	}
	
	function sectomin(sec){
		var sec = parseInt(sec);
		var m = Math.floor(sec/60);
		var s = sec%60;
		if(m<10){
			m = "0"+m;
		}
		if(s<10){
			s = "0"+s;
		}
		var time = m+":"+s;
		return time;
		
		
	}
	
	function getsnameaudio(){
		var curSrc = audio.src;
	    var reg = "<%=path%>/MP3/<%=al%>/(.*).mp3";
		var curNa = curSrc.match(reg);
		var curLi;
		$("#ulist").find("li").each(function(){			
			if($(this).attr("tag")==curNa[1]){				
				curLi = $(this);
			}			
		});

		return curLi;
	}
	
	document.onkeydown = function(){
        if(event.keyCode == 32){   
    		if(audio.paused){
    			audio.play();	
    			$(".play").html("暂停");
    	}
    		else{
    			audio.pause();
    			$(".play").html("播放");
    		}
        }
    }
  
  function displays(string){
	  		html = "";
	  		offset=0;
	  		//alert(string);
	  		//alert(html);
		    $.ajax({
		     url:'<%=path%>/lrc/<%=al%>/'+string+'.lrc',
		     type:'get',
		     dataType:'text',
		     success:function(lrc){
		    	var lyric = parseLyric(lrc); 
		    	jQuery.each(lyric,function(x,val){
		    		html+="<p class = 'lyrics' tag = '"+x+"'>"+val+"</p>";   		
		    	});
		    	html+="<div id = 'm'><div class = 'b'></div><div class = 's'></div></div>"+
		    	"<div id = 'p'><div class = 'b'></div><div class = 's'></div>";
				$lrc.html(html);     
				//alert(html);
		      //alert($(data).find('LRC').length);
		      
		     },
		     error:function(){
		    	 html = "<br><br>数据库里没有歌词~~";
		    	 $lrc.html(html);
		     }
		    });
		   
		   
		    
		   var timer = setInterval(function(){

		    var elapsed = audio.currentTime;
		    if($lrc.find('.lyrics').length){
		     $lrc.find('.lyrics').each(function(){
		      var isOK = elapsed - $(this).attr('tag')+offset;
		      //console.log(elapsed);
		      if(isOK < 5 && isOK > 0){
		    	  if($(this).html()!=""){
		       $lrc.find('.lyrics').removeClass('activated');
		       $(this).addClass('activated');
		    	  }
		    	  var atop;
		    	if($lrc.find(".activated").length){
		        atop = $lrc.find(".activated").position().top;
		    	} 
		       var half = $lrc.height()/2;
		       var setscrtop = atop-half+$lrc.scrollTop()+half/2;
		       //console.log(setscrtop);
		       
		       if(flag==1){
			   $lrc.scrollTop(setscrtop);
		       }
		      }
		     });
		    } 		   
		   },10);	  
  }; 
 function parseLyric(lrc){
	 var lyrics = lrc.split("\n");
	 var lrcObj = {};
	 for(var i=0;i<lyrics.length;i++){
		 var lyric = decodeURIComponent(lyrics[i]);
		 var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
		 var timeRegExpArr = lyric.match(timeReg);
		 if(!timeRegExpArr)continue;
		 var clause = lyric.replace(timeReg,'');
		 for(var k=0,h=timeRegExpArr.length;k<h;k++){	
			 var t=timeRegExpArr[k];
			 var min = Number(String(t.match(/\[\d*/i)).slice(1)),
			 	 sec = Number(String(t.match(/\:\d*/i)).slice(1));
			 var time = min*60+sec;
			 
			 lrcObj[time]=clause;			 
		 }		 
	 }
	 //alert(lrcObj[75]);
	 return lrcObj;	 
 };
});
</script>
</body>
</html>
