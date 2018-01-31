//easyUI 验证规则扩展
$.extend($.fn.validatebox.defaults.rules, {

	//验证多个用逗号分隔的IP地址
	Link : {
		validator : function(value, param) {
			var valArray = value.split(',');
			var isCorrect = true;
			for(var i = 0; i < valArray.length; i++){
				isCorrect = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|[1-9])$/.test(valArray[i]);
				if(!isCorrect){
					return isCorrect;
				}
				for(var j = i+1; j < valArray.length; j++){
					if(valArray[i] === valArray[j])
						return false;
				}
			}
			return isCorrect;
		},
		message : '请输入正确的IP地址,且ip地址不能相同。'
	},
	// 验证用户名只能包含：字母数组下划线
	userName : {
		validator : function(value) {
			return /^[0-9a-zA-Z_]+$/.test(value);
		},
		message : '只能包含字母、数字和下划线。'
	},
	// 验证IP
	IP : {
		validator : function(value) {
			return /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|[1-9])$/.test(value);
		},
		message : 'IP地址不正确。'
	},
	// 验证包含通配符号的IP
	IPRegex : {
		validator : function(value) {
			var valArray = value.split(',');
			var isCorrect = true;
			for(var i = 0; i < valArray.length; i++){
				isCorrect = /^[0-9.*]+$/.test(valArray[i]);
				if(!isCorrect){
					return isCorrect;
				}
			}
			return isCorrect;
		},
		message : '输入包含非法的特殊字符。只能包含数字、点（.）、逗号（,）和星号（*）。'
	},
	// 验证IP白名单是否包含当前IP
	IPwhitelist : {
		validator : function(value) {
			var valArray = value.split(',');
			var isCorrect = true;
			for(var i = 0; i < valArray.length; i++){
				var reg = new RegExp('^'+valArray[i]+'$', 'g');
				isCorrect = reg.test(sys_ip);
				if(isCorrect){
					return isCorrect;
				}
			}
			return isCorrect;
		},
		message : '白名单内必须包含当前访问IP。'
	},
	// 验证验证日期格式：yyyy-MM-dd hh:mm:ss
	Date : {
		validator : function(value) {
			return /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])\s(0\d{1}|1\d{1}|2[0-3]):([0-5]\d{1}):([0-5]\d{1})$/.test(value);
		},
		message : '日期格式不正确。格式：yyyy-MM-dd hh:mm:ss'
	},
	
	// 验证验证日期格式：yyyy-MM-dd 
	DateDay : {
		validator : function(value) {
			
			return /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/.test(value);
		},
		message : '日期格式不正确。格式：yyyy-MM-dd '
	},
	
	//验证查询条件中的日期
	startLessThanEndDate : {
		validator : function(value, param) {
			var startTime = TimeUtil.parseToTime($(param[0]).datetimebox('getValue'));
			var endTime = TimeUtil.parseToTime(value);
			return (endTime - startTime) >= 0;
		},
		message : '结束时间不能小于开始时间。'
	},
	// 验证查询条件
	searchParam : {
		validator : function(value) {
			return /^[.0-9a-zA-Z/_\u2e80-\u9fff]+$/.test(value);
		},
		message : '只能包含字母、数字、下划线、斜杠和汉字。'
	},
	//验证MQ查询条件  add by xhw
	searchMQParam : {
		validator : function(value) {
			return /^[0-9a-zA-Z./_\u2e80-\u9fff]+$/.test(value);
		},
		message : '只能包含字母、数字、下划线、斜杠和汉字。'
	},
	//验证分组名称，服务器名称等对象名称	
	objName : {
		validator : function(value) {
			return /^[0-9a-zA-Z\(\)/_\u2e80-\u9fff]+$/.test(value);
		},
		message : '只能包含汉字、字母、数字、下划线、斜杠和括弧。'
	},
	//验证介入业务系统名称，服务器名称等对象名称	
	bsName : {
		validator : function(value) {
			return /^[0-9a-zA-Z\(\)/_\-\u2e80-\u9fff]+$/.test(value);
		},
		message : '只能包含汉字、字母、数字、下划线、-、斜杠和括弧。'
	},
	// 验证描述信息
	desc : {
		validator : function(value) {
			return /^[0-9a-zA-Z\(\)/_\u2e80-\u9fff,.:!\|]+$/.test(value);
		},
		message : '只能包含汉字、字母、数字、下划线、斜杠和括弧。'
	},
	// 验证下拉框选项
	selectValueRequired : {
		validator : function(value, param) {
			return $(param[0]).find("option:contains('" + value + "')").val() != '';
		},
		message : '必选项。'
	},
	// 验证密码
	password : {
		validator : function(value) {
			return /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/.test(value);
		},
		message : '密码必须要同时包含字母、数字和特殊字符。至少8个字符，最多30个字符。'
	},
	checkpsd : {
		validator : function(value) {
			return /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/.test(value);
		},
		message : '校验码必须要同时包含字母、数字和特殊字符。至少8个字符，最多30个字符。'
	},
	// 验证密码不能和用户名相同
	pswNotSameName : {
		validator : function(value, param) {
			return $(param[0]).val() != value;
		},
		message : '密码不能和用户名相同。'
	},
	// 验证确认密码输入框
	confirmPassword : {
		validator : function(value, param) {
			return $(param[0]).val() == value;
		},
		message : '两次输入密码不一致。'
	},
	// 验证新密码不能和老密码相同
	newPassword : {
		validator : function(value, param) {
			return $(param[0]).val() != value;
		},
		message : '新密码不能和旧密码相同。'
	},
	// 验证手机号码
	phoneNum : {
		validator : function(value, param) {
			return /^1[3|4|5|8][0-9]\d{8}$/.test(value);
		},
		message : '请输入正确的手机号码。'
	},
	// 验证手机号码列表，以逗号分隔
	phoneNums : {
		validator : function(value, param) {
			var valArray = value.split(',');
			var isCorrect = true;
			for(var i = 0; i < valArray.length; i++){
				isCorrect = /^1[3|4|5|8][0-9]\d{8}$/.test(valArray[i]);
				if(!isCorrect){
					return isCorrect;
				}
			}
			return isCorrect;
		},
		message : '请输入正确的手机号码。'
	},
	// 验证Email
	email : {
		validator : function(value, param) {
			return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
		},
		message : 'E-mail地址格式不正确。'
	},
	// 验证多个用逗号分隔的Email列表
	emails : {
		validator : function(value, param) {
			var valArray = value.split(',');
			var isCorrect = true;
			for(var i = 0; i < valArray.length; i++){
				isCorrect = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valArray[i]);
				if(!isCorrect){
					return isCorrect;
				}
			}
			return isCorrect;
		},
		message : '请输入正确的Email地址。'
	},
	host : {
		validator : function(value) {
			return /^[0-9a-zA-Z.]+$/.test(value);
		},
		message : '只能包含字母、数字和句点(.)。'
	},
	mailUserName : {
		validator : function(value) {
			return /^[0-9a-zA-Z._]+$/.test(value);
		},
		message : '只能包含字母、数字、句点(.)、连字符(-)和下划线(_)。'
	},
	// 验证短信平台业务应用标识serviceID
	serviceID : {
		validator : function(value) {
			return /^0\d{5}$/.test(value);
		},
		message : '业务应用标识以0开头的六位数字组成。'
	},
	// 验证目录路径
	directory : {
		validator : function(value) {
			return /^(([a-zA-Z]:[\\/]((?! )(?![^\\/]*\s+[\\/])[\w -]+[\\/])*(?! )(?![^.]+\s+\.)[\w -]+)|(([\/][\w-]+)*))$/.test(value);
		},
		message : '路径错误。路径格式为：Windows系统：C:/test；Linux系统：/test。'
	}
});
// 扩展文本框的focus事件
$.extend($.fn.textbox.methods, {
	focus: function(jq, calller){
		jq.each(function(){
			$(this).siblings().find('input[type=text]').focus();
		});
	},
	blur: function(jq, calller){
		jq.each(function(){
			$(this).siblings().delegate('input[type=text]','blur', function(e){
				if(calller && typeof(calller)=='function'){
					calller();
				}
			});
		});
	}
});