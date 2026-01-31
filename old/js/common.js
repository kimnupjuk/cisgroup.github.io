function check_jumin(obj1,obj2){
	var J1=obj1.value;
	var J2=obj2.value;
	
	// 주민등록번호 1 ~ 6 자리까지의 처리
	// 주민등록번호에 숫자가 아닌 문자가 있을 때 처리
	for(i=0;i<J1.length;i++){
		if (J1.charAt(i) >= 0 || J1.charAt(i) <= 9) {
			// 숫자면 값을 곱해 더한다.
			if(i == 0){
				SUM = (i+2) * J1.charAt(i);
			}else{ 
				SUM = SUM +(i+2) * J1.charAt(i);
			}
		}else{
			// 숫자가 아닌 문자가 있을 때의 처리
			alert("숫자만 입력하세요");
			return false;
		}
	}

	for(i=0;i<2;i++){
		// 주민등록번호 7 ~ 8 자리까지의 처리
		if (J2.charAt(i) >= 0 || J2.charAt(i) <= 9) {
			SUM = SUM + (i+8) * J2.charAt(i);
		}else{
			// 숫자가 아닌 문자가 있을 때의 처리
			alert("숫자만 입력하세요");
			return false;
		}
	}

	for(i=2;i<6;i++){
		// 주민등록번호 9 ~ 12 자리까지의 처리
		if (J2.charAt(i) >= 0 || J2.charAt(i) <= 9) {
			SUM = SUM + (i) * J2.charAt(i);
		}else{
			// 숫자가 아닌 문자가 있을 때의 처리
			alert("숫자만 입력하세요");
			return false;
		}
	}

	var checkSUM = SUM % 11;
	if(checkSUM == 0){
		var checkCODE = 10;
	}else if(checkSUM ==1){
		var checkCODE = 11;
	}else{
		var checkCODE = checkSUM;
	}

	// 나머지를 11 에서 뺀다
	var check1 = 11 - checkCODE;
	if (J2.charAt(6) >= 0 || J2.charAt(6) <= 9) {
		var check2 = parseInt(J2.charAt(6))
	}else{
		alert("숫자만 입력하세요");
		return false;
	}
	if(check1 != check2){
		alert("주민등록 번호를 다시 확인 하세요.");
		return false;
	}else{
		return true;
	}			
}


function check_number(obj){
	var str = obj.value;
	var i;
	for(i=0;i<str.length;i++){
		if (str.charAt(i) >= 0 || str.charAt(i) <= 9) {
			// 숫자
			return true;
		}else{
			// 문자 포함
			return false;
		}
	}
}

function check_special_character(obj,given_msg){
	var str = obj.value;
	var prohibit = new Array(30);
	var check = 0;
	prohibit[0] = "`";
	prohibit[1] = "~";
	prohibit[2] = "@";
	prohibit[3] = "#";
	prohibit[4] = "$";
	prohibit[5] = "%";
	prohibit[6] = "^";
	prohibit[7] = "&";
	prohibit[8] = "*";
	prohibit[9] = "(";
	prohibit[10] = ")";
	prohibit[11] = "-";
	prohibit[12] = "+";
	prohibit[13] = "=";
	prohibit[14] = "|";
	prohibit[15] = "\\";
	prohibit[16] = "{";
	prohibit[17] = "}";
	prohibit[18] = "[";
	prohibit[19] = "]";
	prohibit[20] = ";";
	prohibit[21] = ":";
	prohibit[22] = "'";
	prohibit[23] = "\"";
	prohibit[24] = "<";
	prohibit[25] = ">";
	prohibit[26] = ",";
	prohibit[27] = ".";
	prohibit[28] = "?";
	prohibit[29] = "/";

	for (var i=0; i < prohibit.length; i++){
		if( str.indexOf(prohibit[i]) != -1)	check++;
	}
	if( check>0 ){
		alert(given_msg+'에는 <,>,%,* 등과 같은 특수문자가 올 수 없습니다.');
		obj.focus();
		return false;
	}
	return true;
}

//숫자 검사 루틴
function onlyNumber()
{
	if((event.keyCode<48)||(event.keyCode>57)) event.returnValue=false;
}

//숫자입력 체크루틴
function checkNumber(obj){
	var str = obj.value;
	for (i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i)
		var ch = str.substr(i,1).toUpperCase()
		code = parseInt(code)
		if ((ch < "0" || ch > "9") || ((code > 255) || (code < 0)) || ((code > 57) || (code < 48))) {
			alert("숫자만 입력해 주세요");
			obj.value="";
		}
	}
	//return true;
}

//숫자입력 체크루틴
function checkEngNumber(obj){
	var str = obj.value;
	for (i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i)
		var ch = str.substr(i,1).toUpperCase()
		code = parseInt(code)
		if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z")  && ((code > 57) || (code < 48))) {
			alert("숫자와 영어만 입력해 주세요");
			obj.value="";
		}
	}
	//return true;
}

