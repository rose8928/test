// JavaScript Document
// JS发生异常，全局捕获
window.onerror = function(e){
	alert(e);
};
//重定义alert
window.alert = function(msg) {
	$.messager.show({
		title : '',
		msg : msg + '',
		shwoType : 'slide',
		timeout: 1500,
		style : {
			right : '',
			top: document.body.scrollTop + document.documentElement.scrollTop + 27,
			bottom : ''
		}
	});
};

/**
 * 禁用回车自动提交
 */
$(document).keypress(function(e){
	if(e.keyCode == 13) e.preventDefault();
});

/**
 * 全局变量
 */
if(!top.sys){
	top.sys = {};
}
/**
 * 清理全局变量
 */
top.clearSys = function(){
	if(!top.sys){
		top.sys = {};
	}
	top.sys.groupId = null;
	top.sys.serverId = null;
	top.sys.compId = null;
	top.sys.TabType = null;
	top.sys.currentNode = null;
}

function selectMenu(obj, url) {
	if(top.sys.isUsed){
		try{
		top.clearSys();
		}catch(ex){}
	}
	$(".focusPage", $(obj).parent().parent()).removeClass("focusPage");
	$(obj).addClass("focusPage");
	top.$('#leftFrame').attr('src', url);
}

/**
 * 检查ajax请求的相应
 */
function checkLoadData(data){
	//ajax请求超时
	var text = data.responseText;
	text = text.replace('\n','');
	if(data && data.status == 0){
		alert("服务器没有响应");
		return false;
	}
	else if(data && text == '3008'){///** 登录超时 */ErrorCode.java
		alert("用户未登录或登陆超时。");
		setTimeout("top.$('#centerFrame').attr('src', 'login.do');", 2500);
		return false;
	}
	else if(data && data.status != 200){
		alert("服务器错误。status：" + data.status);
		return false;
	}
	else if(data && data.responseText){
		try{
			eval('var obj='+text);
			//查询参数校验错误
			if(obj && obj.status == 'error'){
				var msg = '';
				if(typeof(obj.message) == 'string'){
					alert(obj.message);
				} else {
					for(var p in obj.message){
						msg += obj.message[p] + '<br/>';
					}
					alert(msg);
				}
				return false;
			}
		}catch(ex){
					
		}
	}
}
//注册一个全局的ajax请求完成回调方法
$.ajaxSetup({complete : checkLoadData});

function iniMap(data) {
	var id = "chinaMap";
	var obj = $("#" + id);
	var offsetX = obj.offset().top;
	var offsetY = obj.offset().left;
	var w = obj.width();
	var h = obj.height();
	for (var i = 0; i < data.length; i++) {
		var top = h * data[i].top / 100 + offsetX - 7;
		var left = w * data[i].left / 100 + offsetY - 7;
		if (data[i].alarm) {
			if ($("#" + data[i].id)[0]) {
				$("#" + data[i].id).css("top", top + "px");
				$("#" + data[i].id).css("left", left + "px");
				$("#" + data[i].id+" > img").attr("src", "../images/redPiont.gif");
				$("#" + data[i].id+" > img").attr("title", data[i].tip);
			} else {
				$("body").append("<a id=\""
										+ data[i].id
										+ "\" onclick=\"getServerList('"
										+ data[i].id
										+ "','"+data[i].name+"')\" style=\"position:absolute; cursor: pointer;top:"
										+ top
										+ "px; left:"
										+ left
										+ "px; z-index:10000;\"><img width=\"10\" height=\"10\" class=\"mapPointRed\" src=\"../images/redPiont.gif\" title=\""
										+ data[i].tip + "\"/></a>");
			}
		} else {
			if ($("#" + data[i].id)[0]) {
				$("#" + data[i].id).css("top", top + "px");
				$("#" + data[i].id).css("left", left + "px");
				$("#" + data[i].id+" > img").attr("src", "../images/greenPoint.gif");
				$("#" + data[i].id+" > img").attr("title", data[i].tip);
			} else {
				$("body").append("<a id=\""
										+ data[i].id
										+ "\" onclick=\"getServerList('"
										+ data[i].id
										+ "','"+data[i].name+"')\" style=\"position:absolute; cursor: pointer;top:"
										+ top
										+ "px; left:"
										+ left
										+ "px; z-index:10000;\"><img width=\"10\" height=\"10\" class=\"mapPointgReen\" src=\"../images/greenPoint.gif\" title=\""
										+ data[i].tip + "\" /></a>");
			}
		}
	}
}

