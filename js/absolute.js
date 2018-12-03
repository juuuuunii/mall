/*
$(".wrap").each(function() {
	$(this).imagesLoaded().done(function(obj) {
		console.log(obj.elements[0]);
		var hei = $(".wrap").find(".box").height();
		$(".wrap").height(hei);
		//현재 absolute로 떠있는 box의 높이를 가져와서 .wrap에 넣는다.
	})	
})
*/

//자동 높이 계산 함수
(function autoHeight() {
	$(".hei-wrap").imagesLoaded().done(heiCalc);
	//.hei-wrap에 있는 모든 이미지가 로드되면 heiCalc를 실행하여라.
	$(window).resize(heiCalc);
	//widdow의 사이즈가 resize되면 heiCalc를 실행하여라.
	function heiCalc(parent, me) {
		$(".hei-wrap").each(function() {
			$(this).height($(".hei-elem").height());			
			//현재 absolute로 떠있는 .hei-elem의 높이를 가져와서 .hei-wrap에 넣는다.
		});		
	}
})();