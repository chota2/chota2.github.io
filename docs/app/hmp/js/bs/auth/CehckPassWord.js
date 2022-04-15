function CehckPassWord(ObjUserID, ObjUserPassWord, objUserPassWordRe)
{

    if(ObjUserPassWord != objUserPassWordRe)
    {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return false;
    }

    if(ObjUserPassWord.length<9 || ObjUserPassWord.length>15)
    {
        alert("비밀번호는 9자리 이상 15자리 이하로 입력해주세요.");
        return false;
    }

    if(!ObjUserPassWord.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,?,_,~,(,)])|([!,@,#,$,%,^,&,?,_,~,(,)].*[a-zA-Z0-9])/))
    {
        alert("비밀번호는 문자(영대문자,영소문자), 숫자, 특수문자의 조합으로 입력해주세요.");
        return false;
    }
    
    if(ObjUserPassWord.indexOf(ObjUserID) > -1)
    {
        alert("비밀번호에 아이디를 사용할 수 없습니다.");
        return false;
    }
    
//    var SamePass_1 = 0; //연속성(+) 카운드
//    var SamePass_2 = 0; //연속성(-) 카운드
//    
//    var chr_pass_0;
//    var chr_pass_1;
//    var chr_pass_2;

    
//    for(var i=0; i < ObjUserPassWord.length; i++)
//    {
//		if(ObjUserPassWord.charAt(i) - ObjUserPassWord.charAt(i+1) == 1 && ObjUserPassWord.charAt(i+1) - ObjUserPassWord.charAt(i+2) == 1){
//			SamePass_1 = SamePass_1 + 1
//		} else if(ObjUserPassWord.charAt(i) - ObjUserPassWord.charAt(i+1) == -1 && ObjUserPassWord.charAt(i+1) - ObjUserPassWord.charAt(i+2) == -1){
//			SamePass_2 = SamePass_2 + 1
//		}

        //chr_pass_0 = ObjUserPassWord.charAt(i);
        /*
		 for(var j=0; j < ObjUserPassWord.length; j++){
			chr_pass_1 = ObjUserPassWord.charAt(j);

			 chr_pass_2 = ObjUserPassWord.charAt(i+2);

			//연속성(+) 카운드
			if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1){
					SamePass_1 = SamePass_1 + 1
			}
				
			//연속성(-) 카운드
			if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_2.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1){
					SamePass_2 = SamePass_2 + 1
			}
		
		 }
		 */
       
//    }

//    if(SamePass_1 > 0 || SamePass_2 > 0 )
//    {
//        alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
//        return false;
//    }
 return true;
}