/**
 * 接入分布用地图
 */
function drawMap(data) {
	var id = "chinaMap";
	var obj = $("#" + id);
	var offsetX = obj.offset().top;
	var offsetY = obj.offset().left;
	var w = obj.width();
	var h = obj.height();
	$(".classFlag").remove();
	for (var i = 0; i < data.length; i++) {
		var top = h * data[i].top / 100 + offsetX - 7;
		var left = w * data[i].left / 100 + offsetY - 7;
		
		if ($("#" + data[i].groupId)[0]) {
			$("#" + data[i].groupId).css("top", top + "px");
			$("#" + data[i].groupId).css("left", left + "px");
			$("#" + data[i].groupId+" > img").attr("src", "../../images/redPiont.gif");
			$("#" + data[i].groupId+" > img").attr("title", data[i].groupName);
		} else {
			$("body").append("<a class=\" classFlag\" id=\""
									+ data[i].groupId
									+"\" \" style=\"position:absolute; cursor: pointer;top:"
									+ top
									+ "px; left:"
									+ left
									+ "px; z-index:10000;\"><img width=\"10\" height=\"10\" class=\"mapPointRed\" src=\"../../images/redPiont.gif\" title=\""
									+ data[i].groupName + "\"/></a>");
		}
	
	}
}
/**
 * 跳转到系统监测页面并展开相应的树节点
 * @param groupId
 * @param serverId
 */
function toSysMonitor(groupId, serverId, compId) {
	top.sys.menu[2].click();
	top.sys.groupId = groupId;
	top.sys.serverId = serverId;
	top.sys.compId = compId;
	top.sys.isUsed = false;//标记变量是新的，执行selectMenu时，不清理
}
/**
 * 跳转到系统监测页面并展开平台信息节点下对应页面的tab页
 * @param groupId
 * @param serverId
 * @param type 1：节点告警；2：流程告警；3：服务告警
 */
function toSysMonitorTabPage(groupId, serverId, compId, type) {
	toSysMonitor(groupId, serverId, compId);
	top.sys.TabType = type;
}
/**
 * 系统监测页面根据选择的树节点展示导航条
 */
function showNavation(){
	var nav = ' &gt; ' + top.sys.currentNode.text;
	if(top.sys.tree && top.sys.currentNode){
		var parentNode = top.sys.tree.tree('getParent', top.sys.currentNode.target);
		while(parentNode){
			nav = ' &gt; ' + parentNode.text + nav;
			parentNode = top.sys.tree.tree('getParent', parentNode.target);
		}
	}
	$('.topTitle').html('系统监测' + nav);
	//top.clearSys();
}

function setLinkFocus(idx) {
	for (var i = 1; i <= 4; i++) {
		if (i == idx) {
			$(window.parent.frames["topFrame"].document).find("#tab_" + i).find('a').addClass('focusPage');
		} else {
			$(window.parent.frames["topFrame"].document).find("#tab_" + i).find('a').removeClass('focusPage');
		}
	}
}
function formatUserStatus(val, row) {
	switch(val*1){
	case 0:return '待审核';break;
	case 1:return '暂时锁定';break;
	case 2:return '锁定';break;
	case 3:return '已通过';break;
	case 4:return '未通过';break;
	case 5:return '已删除';break;
	default:return '正常';
	}
}
function formatUserName(val, row) {
	if(val == 'HSP-EXG-MS'){
		return '系统';
	}else{
		return val;
	}
}
function formatOptObj(val, row) {
	switch(val*1){
	case 1:return '系统';break;
	case 2:return '分组';break;
	case 3:return '用户';break;
	case 4:return '服务器';break;
	case 5:return '告警规则';break;
	case 6:return '告警配置';break;
	case 7:return '审计日志';break;
	case 8:return '短信平台';break;
	default:return val;
	}
}

