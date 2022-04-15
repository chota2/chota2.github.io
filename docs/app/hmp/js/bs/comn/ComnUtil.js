/*
 * 요소기술 스크립트  
 */

// 숫자체크
function isNumber(control, msg) {
	
	var val = control;
	var Num = "1234567890";
	for (i=0; i<val.length; i++) {
		if(Num.indexOf(val.substring(i,i+1))<0) {
			alert(msg+' 형식이 잘못되었습니다.');
			return false;
		}
	}
	return true;
}

// 날짜체크
function isDate(control, msg) {
	
	// '/'나 '-' 구분자 제거
	var val = getRemoveFormat(control);
	
	// 숫자, length 확인
	if (isNumber(val, msg) && val.length == 8) {
		var year = val.substring(0,4);
		var month = val.substring(4,6);
		var day = val.substring(6,8);
		
		// 유효날짜 확인
		if(checkDate(year,month,day,msg)){
			return true;
		} else {
			return false;
		}
	} else {
		alert(msg + " 유효하지 않은 년,월,일(YYYYMMDD)입니다. 다시 확인해 주세요!");
		return false;
	}
}

// 구분자 제거
function getRemoveFormat(val) {
	if(val.length == 10) {
		var arrDate = new Array(3);
		arrDate = val.split("/");
		if(arrDate.length != 3) {
			arrDate = val.split("-");
		}
		return arrDate[0] + arrDate[1] + arrDate[2];
	} else {
		return val;
	}	
}

// 유효날짜 확인
function checkDate(varCk1, varCk2, varCk3, msg) {
	if (varCk1>="0001" && varCk1<="9999" && varCk2>="01" && varCk2<="12") {
		febDays = "29";
		if ((parseInt(varCk1,10) % 4) == 0) {
			if ((parseInt(varCk1,10) % 100) == 0 && (parseInt(varCk1,10) % 400) != 0){
				febDays = "28";
			}
		}else{
			febDays = "28";
		}
		if (varCk2=="01" && varCk3>="01" && varCk3<="31") return true;
		if (varCk2=="02" && varCk3>="01" && varCk3<=febDays) return true;
		if (varCk2=="03" && varCk3>="01" && varCk3<="31") return true;
		if (varCk2=="04" && varCk3>="01" && varCk3<="30") return true;
		if (varCk2=="05" && varCk3>="01" && varCk3<="31") return true;
		if (varCk2=="06" && varCk3>="01" && varCk3<="30") return true;
		if (varCk2=="07" && varCk3>="01" && varCk3<="31") return true;
		if (varCk2=="08" && varCk3>="01" && varCk3<="31") return true;
		if (varCk2=="09" && varCk3>="01" && varCk3<="30") return true;
		if (varCk2=="10" && varCk3>="01" && varCk3<="31") return true;
		if (varCk2=="11" && varCk3>="01" && varCk3<="30") return true;
		if (varCk2=="12" && varCk3>="01" && varCk3<="31") return true;
	}
	alert(msg + " 유효하지 않은 년,월,일(YYYYMMDD)입니다. 다시 확인해 주세요!");
	return false;
}
//문자 뒤의 공백문자를 제거하는 함수
function rTrim ( str ) {
	str = str + "";
	var len = str.length;

	for(var i = (len - 1); (str.charAt(i) == ' '); i--);
	str = str.substring(0, i + 1);

	return str;
}

// 문자 맨 앞의 공백문자를 제거하는 함수
function lTrim ( str ) {
	var len = str.length;
	var i = 0;

	for(i = 0; str.charAt(i) == ' '; i++);
	str = str.substring(i, len);

	return str;
}

function Trim ( strValue ) {
		strValue = lTrim(rTrim(strValue));
		return strValue;
}

// Email Check
function EmailCheck(strEmail, strName)
{
	var regDoNot = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/;
	var regMust = /^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3})$/;

	if ( !regDoNot.test(strEmail) && regMust.test(strEmail) ) {
		return true;
	} else {
		msg = "[" + strName + "] : 잘못 입력하셨습니다!\r\n\r\n  다시 한번 확인하십시오.";
		alert(msg);
		return false;
	}
}

function isFieldBlank(theField) {
		var str = theField.value.length;
		str = lTrim(rTrim(str));

		if(str == 0)
 		return true;
		else
 		return false;
}

function EmptyCheck( strValue, strName ) {
		var strlength = strValue.length;

		if ( strlength == 0 ) {
		msg = "[" + strName + "] : 입력하십시오!";
		alert(msg);
		return false;
		} else
		return true;
}

function LengthCheck( strValue, strName, lowLength, highLength )
{
	var nsize = 0;

	nsize = GetLength(strValue);
	if ( nsize < lowLength ) {
		msg = "[" + strName + "] : " + lowLength + "자 이상 입력하십시오!\r\n\r\n (주의: 한글 1자는 2자로 계산함.)";
		alert(msg);
		return false;
	} else if ( nsize > highLength ) {
		msg = "[" + strName + "] : " + highLength + "자 이하로 입력하십시오!\r\n\r\n (주의: 한글 1자는 2자로 계산함.)";
		alert(msg);
		return false;
	}
	else
		return true;
}

