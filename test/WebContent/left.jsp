<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=9"/>
<meta http-equiv="X-UA-Compatible" content="IE=10"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>left.jsp</title>
<link rel="stylesheet" type="text/css" href="/test/js/jquery-easyui-1.4.4/themes/metro-blue/easyui.css" />
<link rel="stylesheet" type="text/css" href="/test/js/jquery-easyui-1.4.4/themes/icon.css" />
<script type="text/javascript" src="/test/js/jquery-easyui-1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="/test/js/jquery-easyui-1.4.4/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/test/js/jquery-easyui-1.4.4/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="/test/js/easyui.validate.rules.js"></script>
<script type="text/javascript" src="/test/js/base.js"></script>

<link rel="stylesheet" type="text/css" href="/test/css/all.css">
</head>
<body>

<ul id="tt" class="easyui-tree"></ul>
<script>
$('#tt').tree({
	data: [{
		id:1,
		text: '周杰伦',
		state: 'closed',
		children: [
		           {
			id:11,
			text: 'Jay'
		},{
			id:12,
			text: '哎呦不错哦'
		},{
			id:13,
			text: '周杰伦的床边故事'
		}]
	},{ 
		id:2,
		text: 'Item2',
		state:"open",
		children:[{
			id:21,
			text:'1'
		},{
			id:22,
			text:"2"
		}]
	}],
	animate:false,
	onlyLeafCheck:true,
	lines:true,
	dnd:true,
	formatter:function(node){
		return node.text;
	},
	onClick: function(node){
		if(node.id == 1){
		top.$("#right").attr("src","right.jsp");
		//alert(node.target);  // alert node text property when clicked\
		}
		if(node.id==11){
		top.$("#right").attr("src","song.jsp?album=jay");
		}
		if(node.id==12){
			top.$("#right").attr("src","song.jsp?album=aiyou");
			}
		if(node.id==13){
			top.$("#right").attr("src","song.jsp?album=bed");
			}
		
	}
	
});
</script>
</body>
</html>