function formatOptType(val, row) {
	switch(val*1){
	case 1:return '登录';break;
	case 2:return '注销';break;
	case 3:return '添加';break;
	case 4:return '修改';break;
	case 5:return '删除';break;
	case 6:return '修改密码';break;
	case 7:return '查询';break;
	case 8:return '访问';break;
	case 9:return '锁定';break;
	case 10:return '解锁';break;
	case 11:return '发送短信';break;
	case 12:return '暂时锁定';break;
	case 13:return '重置密码';break;
	case 14:return '审核';break;
	case 15:return '越权访问';break;
	default:return val;
	}
}
function formatResult(val, row) {
	if (val == 0) {
		return '成功';
	} else {
		return '失败';
	}
}
function formatLogLevel(val, row){
	if (val == 0) {
		return '<span class="l-btn-left l-btn-icon-left"><span class="l-btn-text">提示</span><span class="l-btn-icon icon-info">&nbsp;</span></span>';
	} else if (val == 1) {
		return '<span class="l-btn-left l-btn-icon-left"><span class="l-btn-text">警告</span><span class="l-btn-icon icon-warning">&nbsp;</span></span>';
	} else if (val == 2) {
		return '<span class="l-btn-left l-btn-icon-left"><span class="l-btn-text">错误</span><span class="l-btn-icon icon-error">&nbsp;</span></span>';
	}else {
		return val;
	}
}
function formatBoolean(val, row) {
	return val ? '是' : '否';
}
/**
 * 格式化运行状态
 * 
 * @param val
 * @param row
 * @returns 图标html
 */
function formatStatus(val, row) {
	if (val == 0) {
		return '<span class="l-btn-left l-btn-icon-left"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-server-stop" title="停止">&nbsp;</span></span>';
	} else if(val == 1) {
		return '<span class="l-btn-left l-btn-icon-left"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-server-start" title="运行">&nbsp;</span></span>';
	} else {
		return '<span class="l-btn-left l-btn-icon-left"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-server-unknown" title="未知">&nbsp;</span></span>';
	}
}
/**
 * 格式化类型：服务/流程
 * 
 * @param val
 * @param row
 */
function formatTimestamp(val, row) {
	return (val > 0) ? TimeUtil.formatterDate(new Date(val), 'yyyy-MM-dd hh:mm:ss') : '';
}
/**
 * 格式化类型：服务/流程
 * 
 * @param val
 * @param row
 */
function formatType(val, row) {
	if (val == 1) {
		return '服务';
	} else if (val == 2) {
		return '流程';
	}
}
/**
 * 格式化类型：CPU/内存/磁盘
 * 
 * @param val
 * @param row
 */
function formatResuorceType(val, row) {
	if (val == 2021) {
		return 'CPU';
	} else if (val == 2022) {
		return '内存';
	} else if (val == 2023) {
		return '磁盘';
	} else 
		return val;
}
/**
 * 格式化告警级别：高中低
 * 
 * @param val
 * @param row
 */
function formatAlarmLevel(val, row) {
	if (val == 0) {
		return '低';
	} else if (val == 1) {
		return '中';
	} else if (val == 2) {
		return '高';
	}
}
/**
 * 全局监测--首页--CPU 占用率进度条
 * @param val
 * @param row
 * @param index
 * @returns {String}
 */
function formatCPUUsage(val, row, index) {
	var usage = row.cpuUsageRate * 100;
	usage = Math.round(usage);
	var time = (row.cpuTimestamp > 0) ? TimeUtil.formatterDate(new Date(row.cpuTimestamp), 'yyyy-MM-dd hh:mm:ss') : 'NA';
	return '<div style="border:#ACE4DB 1px solid;" title="CPU核数：'+ row.cpuCores +'\r\nCPU占用率：' + usage + '%\r\n采集时间：' + time + '">'
			+ '<div style="width:' + usage + '%;height:18px;margin:1px;background-color: #ACE4DB;"></div></div>';
}
/**
 * 全局监测--首页--内存 占用率进度条
 * @param val
 * @param row
 * @param index
 * @returns {String}
 */
