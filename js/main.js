// menu 섹션에 맞게 색상 변경
function scrollHandler() {
  // 브라우저 현재 스크롤 위치
  // console.log($(window).scrollTop());
  // about의 위쪽 좌표 위치
  // console.log($('.about').position().top);

  if($(window).scrollTop() >= $('.about').position().top) {
    $('.menu-right button').css('color', '#4a4a4a');

    // about 퍼센트 애니메이션 처리
    $('.skill').each(function() {
      let skill = $(this);
      let percentage = skill.find('.percentage').text();
      skill.find('.inner-bar').animate({width: percentage},1200);
    })
  } else {
    $('.menu-right button').css('color', '#fff');
  }

  // 각 섹션에 맞는 vertical-center를 애니메이션으로 나타내기 (현재 스크롤 위치가 그 섹션보다 아래에 있으면 동작)
  $('section').each(function() {
    if($(window).scrollTop() >= $(this).position().top) {
      $(this).find('.vertical-center').animate({top: '0', opacity: '1'},800);
    }
  })
}

$(window).on('scroll', scrollHandler);
// 처음 로딩 됐을때도 호출
scrollHandler();



// 섹션 이동
// about
$('#about-btn').on('click', function(e) {
  $('html, body').animate({
    scrollTop:$('.about').position().top
  },500);
});

// contact
$('#contact-btn').on('click', function(e) {
  $('html, body').animate({
    scrollTop:$('.contact').position().top
  },500);
});

