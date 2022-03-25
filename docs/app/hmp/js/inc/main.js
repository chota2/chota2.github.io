
var Main;

if (document.readyState === "complete") { 
    console.log('MAIN complete DOM fully loaded and parsed');
    //init(); 
}
document.addEventListener('DOMContentLoaded', function(){ // IE9+
    // 실행 코드
    console.log('MAIN DOM fully loaded and parsed');
    frmInit();
    //alert('');
});

