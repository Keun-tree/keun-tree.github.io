$(document).ready(function(){
    
    //top button 이벤트

    
    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if(sct>100){

            $('#top_btn').fadeIn(500);

        }else{

            $('#top_btn').fadeOut(500);

        }

    });
    
    
    
    $('#top_btn').click(function(){
        
        $('html,body').animate({
            scrollTop: 0
        });
        
    });
    
    
    
    
    
    //box 등장 이벤트
    
    $(window).scroll(function(){
        
        sct = $(window).scrollTop();
        
        // console.log(sct);
        
        
        if(sct >= 400 && sct < 850){

            $('#box_2')/*.stop()*/.animate({
                left: '50%',
                opacity: 1
            },1000,'easeOutBounce');

        }else if(sct >= 850){
            
            $('#box_3')/*.stop()*/.animate({
                top: '50%',
                opacity: 1
            },1000,'easeOutBack');
        }/* else{
            $('#box_2').stop().animate({               
                left: '80%',
                opacity : 0,
            });
            $('#box_3').stop().animate({
                top: '90%',
                opacity : 0,
            });
        } */
        
        
    });
    
        
    /* 가속도
    => 가속도 플러그인 사용(jQuery Easing Plugin)
    => 가속도 들어가는 명령어 뒤에 가속도 명 표기
    (가속도명 : 'Easing 함수 치트 시트' 검색) */
    
    


    
    
});//end