function formatMemoryUsage(val, row, index) {
	var usage = 0, total = 0;
	if(row.memoryTotal > 0){
		usage = (row.memoryUsageAmount/row.memoryTotal) * 100;
		usage = Math.round(usage);
		total = (row.memoryTotal < 1024 ? row.memoryTotal + 'MB，' : Math.round(row.memoryTotal / 1024) + 'GB，')
	}
	
	var time = (row.memoryTimestamp > 0) ? TimeUtil.formatterDate(new Date(row.memoryTimestamp), 'yyyy-MM-dd hh:mm:ss') : 'NA';
	return '<div style="border:#ACE4DB 1px solid;" title="内存总量：'+total+'\r\n内存占用率：' + usage + '%\r\n采集时间：' + time + '">'
			+ '<div style="width:' + usage + '%;height:18px;margin:1px;background-color: #ACE4DB;"></div></div>';
}
/**
 * 全局监测--首页--磁盘 占用率进度条
 * @param val
 * @param row
 * @param index
 * @returns {String}
 */
function formatDiskUsage(val, row, index) {
	var usage = 0, total = 0;
	if(row.diskTotal > 0){
		usage = (row.diskUsageAmount/row.diskTotal) * 100;
		usage = Math.round(usage);
		total = (row.diskTotal < 1024 ? row.diskTotal + 'MB，' : Math.round(row.diskTotal / 1024) + 'GB，')
	}
	var time = (row.diskTimestamp > 0) ? TimeUtil.formatterDate(new Date(row.diskTimestamp), 'yyyy-MM-dd hh:mm:ss') : 'NA';
	return '<div style="border:#ACE4DB 1px solid;" title="磁盘总量：'+total+'\r\n磁盘占用率：' + usage + '%\r\n采集时间：' + time + '">'
			+ '<div style="width:' + usage + '%;height:18px;margin:1px;background-color: #ACE4DB;"></div></div>';
}
/**
 * 列表操作列按钮(修改，删除)
 * 
 * @param value
 * @param row
 * @param index
 * @returns {String}
 */
function formatOption(value, row, index) {
	return '<span style="cursor:pointer" class="l-btn-left l-btn-icon-left" onclick="forwardToEdit(\'id=' + row.id	+ '\')"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-edit" title="修改">&nbsp;</span></span>&nbsp;'
			+ '<span style="cursor:pointer" class="l-btn-left l-btn-icon-left" onclick="deleteItem(' + row.id + ')"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-cancel" title="删除">&nbsp;</span></span>';
}
function formatOptionEdit(value, row, index) {
	return '<span style="cursor:pointer" class="l-btn-left l-btn-icon-left" onclick="forwardToEdit(\'id=' + row.id	+ '\')"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-edit" title="修改">&nbsp;</span></span>&nbsp;';
}
function formatOptionDelete(value, row, index) {
	return  '<span style="cursor:pointer" class="l-btn-left l-btn-icon-left" onclick="deleteItem(' + row.id + ')"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-cancel" title="删除">&nbsp;</span></span>';
}
/**
 * 列表操作列按钮(查看详情)
 * 
 * @param value
 * @param row
 * @param index
 * @returns {String}
 */
