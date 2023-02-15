$(function(){
    //car 드래그
    for(let i=1; i<=36; i++){
        $('.car-wrap').append(`<img src="img/c${i}.png" alt="">`);
    }
    let imgs=$('.car-wrap').find('img');
    imgs.hide();
    imgs.eq(0).show();
    imgs.attr('draggable', 'false');
    let index=0;
    
    function rotateViewleft(){
        index++;
        if(index>35){index=0;}
        $('.car-wrap>img:visible').hide();
        imgs.eq(index).show();
    }
    function rotateViewright(){
        index--;
        if( index<0){index=35;}
        $('.car-wrap>img:visible').hide();
        imgs.eq(index).show();
    }
    let pastX=0;
    let currentX=0;
    $('.car-wrap').on('mousedown',function(){
        $(this).on('mousemove', function(e){
            pastX=currentX;
            currentX=e.pageX;
            if( pastX<currentX){
                rotateViewright();
            }else{
                rotateViewleft();
            }
        });
    });
    $("body").on('mouseup',function(){
        $('.car-wrap').off('mousemove'); // 이벤트 해제
    });

    $('.color-item>#color0').on('click',function(){
        for(let i=0; i<=36; i++){
            $('.car-wrap').find('img').eq(i).attr('src',`img/c${i+1}.png`)
        }
        $('.color-text>p').html('우유니 화이트')
    })

    $('.color-item>#color1').on('click',function(){
        for(let i=0; i<=36; i++){
            $('.car-wrap').find('img').eq(i).attr('src',`img/c-silver${i+1}.png`)
        }
        $('.color-text>p').html('세빌 실버')
    })

    $('.color-item>#color2').on('click',function(){
        for(let i=0; i<=36; i++){
            $('.car-wrap').find('img').eq(i).attr('src',`img/c-blue${i+1}.png`)
        }
        $('.color-text>p').html('카프리 블루')

    })
    
    //디자인 박스
    $('.tab-btns>ul>li>a').on('click',function(event){
		event.preventDefault();
		$('.tab-btns>ul>li>a').removeClass('active');
		$(this).addClass('active');
        $('.desgin-content>.box-all').hide();
        $( $(this).attr('href') ).css('display','flex');
	});


    //충전 아코디언
    $('.charge-info>ul>li>a').on('click',function(event){
        event.preventDefault();
        if($(this).next().css('display')=='none'){
            $('.charge-info>ul>li>a').removeClass('on');
            $(this).addClass('on');
            $('.answer:visible').slideUp(300, 'easeOutQuart');
            $(this).next().slideDown(300, 'easeOutQuart');
        }
        let n=$(this).parent().index();
        $('.charge-img>ul>li').hide();
        $('.charge-img>ul>li').eq(n).show();
    })

 

    //테크놀로지 박스
    $('.tec-content>.tec-btns>ul>li>a').on('click',function(event){
        event.preventDefault();
        $('.tec-content>tec-btns>ul>li>a').removeClass('active2');
        console.log('active2');
        $(this).addClass('active2');
        $('.tec-content>.box-all').hide();
        $($(this).attr('href')).css('display','block');
    })
});