//정해진 글자 길이로만 검색해야 할 경우
function LengthCheck2(strValue, strName, length){
	
	var nsize = 0;
	
	nsize = GetLength(strValue);
	
	if(nsize != length){
		msg = "[" + strName + "] : " + length + "자로 검색하십시오!";
		alert(msg);
		return false;
	}
	return true;
}

//정해진 글자 길이로만 등록해야 할 경우
function LengthCheck3(strValue, strName, length){
	
	var nsize = 0;
	
	nsize = GetLength(strValue);
	
	if(nsize != length){
		msg = "[" + strName + "] : " + length + "자로 입력하십시오!";
		alert(msg);
		return false;
	}
	return true;
}

function GetLength( strValue )
{
	var nsize = 0;
	var chrOrig;
	var charEscaped;

	for( var intinx = 0; intinx <= strValue.length -1 ; intinx++ ){
		chrOrig = strValue.substring(intinx,intinx+1);
		chrEscaped = escape(chrOrig); 
		if ( chrEscaped.substring(0,2) == "%u" )
			nsize = nsize + 2;
		else
			nsize++;
		}
		return nsize;
}

//숫만 허용
function onlyNumber(){
  if((event.keyCode<48) || (event.keyCode>57)){
    event.returnValue=false;
  }
}

//영문/숫자만 허용하기 
function onlyEngNumber(str, strName)
{
	var regMust = /[^_(a-zA-Z0-9)]/;

	if ( regMust.test(str) ) {
		msg = "[" + strName + "] : 영문과 숫자만 입력하실 수 있습니다!\r\n\r\n  다시 한번 확인하십시오.";
		alert(msg);
		return false;
	}
	return true;
}

//숫자만 허용하기
//기존함수가 있어 중복되어 함수명 onlyNumber2 로 수정합니다.(2010.11.02 남덕우)
function onlyNumber2(str, strName)
{
	var regMust = /[^_(0-9)]/;

	if ( regMust.test(str) ) {
		msg = "[" + strName + "] :  숫자만 입력하실 수 있습니다!\r\n\r\n  다시 한번 확인하십시오.";
		alert(msg);
		return false;
	}
	return true;
}

//영문만 허용하기 
function onlyEng(str, strName)
{
	var regMust = /[^_(a-zA-Z)]/;

	if ( regMust.test(str) ) {
		msg = "[" + strName + "] : 영문만 입력하실 수 있습니다!\r\n\r\n  다시 한번 확인하십시오.";
		alert(msg);
		return false;
	}
	return true;
}
/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
	for (var inx = 0; inx < input.value.length; inx++) {
		if (chars.indexOf(input.value.charAt(inx)) != -1)
			return true;
	}
	return false;
}

// 주민번호 검사
function JuminCheck(jumin1, jumin2)
{
	var chk = 0;
	if(jumin1.length != 6){
		alert ('주민등록번호 앞부분이 잘못되었습니다.');
		return false;
	}
	
	var sex = jumin2.substring(0,1);
	var yy  = jumin1.substring(0,2);
	var mm  = jumin1.substring(2,4);
	var dd  = jumin1.substring(4,6);

	if ((sex != 1 && sex != 2 && sex != 3 && sex != 4 && sex != 9 && sex != 0) || (jumin2.length != 7 ))
	{
		alert ('주민등록번호 뒷부분이 잘못되었습니다.');
		return false;
	}
	
	for (var i = 0; i <=5 ; i++)
		chk = chk + ((i%8+2) * parseInt(jumin1.substring(i,i+1)));
	
	for (i = 6; i <=11 ; i++)
		chk = chk + ((i%8+2) * parseInt(jumin2.substring(i-6,i-5)));
	
	chk = 11 - (chk %11);
	chk = chk % 10;
	  
	if (chk != jumin2.substring(6,7))
	{
		alert ('유효하지 않은 주민등록번호입니다.');
		return false;
	}
	
	return true
}

//외국인 주민번호 검사
function ForeignerJuminCheck(jumin1, jumin2)
{
    var sum = 0;
	var rrn = jumin1 + jumin2;

    if (rrn.length != 13) {
		alert ('주민등록번호가 잘못되었습니다.');
        return false;
    }else if (rrn.substr(6, 1) != 5 && rrn.substr(6, 1) != 6 && rrn.substr(6, 1) != 7 && rrn.substr(6, 1) != 8) {
		alert ('주민등록번호 뒷부분이 잘못되었습니다.');
        return false;
    }

    if (Number(rrn.substr(7, 2)) % 2 != 0) {
		alert ('주민등록번호 뒷부분이 잘못되었습니다.');
        return false;
    }

    for (var i = 0; i < 12; i++) {
        sum += Number(rrn.substr(i, 1)) * ((i % 8) + 2);
    }

    if ((((11 - (sum % 11)) % 10 + 2) % 10) != Number(rrn.substr(12, 1))) {
		alert ('유효하지 않은 주민등록번호입니다.');
		return false;
    }

    return true;
}