function formatOptionView(value, row, index) {
	return '<span style="cursor:pointer" class="l-btn-left l-btn-icon-left" onclick="openDetail(' + row.id + ',' + index + ')"><span class="l-btn-text l-btn-empty">&nbsp;</span><span class="l-btn-icon icon-view" title="查看">&nbsp;</span></span>&nbsp;';
}
function formatScheduledStatus(val, row) {
	switch(val*1){
	case 0:return '停用';break;
	case 1:return '启用';break;
	default:return val;
	}
}
function formatScheduledUnit(val, row) {
	switch(val*1){
	case 1:return '天';break;
	case 2:return '小时';break;
	case 3:return '分钟';break;
	default:return val;
	}
}
function openDetail(value, index){
	var rows = $('#dg').datagrid('getRows');
	if(!rows || rows.length == 0){
		return;
	}
	var row = rows[index];
	var columns = $('#dg').datagrid('options').columns;
	if(columns.length > 0){
		columns = columns[0]
	}
	var content = buildDetailContent(row, columns);
	$('#detail').html(content).window({
		width : 600,
		height : 300,
		title : '详情',
		modal : true,
		closed : false,
		iconCls : 'icon-view',
		minimizable : false,
		maximizable : false,
		resizable : false
	});
}
function buildDetailContent(row, columns){
	var content = '<table class="detailTable">';
	var title, field;
	for (var i = 0; i < columns.length; i++) {
		title = columns[i]["title"];
		field = columns[i]["field"];
		if($.trim(field)){
			if(field == 'id' || field == 'timestamp' || field == 'logTime' || field == 'time'){
				content += '<tr><td class="title">' + title + '</td><td>' + formatTimestamp(row[field]) + '</td></tr>';
			}else if(field == 'type'){
				content += '<tr><td class="title">' + title + '</td><td>' + formatResuorceType(row[field]) + '</td></tr>';
			}else if(field == 'description' || field == 'desc'){
				content += '<tr><td class="title">' + title + '</td><td><textarea disabled="disabled" style="width:100%;height:90px;">' + row[field] + '</textarea></td></tr>';
			}else if(field == 'level'){
				content += '<tr><td class="title">' + title + '</td><td>' + formatLogLevel(row[field]) + '</td></tr>';
			}
			else{
				if(row[field] == null)
					content += '<tr><td class="title">' + title + '</td><td>'  + '</td></tr>';
				else
					content += '<tr><td class="title">' + title + '</td><td>' + row[field] + '</td></tr>';
			}
		}
	}
	content += '</table>';
	return content;
}
function forwardTo(url) {
	this.window.location.href = url;
}
/**
 * 跳转到新增页面
 */
function forwardToAdd() {
	forwardTo('toAdd.do');
}
/**
 * 跳转到编辑页
 * 
 * @param id
 * @returns {Boolean}
 */
function forwardToEdit(queryParam) {
	forwardTo('toEdit.do?' + queryParam);
	return false;
}
function lockUser(queryParam){
	forwardTo('lock.do?' + queryParam);
	return false;
}
function unlockUser(queryParam){
	forwardTo('unlock.do?' + queryParam);
	return false;
}
/**
 * 删除
 * 
 * @param id
 */
function deleteItem(id) {
	$.messager.confirm('确认', '您确认想要删除记录吗？', function(r) {
		if (r) {
			$('form').attr('action', 'delete.do?id=' + id);
			$('form').submit();
		}
	});
}
/**
 * 批量删除
 */
function batchDelete() {
	var row = $('#dg').datagrid('getChecked');
	if(row.length == 0){
		alert('请选择需要删除的记录。');
		return false;
	}else{
		// 表格控件中的多选框name=id，选中的多选框，提交到后台action，会自动匹配属性id
		$('form').attr('action', 'delete.do');
		$('form').submit();
	}
}
function openPageInFrame(url) {
	top.$('#centerFrame').attr('src', url);
}

/**
 * 列表界面通用的查询方法
 */
function query(queryParams) {
	var name = $('#name').val();
	var identifie = $('#identifie').val();
	if($('#startTime').length > 0){
		var startTime = $('#startTime').datetimebox('getValue');
	}
	if($('#endTime').length > 0){
		var endTime = $('#endTime').datetimebox('getValue');
	}
	
	if(undefined != name && !$('#name').textbox('isValid')){
		return false;
	}
	if(undefined != identifie && !$('#identifie').textbox('isValid')){
		return false;
	}
	if(undefined != startTime && !$('#startTime').textbox('isValid')){
		return false;
	}
	if(undefined != endTime && !$('#endTime').textbox('isValid')){
		return false;
	}
	$('#dg').datagrid('load', queryParams);
}
/**
 * 根据分组ID加载服务器 （分组，服务器，节点联动下拉框 告警和日志列表页面使用）
 * 
 * @param sel
 */
