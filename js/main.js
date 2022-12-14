
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#fff', '#EBE7E4', '#FFC19E', '#fffff'],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','새로운소식'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th'],
    menu: '.gnb_list',
    normalScrollElements: '#s2',
});


//햄버거 버튼 클릭
$('.btn_total').click(function(){
    $('.total_menu_z').addClass('active');
});

//메뉴 팝업 닫기 클릭
$('.btn_totalClose').click(function(){
    $('.total_menu_z').removeClass('active');
});

var myScroll = new IScroll('.total_menu ', {
    mouseWheel: true,
    //scrollbars: true
});


$('.totalMitem').click(function(){
    if($(this).hasClass('active')){  //현재 active가 적용된 상태일때
        $(this).removeClass('active');
    } else {
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});