//Radio button Check
function CheckRadio(obj, msg ) {

	if (obj) {
		if (obj.length){
			var j = 0;
			for (i=0;i < obj.length; i++){
				if (obj[i].checked == true) {
					j++;
				}
			}
			if ( j == 0) {
				alert(msg);
				return false;
			}
		} else {
			if (obj.checked == true) {
			} else {
				alert(msg);
				return false;
			}
		}
	} else {
		alert(msg);
		return false;
	}

	return true;
}

/*	검색어 입력시에 특수문자 체크용 함수	*/
function checkxword(str) {
	var xword = '!@#$%^&*()';
	for (i = 0; i < str.length; i++) {
		for (z = 0; z < xword.length; z++) {
			if (str.charAt(i) == xword.charAt(z)) {
				return true;
			}
		}
	}
	return false;
}

	/*
	* 사업자번호 검사
	*/
	function  idnumSecond_Check(idnum){

		if(idnum.length == 0){
			return false;
		}
		
		var sum = 0; 
		var getlist =new Array(10); 
		var chkvalue =new Array("1","3","7","1","3","7","1","3","5"); 
		for(var i=0; i<10; i++) { 
			getlist[i] = idnum.substring(i, i+1); 
		}
		for(var i=0; i<9; i++) {
			sum += getlist[i]*chkvalue[i]; 
		} 
		sum = sum + parseInt((getlist[8]*5)/10); 
		sidliy = sum % 10; 
		sidchk = 0; 
		if(sidliy != 0){ 
			sidchk = 10 - sidliy; 
		}else{ 
			sidchk = 0; 
		}
		if(sidchk != getlist[9]) { 
			return false; 
		} 
		return true; 
	}
	/*
	* 법인번호 검사
	*/
	function  idnumThird_Check(idnum){
		if(idnum.length == 0){
			return false;
		}
		
		//if (para.length!= 10 || !isNumber2(para))  return(false);		
		var  szChkDgt = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
		var  szCoNo = idnum;
		// 법인번호 오류시 빠져나가는 방법
		//if ( szCoNo = "2150110001021")
		//    return true;
		var  lV1 = 0;
		var  nV2 = 0;
		var  nV3 = 0;
		nV2 = 0;
		for( var i = 0 ; i < 12 ; i++){
			lV1 = parseInt(szCoNo.substring(i,i+1)) * szChkDgt[i];
			if(lV1 >= 10){
				nV2 += lV1 % 10;
			}else{
				nV2 += lV1;
			}
		}
		nV3 = nV2 % 10;
		if( nV3 > 0 ){
			nV3 = 10 - nV3;
		}else{
			nV3 = 0;
		}
		if( szCoNo.substring(12,13) != nV3){
			return false;
		}
		return true;
	}
	
	 /**
	비밀번호 정책 강화로 인한 대/소문자/숫자/기호 조합체크
	 **/
	 function containsChars_N1(input) {
//		var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^%&*_-"; 2009.06.03 비밀번호 정책 변경 -> 영+숫자
		var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for (var inx = 0; inx < input.value.length; inx++) {
			if (chars.indexOf(input.value.charAt(inx)) == -1)
				return false;
		}
		return true;
	}
	 
	 	 
 function isAlphaNum(input) {
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		return containsChars(input,chars);
	}
 
 function checkPassword(uid, upw){
	 chk1 = /^[a-zA-Z0-9]{6,12}$/;
	 chk2 = /[a-zA-Z]/;
	 chk3 = /\d/;
	 chk4 = /(\w)\1\1\1/;
	 
	 if(!chk1.test(upw)){ 
		 alert('비밀번호는 숫자와 영문자 조합으로 6~12자리를 사용해야 합니다.'); 
		 return false;
	 }
	 
	 if(!chk2.test(upw)){ 
		 alert('비밀번호는 숫자와 영문자 조합으로 사용해야 합니다.'); 
		 return false;
	 }
	 
	 if(!chk3.test(upw)){ 
		 alert('비밀번호는 숫자와 영문자 조합으로 사용해야 합니다.'); 
		 return false;
	 }
	 
	 if(chk4.test(upw)){ 
		 alert('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.'); 
		 return false;
	 }
	 
	if(upw.search(uid)>-1) {
		 alert('아이디가 포함된 비밀번호는 사용하실 수 없습니다.'); 
		 return false;
	}
	 
	return true;
 }
 
 
 function setCookie (name, value, expires) {
		document.cookie = name + "=" + escape (value) + "; path=/; expires=" + expires.toGMTString();
	}