function loadServer(sel) {
	$('#server').combobox('reload', 'listServer.do?groupId=' + sel.value+'&dt'+(new Date()).getTime());
}
function onLoadServerSuccess(data){
	$('#server').combobox('select', data[0].id);
}
/**
 * 根据服务器ID加载节点 （分组，服务器，节点联动下拉框 告警和日志列表页面使用）
 * 
 * @param sel
 */
function loadNode(sel) {
	$('#node').combobox('reload', 'listNode.do?serverId=' + sel.id+'&dt'+(new Date()).getTime());
}
function onLoadNodeSuccess(data){
	$('#node').combobox('select', data[0].id);
}
/**
 * 点击tab页跳转到指定页面 系统监测下的tab页切换时调用
 * 
 * @param title
 * @param index
 */
function selectTab(title, index) {
	var tab = $('#tabs').tabs('getTab', index);
	$(tab).find('iframe').attr('src', $(tab).attr('url'));
}
function showMailConfig(obj) {
	var val = eval(obj.value);
	var list = $(':text[id^=sys\\.notification\\.mail\\.],:password[id^=sys\\.notification\\.mail\\.],:button[id^=sys\\.notification\\.mail\\.]');
	for (var i = 0; i < list.length; i++) {
		if (list[i].type == 'button') {
			if (val) {
				$(list[i]).removeAttr('disabled');
			} else {
				$(list[i]).attr('disabled', 'disabled');
			}
		} else {
			$(list[i]).textbox(val ? 'enable' : 'disable');
			$(list[i]).textbox(val ? 'enableValidation' : 'disableValidation');
		}
	}
}
function testMailServer() {
	var result = ($('#sys\\.notification\\.mail\\.host').textbox('isValid') &&
			$('#sys\\.notification\\.mail\\.port').numberbox('isValid') &&
			$('#sys\\.notification\\.mail\\.userName').textbox('isValid') &&
			$('#sys\\.notification\\.mail\\.password').textbox('isValid') &&
			$('#sys\\.notification\\.mail\\.fromEmail').textbox('isValid'));
	
	var host = $('#sys\\.notification\\.mail\\.host').val();
	var port = $('#sys\\.notification\\.mail\\.port').val();
	var user = $('#sys\\.notification\\.mail\\.userName').val();
	var psw = $('#sys\\.notification\\.mail\\.password').val();
	var from = $('#sys\\.notification\\.mail\\.fromEmail').val();
	
	var queryParam = {
			'sys.notification.mail.host' : host,
			'sys.notification.mail.port' : port,
			'sys.notification.mail.userName' : user,
			'sys.notification.mail.password' : AES.encrypt(psw),
			'sys.notification.mail.fromEmail' : from
		};
	$.ajax({
		type:'get',
		url:'checkMailServer.do',
		data: queryParam,
		beforeSend: loadingStart,
		success:function(data){
			loadingEnd();
			var r = data - 0;
			alert('连接邮件服务器' + (r == 0 ? '成功。' : '失败'));
		}
	});
}
function showSmsConfig(obj) {
	var val = eval(obj.value);
	var list = $(':text[id^=sys\\.notification\\.sms\\.],:password[id^=sys\\.notification\\.sms\\.],:button[id^=sys\\.notification\\.sms\\.]');
	for (var i = 0; i < list.length; i++) {
		if (list[i].type == 'button') {
			if (val) {
				$(list[i]).removeAttr('disabled');
			} else {
				$(list[i]).attr('disabled', 'disabled');
			}
		} else {
			$(list[i]).textbox(val ? 'enable' : 'disable');
			$(list[i]).textbox(val ? 'enableValidation' : 'disableValidation');
		}
	}
}
function testSmsServer() {
	var result = ($('#sys\\.notification\\.sms\\.host').textbox('isValid') &&
	$('#sys\\.notification\\.sms\\.port').numberbox('isValid') &&
	$('#sys\\.notification\\.sms\\.service\\.id').textbox('isValid') &&
	$('#sys\\.notification\\.sms\\.test\\.to').textbox('isValid'));
	if(!result){
		return false;
	}
	
	var host = $('#sys\\.notification\\.sms\\.host').val();
	var port = $('#sys\\.notification\\.sms\\.port').val();
	var serviceId = $('#sys\\.notification\\.sms\\.service\\.id').val();
	var toNumber = $('#sys\\.notification\\.sms\\.test\\.to').val();

	if(!toNumber) {
		alert('测试号码为空!');
		return false;
	}
	var queryParam = {
			'sys.notification.sms.host' : host,
			'sys.notification.sms.port' : port,
			'sys.notification.sms.service.id' : serviceId,
			'sys.notification.sms.test.to' : toNumber
		};
	$.ajax({
		type:'get',
		url:'checkSmsServer.do',
		dataType: "text",
		data: queryParam,
		beforeSend: loadingStart,
		success:function(data){
			loadingEnd();
			var r = data;
			if(r == "error"){
				alert('系统异常，发送短信失败');
			}else if(r*1 == 0){
				alert('短信发送成功。');
			}else{
				alert('短信发送失败，错误码：'+ r);
			}
		}
	});
}
function loadingStart(){
	$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo('body');
	var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html($.fn.datagrid.defaults.loadMsg).appendTo('body');
	msg._outerHeight(40);
	msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
function loadingEnd(){
	$('.datagrid-mask').remove();
	$('.datagrid-mask-msg').remove();
}
//----------------------------------工具类------------------------------
/**
 * 时间工具类
 */
TimeUtil = {};
/**
 * 格式化日期字符串
 * @param date
 * @param formatter
 * @returns
 */
TimeUtil.formatterDate = function a(date, formatter) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var second = date.getSeconds();

	formatter = formatter.replace('yyyy', year);
	formatter = formatter.replace('MM', (month > 9) ? month : '0' + month);
	formatter = formatter.replace('dd', (day > 9) ? day : '0' + day);
	formatter = formatter.replace('hh', (hours > 9) ? hours : '0' + hours);
	formatter = formatter.replace('mm', (minutes > 9) ? minutes : '0' + minutes);
	formatter = formatter.replace('ss', (second > 9) ? second : '0' + second);
	return formatter;
}
/**
 * 解析日期字符串
 * @param datestring 日期字符串，格式为：yyyy-MM-dd hh:mm:ss或者yyyy-MM-dd
 * @returns Date对象
 */