function check_msg(given) {
	var ans
	ans = confirm(given);
	if( ans == true){
			return true;
	}
	else{
		return false;
	}
}

function check_input(obj,given_msg) {
	var str = obj.value;
	if(str.length==0){
		alert(given_msg);
		obj.focus();
		return false;	
	}
	return true;
}

function check_space(obj,given_msg) {
	var str = obj.value;
	if(str.indexOf(' ') != -1) {
		alert(given_msg+'에는 공백이 들어 갈 수 없습니다.');
 		obj.focus();
		return false;
	}
	return true;
}

function check_length_lower(obj,given_length,given_msg) {
	var str = obj.value;
	if (str.length<given_length) {
		alert(given_msg+'(은)는 '+given_length+'자 이상 입력해 주세요.');
		obj.focus();
		return false;
	}
	return true;
}

function check_length_upper(obj,given_length,given_msg) {
	var str = obj.value;
	if (str.length>given_length) {
		alert(given_msg+'(은)는 '+given_length+'자 이내로 입력해 주세요.');
		obj.focus();
		return false;
	}
	return true;
}

function check_length_mid(obj,llength,ulength,given_msg) {
	var str = obj.value;
	if (str.length<llength || str.length>ulength) {
		alert(given_msg+'(은)는 '+llength+'자 이상 '+ulength+'자 이내로 입력해 주세요.');
		obj.focus();
		return false;
	}
	return true;
}

function check_hangul(obj,given_msg){
	var str = obj.value;
	var retCode = 0;
	for (i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		var ch = str.substr(i,1).toUpperCase();
		code = parseInt(code);
		if( (ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0)) ){
			alert(given_msg+'에는 한글을 쓸 수 없습니다.');
			obj.focus();
			return false;
		}
	}
	return true;
}

function check_email(obj){
	if(!check_input(obj,'E-mail 주소를 입력해 주세요.')) return false;
	str = obj.value;
	if(str.indexOf('@') == -1) {
     		alert("올바른 E-mail형식이 아닙니다.\r\n      다시 입력해 주세요.");
		obj.focus();
		return false;
	}
	return true;
}
		
function check_equal(obj1,obj2, given_msg){
	if (obj1.value != obj2.value ) { 
		alert(given_msg+'(이)가 일치하지 않습니다.');
		obj1.value="";
		obj2.value="";
		obj1.focus();
		return false;
	}		
	return true;
}

function open_new_window(URL,width,height) {
	var str,width,height;
	str="'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,";
	str=str+"width="+width;
	str=str+",height="+height+"'";
	window.open(URL,'remote',str);
}

function check_top_login() {
	if(!check_input(loginform.user_id,'ID를 입력해 주세요.')) return false;
	if(!check_special_character(loginform.user_id,'ID')) return false;
	if(!check_hangul(loginform.user_id,'ID')) return false;
	if(!check_input(loginform.passwd,'비밀번호를 입력해 주세요.')) return false;
	if(!check_space(loginform.passwd,'비밀번호')) return false;
}


function check_logout() {
		var ans
		ans = confirm("정말 로그아웃하시겠습니까?")
		if( ans == true){
			return true;
		}
		else{
			return false;
		}
}

function check_delete() {
		var ans
		ans = confirm("정말 삭제하시겠습니까?")
		if( ans == true){
			return true;
		}
		else{
			return false;
		}
}

//When we get Enter Key Event, Run submick for checking
function EnterCheck(i) {
	if(event.keyCode ==13 && i==1) {
		submitck(1);
	}
}

//When order submit, Check their condition
function submitck(flag) {
	//Searching Condition
	if (flag==1) document.xform.flag.value="1";
	//Moving Condition
	if (flag==2)  document.xform.flag.value="2";
	//Searching Condition
	if (flag==3)  document.xform.flag.value="1";
	//Submit
	document.xform.submit();
}


function NumCheck(obj)
{
	if (isNaN(obj.value)){
		alert("숫자만 입력하여 주십시오.");
		obj.value = "";
		obj.focus();
	}
}



function printPages(xref) {
	window.open('../print_page.php?ref='+xref,'kado_page_print','width=640,height=600,toolbars=no,scrollbars=yes');
}


function Go_topPage() { 
	document.body.scrollTop = 0; 
} 


function getAbsoluteTop(oNode) { // 절대 높이 계산
    var oCurrentNode=oNode;
    var iTop=0;
    while(oCurrentNode.tagName!="BODY") {
        iTop+=oCurrentNode.offsetTop;
        oCurrentNode=oCurrentNode.offsetParent;
    }
    return iTop;
}

function getAbsoluteLeft(oNode) { // 절대 좌측 계산
    var oCurrentNode=oNode;
    var iLeft=0;
    while(oCurrentNode.tagName!="BODY"){
        iLeft+=oCurrentNode.offsetLeft;
        oCurrentNode=oCurrentNode.offsetParent;
    }
    return iLeft;
}