function getCookie(Name) {
	var search = Name + "="
	if (document.cookie.length > 0) { // 쿠키가 설정되어 있다면
		offset = document.cookie.indexOf(search)
		if (offset != -1) { // 쿠키가 존재하면
			offset += search.length
			// set index of beginning of value
			end = document.cookie.indexOf(";", offset)
			// 쿠키 값의 마지막 위치 인덱스 번호 설정
			if (end == -1)
				end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		}
	}
	return "";
}
		
		
/*
* 숫자만 입력가능 하도록 함
* 예) onkeypress="onOnlyNumber(this);" 
*/
function onOnlyNumber(obj)
{
	if (event.keyCode >= 48 && event.keyCode <= 57) {
	} else {
		event.returnValue = false;
	}
}		

/*
* 숫자만 입력가능 하도록 함(IE, FF 모두 사용가능)
* 예) onkeypress="onOnlyNumber(this, event);" 
*/
function onOnlyNumber(obj, e)
{
	var result = (window.event) ? event.keyCode : e.which;
	
	code = String.fromCharCode(result); 

    if ((result == null) || (result == 0) || (result == 8) || (result == 9) || (result == 13) || (result==27)) {
    	
	}else if((("0123456789").indexOf(code) > -1)){
		
	}else {
		if(window.event){
			event.returnValue = false;
		}else{
			e.preventDefault();
		}
	}
}	
	

/*
* 숫자와 '-'만 입력가능 하도록 함
* 예) onkeypress="onTelCheck(this);" 
*/
function onTelCheck(obj)
{
	if( !(((event.keyCode > 47) && (event.keyCode < 58)) || (event.keyCode == 45)) ) { 
		event.returnValue = false;
	}
}


/*
* 숫자와 '.'(점)만 입력가능 하도록 함
* 예) onkeypress="onNumberSpotCheck(this);" 
*/
function onNumberSpotCheck(obj)
{
	if( !(((event.keyCode > 47) && (event.keyCode < 58)) || (event.keyCode == 46)) ) { 
		event.returnValue = false;
	}
}


/**
*  글자수를 Byte로 가져오기
*  한글 : 2Byte, 영문/숫자 : 1Byte
*/
function GetTextByte(text){
	var length = 0;
	var ch;
	for (var i = 0; i < text.length; i++) {
		ch = escape(text.charAt(i));
		if ( ch.length == 1 ) {
			length++;
		}else if (ch.indexOf("%u") != -1) {
			length += 2;
		}else if (ch.indexOf("%") != -1) {
			length += ch.length/3;
		}
	}
	return length;
}


// type="radio" value 가져오기
function getRadioValue(inputName){	
	var ret_val;
	
	if(inputName){
		var in_len = inputName.length;//길이를 구한다.
		
		if(in_len == undefined){
			ret_val = inputName.value;
		}else{
			for(ri = 0 ; ri < in_len; ri++){
				if(inputName[ri].checked == true){
					ret_val = inputName[ri].value;		
				}
			}
		}
	}else{
	    ret_val = "";
	}
	
	return ret_val;	
}


/**
 *  파일 확장자 확인하는 function
 *  - 허용파일확장자 : jpg, jpeg, gif
 *  - 사용방법 : if(!chkImageFile(document.mainForm.logoFile)){ }
 */