TimeUtil.parse = function (datestring) {
	var dtArray = datestring.match(/\d+/g);
	if(null == dtArray) throw new Error('日期格式错误')
	var h = dtArray[3] ? dtArray[3] : 0;
	var m = dtArray[4] ? dtArray[4] : 0;
	var s = dtArray[5] ? dtArray[5] : 0;
	return new Date(dtArray[0], dtArray[1] * 1 - 1, dtArray[2], h, m, s);
}
/**
 * 解析日期字符串
 * @param datestring 日期字符串，格式为：yyyy-MM-dd hh:mm:ss
 * @returns 毫秒值
 */
TimeUtil.parseToTime = function (datestring) {
	if(!datestring) {
		return 0;
	}
	try{
		return TimeUtil.parse(datestring).getTime();
	}catch(ex){
		alert(ex.message);
	}
	
}

/**
 * 加载日期年下拉框最近十年
 */
function yearLoad() {
	var currentYear = new Date().getFullYear();
	var select = document.getElementById("startyear");
	for (var i = 0; i <= 10; i++) {
		var theOption = document.createElement("option");
		theOption.innerHTML = currentYear - i + "年";
		theOption.value = currentYear - i;
		select.appendChild(theOption);
	}
};

/**
 * 加载日期月下拉框
 */
