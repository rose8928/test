<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath();%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=9"/>
<meta http-equiv="X-UA-Compatible" content="IE=10"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>周杰伦</title>
<style>
*{margin:0;padding:0;}

body{


  font-size:14px;
  font-family:"微软雅黑","宋体";
  overflow:auto;
  
 }

#wrapper1{

	width:1030px;
	margin:20px auto;
	border:1px solid pink;
}
#album{
	width:100px;
	border:1px solid silver;
}
#album{
	margin-left:46px;
	margin-top:20px;
	float:left;
	border:1px solid green;
	width:200px;
	height:200px;
}
.clear:after{
	content:".";
	display:block;
	height:0;
	visibility:hidden;
	clear:both;
}
</style>

<script type="text/javascript" src="<%=path%>/js/jquery-easyui-1.4.4/jquery.min.js"></script>
<script type = "text/javascript">

</script>
</head>
<body>

<div id = "wrapper1" class = "clear">
<div id = "album"><a href = "/test/song.jsp?album=jay" target = "_self"><img src = "/test/pic/jay.jpg"/></a></div>
<div id = "album"><a href = "/test/song.jsp?album=fan" target = "_blank"><img src = "/test/pic/fan.jpg"></a></div>
<div id = "album"><a href = "/test/song.jsp?album=aiyou" target = "_blank"><img src = "/test/pic/aiyou.jpg"/></a></div>
<div id = "album"><a href = "/test/song.jsp?album=bed" target = "_blank"><img src = "/test/pic/bed.jpg"/></a></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
<div id = "album"></div>
</div>
</body>
</html>