function chkImageFile(obj){

	if(obj.value != ""){
		var filename = obj.value;
		var nameStart = filename.lastIndexOf("\\",filename.length-1); 
		var extStart = filename.lastIndexOf(".",filename.length-1);
		var ext = filename.substr(extStart+1).toUpperCase();
		
		if (extStart==-1 || !(ext=="JPG" || ext=="JPEG" || ext=="GIF")) {
			return false;
		}
	}
	return true;
}
 

 /**
  *  파일 확장자 확인하는 function
  *  - 허용파일확장자 : DOC, XLS, PPT, CSV, GUL, HWP, DOCX, XLSX, PPTX, PDF, JPG, JPEG (통합제증명보고서파일 : 을지)
  *  - 사용방법 : if(!chkTestDocu(document.mainForm.logoFile)){ }
  */
 function chkTestDocu(obj){

 	if(obj.value != ""){
 		var filename = obj.value;
 		var nameStart = filename.lastIndexOf("\\",filename.length-1); 
 		var extStart = filename.lastIndexOf(".",filename.length-1);
 		var ext = filename.substr(extStart+1).toUpperCase();
 		
 		if (extStart==-1 || (!(ext=="DOC") && !(ext=="XLS") && !(ext=="PPT") && !(ext=="CSV") && !(ext=="GUL") && !(ext=="HWP") && !(ext=="DOCX") && !(ext=="XLSX") && !(ext=="PPTX") && !(ext=="PDF") && !(ext=="JPG") && !(ext=="JPEG"))) {
 			alert("【 입력오류 】: 보고서는  DOC, XLS, PPT, CSV, GUL, HWP, DOCX, XLSX, PPTX, PDF, JPG, JPEG 확장자만 가능합니다.");	
 			return false;
 		}
 		
 	}
 	return true;
 }
 

 /**
  *  파일 확장자 확인하는 function
  *  - 허용파일확장자 : ozr (통합제증명: 서식국문디자인파일/서식영문디자인파일)
  *  - 사용방법 : if(!chkImageFile2(document.mainForm.logoFile)){ }
  */
 function chkImageFile2(obj){

 	if(obj.value != ""){
 		var filename = obj.value;
 		var nameStart = filename.lastIndexOf("\\",filename.length-1); 
 		var extStart = filename.lastIndexOf(".",filename.length-1);
 		var ext = filename.substr(extStart+1).toUpperCase();
 		
 		if (extStart==-1 || !(ext=="OZR")) {
 			return false;
 		}
 	}
 	return true;
 }
 

 /**
  *  파일 확장자 확인하는 function
  *  - 허용파일확장자 : odi (통합제증명: 서식국문데이터파일/서식영문데이터파일)
  *  - 사용방법 : if(!chkImageFile3(document.mainForm.logoFile)){ }
  */
 function chkImageFile3(obj){

 	if(obj.value != ""){
 		var filename = obj.value;
 		var nameStart = filename.lastIndexOf("\\",filename.length-1); 
 		var extStart = filename.lastIndexOf(".",filename.length-1);
 		var ext = filename.substr(extStart+1).toUpperCase();
 		
 		if (extStart==-1 || !(ext=="ODI")) {
 			return false;
 		}
 	}
 	return true;
 }
  
  /**
  *  금지파일 확장자 확인하는 function
  *  - 금지파일확장자 : JSP, PHP, ASP, CGI, EXE, BAT, JS, ASPX, PHP3
  *  - 사용방법 : if(!chkBanFile(document.mainForm.logoFile)){ }
  */
  function chkBanFile(obj){

  	if(obj.value != ""){
  		var filename = obj.value;
  		var nameStart = filename.lastIndexOf("\\",filename.length-1); 
  		var extStart = filename.lastIndexOf(".",filename.length-1);
  		var ext = filename.substr(extStart+1).toUpperCase();
  		
  		if (extStart==-1 || ext=="JSP" || ext=="PHP" || ext=="ASP" || ext=="CGI" || ext=="EXE" || ext=="BAT" || ext=="JS" || ext=="ASPX" || ext=="PHP3") {
  			return false;
  		}
  	}
  	return true;
  }
  
  /**
  * 입력받은 숫자의 3자리마다 comma 추가(숫자 아닌 문자는 자동 제거)
  * ex) 1234567890 -> 1,234,567,890
  */
 function addCommas(nStr)
 {
 	nStr = stripNonNumeric( nStr );
 	
 	// 앞자리에 붙어있는 불필요한 0 제거
 	if(nStr.length > 1) {	// 길이가 1일 때는 0이라도 상관 없음
	  	for( var i = 0; i < nStr.length; i++ ){
	  		if( nStr.charAt(i) == '0') {
	  			nStr = nStr.substring(i+1, nStr.length);
	  		} else {
	  			break;
	  		}
	  	}
	  }
	  
 	nStr += '';
 	x = nStr.split('.');
 	x1 = x[0];
 	x2 = x.length > 1 ? '.' + x[1] : '';
 	var rgx = /(\d+)(\d{3})/;
 	while (rgx.test(x1)) {
 		x1 = x1.replace(rgx, '$1' + ',' + '$2');
 	}
 	return x1 + x2;
 }

 /**
 * 숫자 아닌 문자는 제거
 */ 
 function stripNonNumeric( str ){
 	str += '';
 	var rgx = /^\d|-$/;
 	var out = '';
 	for( var i = 0; i < str.length; i++ ){
 		if( rgx.test( str.charAt(i) ) ){
 			if( !( ( str.charAt(i) == '.' && out.indexOf( '.' ) != -1 ) ||
 			( str.charAt(i) == '-' && out.length != 0 ) ) ){
 				out += str.charAt(i);
 			}
 		}
 	}
 	return out;
 }
 
 
// 옵션 지우기 ex) nullOptions(document.aaaForm.class1, false);
function nullOptions(obj, allGbn){
	var obj_len = obj.options.length;
	var i = 0;
	
	if(allGbn == true){
		// 모두지움
		obj.options.length = 0;
	}else{
		//최상위 하나만을 남겨놓구 지움
		for(i=0; i<obj_len; i++){
			obj.options[obj_len-i] = null;
		}
	}
}

//
// 옵션 복사 신규생성
//	selectbox-1(oldObj) 의 값을 selecbox-2(newObj) 옵션으로 복사하여 신규 생성 
// ex)	newOption(document.aaaForm.class1, document.aaaForm.class2)	
//
function newOption(newObj, oldObj){
	for(i=0; i<oldObj.options.length; i++){
		newObj.options[i] = new Option(oldObj.options[i].text, oldObj.options[i].value);
	}
}