function monthLoad() {
	var select = document.getElementById("startmonth");
	for (var i = 1; i < 13; i++) {
		var theOption = document.createElement("option");
		theOption.innerHTML = i + "月";
		theOption.value = i;
		select.appendChild(theOption);
	}
};
/**
 * 加载日期日下拉框
 */
function dayLoad1() {
	var select = document.getElementById("startday");
	for (var i = 1; i < 32; i++) {
		var theOption = document.createElement("option");
		theOption.innerHTML = i + "日";
		theOption.value = i;
		select.appendChild(theOption);
	}
};

/**
 * 得到每个月的天数
 * 
 * @param year
 * @param month
 * @returns {Number}
 */
function getDay(year, month) {
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
		return 31;
	if (month == 4 || month == 6 || month == 8 || month == 9 || month == 11)
		return 30;
	if (month == 2) {
		if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
			return 29;
		return 28;
	}
	return 31;
}

/**
 * 更新日期日下拉框
 */
function updateDay() {
	var year = $("#startyear").combobox("getValue");
	var month = $("#startmonth").combobox("getValue");
	if (year != null && month != null) {
		var day = getDay(year, month);
		dayLoad(day);
	}
}

/**
 * 加载日期日下拉框
 * 
 * @param day
 */
function dayLoad(day) {
	var select = document.getElementById("startday");
	var data;
	data = [];
	for (var i = 1; i <= day; i++)
		data.push({
			"id" : i,
			"identifie" : i + "日"
		});

	$("#startday").combobox("loadData", data).combobox('clear');
	$("#startday").combobox('setValue', data[0].id);
}

/**
 * 拼接消息队列队列名称
 */
function updateQueueName(){
	var srcGroup = $("#srcGroup").combobox("getValue");
	var destGroup = $("#destGroup").combobox("getValue");
	var srcBs = $("#srcBs").combobox("getValue");
	var destBs = $("#destBs").combobox("getValue");
	var queue = $("#queue").combobox("getValue");
	var userDefined = $("#userDefined").val();
	if(userDefined != "") {
		var queueName = srcGroup + "." + destGroup + "." + srcBs + "." + destBs + "." + queue + "." + userDefined;
	} else {
		var queueName = srcGroup + "." + destGroup + "." + srcBs + "." + destBs + "." + queue;
	}
	

	$("#name").textbox('setValue',queueName);
}
var JsonFormatter = {
        stringify: function (cipherParams) {
            // create json object with ciphertext
            var jsonObj = {
                ct: cipherParams.ciphertext.toString(CryptoJS.enc.Hex)
            };
            // optionally add iv and salt
            if (cipherParams.iv) {
                jsonObj.iv = cipherParams.iv.toString();
            }
            if (cipherParams.salt) {
                jsonObj.s = cipherParams.salt.toString();
            }

            // stringify json object
            return JSON.stringify(jsonObj);
        },
        parse: function (jsonStr) {
            // parse json string
            var jsonObj = JSON.parse(jsonStr);
            // extract ciphertext from json object, and create cipher params object
            var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Hex.parse(jsonObj.ct)
            });
            // optionally extract iv and salt
            if (jsonObj.iv) {
                cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
            }
            if (jsonObj.s) {
                cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
            }
            return cipherParams;
        }
    };

AES={};
AES.encrypt = function(ps){
	var pwd = CryptoJS.enc.Hex.parse("12345678901234567890123456789012");// 密码必须用Hex或其他方式处理为byte数组，如果直接使用字符串，CryptoJS会用加盐的方法重新生成密码，而且加的盐是随机数，这样在java端就没法解秘了。
	var iv = CryptoJS.enc.Hex.parse('12345678901234561234567890123456');// iv在java中必须为16byte长，所以js中也必须设置为相同的长度，否则加密后的结果在java中无法解密。
	var setting = {
		iv : iv,
		// mode:CryptoJS.mode.CBC, //默认值，可以不设置
		// padding:CryptoJS.pad.Pkcs7,//同上
		format : JsonFormatter
	};
	var mi = CryptoJS.AES.encrypt(ps, pwd, setting);
	mi = JSON.parse(mi.toString());
	return mi.ct;
}
    