function newOptionById(newObj, oldObj){
	for(i=0; i<oldObj.options.length; i++){
		var opt = document.createElement("option");
		opt.text = oldObj.options[i].text;
		opt.value = oldObj.options[i].value;
		newObj.insertAdjacentElement("beforeEnd",opt);
	}
}

//
// 옵션 추가 신규생성
//	현재 있는 셀렉트 박스의 값에 추가로 생성할경우
// ex)	newNextOption(document.aaaForm.class1, "text 값","value값")
  
//	반복문을 사용할수도 있다.
//	for(i=0; i<3; i++)
//	{
//		newNextOption(document.aaaForm.class1, i, i);
//	}
//
function newNextOption(newObj, str_text, str_value){
	var now_option_length = newObj.options.length;
	
	newObj.options[now_option_length] = new Option(str_text, str_value);
}


/**
 *  문자열에 있는 모든 공백 제거  
 */
function removeWhitespace(str){
	str = str.replace(/\s/g,''); // 공백(whitespace) 제거
	return str;
}

// 전화번호 국번 구분
function formTel(val){
 	var result="";
 	
 	if(val.substring(0,1)=="0"){
 		
 		if(val.substring(0,2)=="02"){
 			result = val.substring(0,2) + ")" + val.substring(2,30);
 		}else{
 			result = val.substring(0,3) + ")" + val.substring(3,30);
 		}
 		
 	}else{
 		result = val;
 	}
 	
 	return result;
 }


//시험 성적서 첨자 및 특수문자 입력 관련 - 이재진

//첨자입력 팝업
function fnExponentPopup(openerFormNm, openerInputNm, openerIndex, objLength){

	window.open("/svc/cmmn/fm/htmlEditExponentPopup.do?openerFormNm="+openerFormNm+"&openerInputNm="+openerInputNm+"&openerIndex="+openerIndex+
			"&objLength="+objLength,
			"htmlCodeInputPopup","width=400, height=140, scrollbars=no, resizable=yes, toolbar=no, status=no");
	
}

//특수문자 입력 팝업
function fnSpecialCharPopup(openerFormNm, openerInputNm, openerIndex, objLength){

	window.open("/svc/cmmn/fm/htmlEditSpecialCharPopup.do?openerFormNm="+openerFormNm+"&openerInputNm="+openerInputNm+"&openerIndex="+openerIndex+
			"&objLength="+objLength,
			"htmlCodeInputPopup","width=400, height=280, scrollbars=no, resizable=yes, toolbar=no, status=no");
}

//부모창의 inputbox에 데이터 넣어주기
function fnOpenerInputValue(formNm, inputNm, value, openerIndex, objLength){
	
	if(objLength == 1){
		eval("opener.document." + formNm + "." + inputNm).value += value;			
	}else{
		eval("opener.document." + formNm + "." + inputNm)[openerIndex].value += value;
	}
}

//데이터 인코딩
function fnEncodeResult(formNm, inputNm, openerIndex, objLength){
	
	var ecodeValue;
	if(objLength == 1){
		ecodeValue = eval("document." + formNm + "." + inputNm).value;
	}else{
		ecodeValue = eval("document." + formNm + "." + inputNm)[openerIndex].value;
	}
	ecodeValue = encodeURIComponent(ecodeValue, "UTF-8");
	return ecodeValue;
}

//입력값 세자리 콤마찍기
function isNumInput(input){
	input.value = addCommas(input.value);
}

// 풍선도움말용 전역변수
var bubbleNo = 0;	// 풍선도움말오 div를 순차적으로 생성하기 위한 변수
//var bubbleArray = new Array("동해물","남산위에", "가을 하늘","이 기상과"); 	// 풍선도움말에 넣을 문자열. html 가능함.

/*
 * 풍선도움말용 함수
 * 
 * 1. <header>태그에 var bubbleArray 변수를 선언하고 도움말을 정의하셔야 합니다. 
 * <head>
 * 	<script>
 * 	var bubbleArray = new Array();
 * 	bubbleArray['업체명'] = "업체명은 해당 기업의 업체명으로 사업자 등록증 상의 사업체명과 동일하여야 합니다.";
 * 	bubbleArray['대표자명'] = "대표자명은 실제 법인 등록시 대표자명으로 등록된 대표자의 이름으로 기입하십시오.";
 * 	</script>    
 * </head>
 * 
 * 2. 풍선도움말을 삽입하고 싶은 곳에 아래처럼 넣으세요. 반드시 script 태그로 둘러싸야 합니다.
 * ex) 업체명 입력 <script>fnPutBubble('업체명');</script>
 *  
 * 3. parameter
 * bubbleId : bubbleArray 배열의 해당 엘리먼트의 아이디
 */
function fnPutBubble(bubbleId) {
	tempBubbleNo = bubbleNo++;
	document.write("<div class=\"question_layer01\">");
	document.write("<a href=\"#\" onmouseover=\"document.getElementById('reply_box" + tempBubbleNo + "').style.display='block';\" onmouseout=\"document.getElementById('reply_box" + tempBubbleNo + "').style.display='none';\"><img src=\"/img/svc/btn/btn_question01.gif\" alt=\"?\"/></a>");
	document.write("<div class=\"reply_box\" id=\"reply_box" + tempBubbleNo + "\">");
	document.write("<span>" + bubbleArray[bubbleId] + "</span>");
	document.write("</div>");
	document.write("</div>");
}



/*  Function Equivalent to java.net.URLEncoder.encode(String, "UTF-8")
Copyright (C) 2002, Cresc Corp.
Version: 1.0
*/
function encodeURL(str){
var s0, i, s, u;
s0 = "";                // encoded str
for (i = 0; i < str.length; i++){   // scan the source
    s = str.charAt(i);
    u = str.charCodeAt(i);          // get unicode of the char
    if (s == " "){s0 += "+";}       // SP should be converted to "+"
    else {
        if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))){       // check for escape
            s0 = s0 + s;            // don't escape
        }
        else {                  // escape
            if ((u >= 0x0) && (u <= 0x7f)){     // single byte format
                s = "0"+u.toString(16);
                s0 += "%"+ s.substr(s.length-2);
            }
            else if (u > 0x1fffff){     // quaternary byte format (extended)
                s0 += "%" + (oxf0 + ((u & 0x1c0000) >> 18)).toString(16);
                s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
                s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
            }
            else if (u > 0x7ff){        // triple byte format
                s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
                s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
            }
            else {                      // double byte format
                s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
                s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
            }
        }
    }
}
return s0;
}

/*  Function Equivalent to java.net.URLDecoder.decode(String, "UTF-8")
Copyright (C) 2002, Cresc Corp.
Version: 1.0
*/
function decodeURL(str){
var s0, i, j, s, ss, u, n, f;
s0 = "";                // decoded str
for (i = 0; i < str.length; i++){   // scan the source str
    s = str.charAt(i);
    if (s == "+"){s0 += " ";}       // "+" should be changed to SP
    else {
        if (s != "%"){s0 += s;}     // add an unescaped char
        else{               // escape sequence decoding
            u = 0;          // unicode of the character
            f = 1;          // escape flag, zero means end of this sequence
            while (true) {
                ss = "";        // local str to parse as int
                    for (j = 0; j < 2; j++ ) {  // get two maximum hex characters for parse
                        sss = str.charAt(++i);
                        if (((sss >= "0") && (sss <= "9")) || ((sss >= "a") && (sss <= "f"))  || ((sss >= "A") && (sss <= "F"))) {
                            ss += sss;      // if hex, add the hex character
                        } else {--i; break;}    // not a hex char., exit the loop
                    }
                n = parseInt(ss, 16);           // parse the hex str as byte
                if (n <= 0x7f){u = n; f = 1;}   // single byte format
                if ((n >= 0xc0) && (n <= 0xdf)){u = n & 0x1f; f = 2;}   // double byte format
                if ((n >= 0xe0) && (n <= 0xef)){u = n & 0x0f; f = 3;}   // triple byte format
                if ((n >= 0xf0) && (n <= 0xf7)){u = n & 0x07; f = 4;}   // quaternary byte format (extended)
                if ((n >= 0x80) && (n <= 0xbf)){u = (u << 6) + (n & 0x3f); --f;}         // not a first, shift and add 6 lower bits
                if (f <= 1){break;}         // end of the utf byte sequence
                if (str.charAt(i + 1) == "%"){ i++ ;}                   // test for the next shift byte
                else {break;}                   // abnormal, format error
            }
        s0 += String.fromCharCode(u);           // add the escaped character
        }
    }
}
return s0;
}


//object 별 display option
function displayObj(obj, displayOpt){
	obj.style.display = displayOpt;
}

// 스크립트 출력시 널값 변경
function setNullToInitialize(inputData){
	
	if(inputData==null){
		inputData = "";
	}
	return inputData;
}

// 엔터이벤트 셋팅
function setEnterEvent(execFnc){
	if(event.keyCode == 13){
		execFnc();
	}
}

// 파일다운로드(사이버)
function cyFileDownLoad(fileFullPath, oriFileName){
	var frm = document.forms[0];
	var oldFrmAction = frm.action;
	var oldFrmMethod = frm.method;
	var oldFrmTarget = frm.target;
	var oldFrmenctype = frm.enctype;

	frm.method = "post";
	frm.enctype = "application/x-www-form-urlencoded";
	frm.target = "_self";
	frm.action = "/download/downloadFile.do?requestedFile="+fileFullPath+"&atchmnflNm="+oriFileName;
	frm.submit();

	frm.action = oldFrmAction;
	frm.target = oldFrmTarget;
	frm.method = oldFrmMethod;
	frm.enctype = oldFrmenctype;
}

// 화면인쇄
function cyPrintContents(printAreaId, width, height){
	
	
	var printForm = document.createElement("FORM");
	var body = document.getElementsByTagName("BODY")[0];
	
	body.insertAdjacentElement("beforeEnd",printForm);
	
	var printContentHidden = document.createElement("INPUT");
	printContentHidden.type = "hidden";
	printContentHidden.name = "cyPrintContents";
	printContentHidden.value = document.getElementById(printAreaId).outerHTML;
	
	printForm.insertAdjacentElement("beforeEnd",printContentHidden);
	
	window.open('','cyPrintPop',"'left=0, top=0, width="+width+", height="+height+", scrollbars=yes, toolbar=no, menubar=no, status=no, resizable=no';");
	
	printForm.action = "/cy/comn/popup/printPopup.do";
	printForm.target = "cyPrintPop";
	printForm.method = "post";
	
	printForm.submit();
}

//고객번호 포맷팅
function cyFormatCusNo(orgCusNo){
	
	if(orgCusNo==null || orgCusNo==""){
		return "";
	}
	var regExp = /.*-.*/g;
	
	if(regExp.test(orgCusNo)){
		return orgCusNo;
	}
	
	if(orgCusNo.length != 9){
		return "";
	}
	
	try{
		return orgCusNo.substring(0,3) + "-" + orgCusNo.substring(3);
	}catch(e){return "";}
	
}

//수용가번호 포맷팅
function cyFormatSuyoNo(orgSuyoNo){
	
	
	if(orgSuyoNo==null || orgSuyoNo==""){
		return "";
	}
	
	var regExp = /.*-.*/g;
	
	if(regExp.test(orgSuyoNo)){
		return orgSuyoNo;
	}
	
	if(orgSuyoNo.length != 20){
		return "";
	}
	
	var formatedNo = "";
	try{
		formatedNo += (orgSuyoNo.substring(0,2) + "-");
		formatedNo += (orgSuyoNo.substring(2,7) + "-");
		formatedNo += (orgSuyoNo.substring(7,10) + "-");
		formatedNo += (orgSuyoNo.substring(10,13) + "-");
		formatedNo += (orgSuyoNo.substring(13,17) + "-");
		formatedNo += (orgSuyoNo.substring(17,19) + "-");
		formatedNo +=  orgSuyoNo.substring(19,20);
	}catch(e){return "";}
	
	return formatedNo;
}

//주민번호 포맷팅
function cyFormatJuminNo(orgJumin){
	
	
	if(orgJumin==null || orgJumin==""){
		return "";
	}
	
	var regExp = /.*-.*/g;
	
	if(regExp.test(orgJumin)){
		return orgJumin;
	}
	
	if(orgJumin.length != 13){
		return "";
	}
	
	var formatedNo = "";
	try{
		formatedNo += (orgJumin.substring(0,6) + "-");
		formatedNo +=  orgJumin.substring(6);
	}catch(e){return "";}
	
	return formatedNo;
}

//사업자등록번호 포맷팅
function cyFormatBizNo(orgBiz){
	
	if(orgBiz==null || orgBiz==""){
		return "";
	}
	
	var regExp = /.*-.*/g;
	
	if(regExp.test(orgBiz)){
		return orgBiz;
	}
	
	if(orgJumin.length != 10){
		return "";
	}
	
	var formatedNo = "";
	try{
		formatedNo += (orgBiz.substring(0,3) + "-");
		formatedNo += (orgBiz.substring(3,5) + "-");
		formatedNo +=  orgBiz.substring(5);
	}catch(e){return "";}
	
	return formatedNo;
}

function replaceAll(str, searchStr, replaceStr) {
	 while (str.indexOf(searchStr) != -1) {
	  str = str.replace(searchStr, replaceStr);
	 }
	 return str;
	}

//YYYYMMDD -> YYYY-MM-DD 포맷팅
function cyFormatDate(yyyymmddStr)
{
	var formatedStr = "";
	if( yyyymmddStr != null && yyyymmddStr != "")
	{
		try{
			formatedStr += (yyyymmddStr.substring(0,4) + "-");
			formatedStr += (yyyymmddStr.substring(4,6) + "-");
			formatedStr +=  yyyymmddStr.substring(6,8);
		}catch(e){return "";}
	}
	return formatedStr;
}

//HHMMSS... -> HH:MM 포맷팅
function cyFormatTime(hhmmssStr)
{
	var formatedStr = "";
	try{
		formatedStr += (hhmmssStr.substring(0,2));
		formatedStr += (":" + hhmmssStr.substring(2,4));
		//formatedStr += (":" +  hhmmssStr.substring(4,6));
	}catch(e){return "";}

	return formatedStr;
}