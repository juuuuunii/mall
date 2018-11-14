$(".searchs .hand").click(function () {
	$(".search_catelist").stop().slideToggle(100);
});

//hover는 함수가 두 개 들어간다.
//첫 번째 함수는 마우스를 올렸을 때, 두 번째는 마우스를 뺐을 때
$(".menu > ul > li").hover(
	function () {
		$(".menu_modal").stop().fadeOut(0); //마우스를 올리기 전 modal을 안보이게 함
		$(this).children(".menu_modal").stop().fadeIn(100); //100=0.1초
	},
	function () {
		$(".menu_modal").stop().fadeOut(0);
	});

function goUrl(url){
	location.href = url;
}


/////////////////////카테고리0
$.ajax({
	url: "../json/cate0.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function(data){
		//이 곳에 적용되는 함수를 Callback 이라고 한다.
		for(i=0; i<data.result.length; i++){
			
			html  = '<ul>';
			html += '<li>';
			html += '<a href ="';
			html += data.result[i].link+'">';
			html += '<img src="';
			html += data.result[i].img+'">';
			html += '</a></li>';
			html +='<li>';
			html += data.result[i].title;
			html += '</li>';
			html += '</ul>';
			
			$("#modal0").append(html);
		}
	},
	error: function(xhr, status, error){
		//이 곳에 적용되는 함수를 Callback 이라고 한다.
		console.log(xhr, status, error);
	}
});


/*
var imgcate = [
	{img: "../img/main/site0.jpg", title: "Demo Defualt", link: "#"},
	{img: "../img/main/site1.jpg", title: "Demo Decor", link: "#"},
	{img: "../img/main/site2.jpg", title: "Demo Retail", link: "#"},
	{img: "../img/main/site3.jpg", title: "Demo Books", link: "#"},
	{img: "../img/main/site4.jpg", title: "Demo Fashion Color", link: "#"},
	{img: "../img/main/site5.jpg", title: "Demo Lingerie", link: "#"},
	{img: "../img/main/site6.jpg", title: "Demo Handmade", link: "#"},
	{img: "../img/main/site7.jpg", title: "Demo Fashion", link: "#"},
	{img: "../img/main/site8.jpg", title: "Demo Fashion Flat", link: "#"},
	{img: "../img/main/site9.jpg", title: "Demo Electronics", link: "#"}
];
//var myJSON = JSON.stringify(imgcate);
console.log(JSON.stringify(imgcate));
*/



/*
function modalMake0() {
	var html = '';
	var sites = [];
	for (var i = 0; i < 10; i++) {
		sites[i] = [];
		sites[i][2] = 'https://www.naver.com';
		sites[i][0] = '<li><img src="../img/main/site' + i + '.jpg" class="img" onclick="goUrl(\''+sites[i][2]+'\')"></li>'
	}
	sites[0][1] = '<li>Demo Default</li>';
	sites[1][1] = '<li>Demo Decor</li>'
	sites[2][1] = '<li>Demo Retail</li>';
	sites[3][1] = '<li>Demo Books</li>';
	sites[4][1] = '<li>Demo Fashion Color</li>';
	sites[5][1] = '<li>Demo Lingerie</li>';
	sites[6][1] = '<li>Demo Handmade</li>';
	sites[7][1] = '<li>Demo Fashion</li>';
	sites[8][1] = '<li>Demo Fashion Flat</li>';
	sites[9][1] = '<li>Demo Electronics</li>';

	for (i = 0; i < sites.length; i++) {
		html = '<ul>' + sites[i][0] + sites[i][1] + '</ul>'
		$("#modal0").append(html);
	}
}
modalMake0();

function goUrl(url) {
	location.href = url;
}
*/

/////////////////////카테고리 모달1
//jQuery.ajax(); 아래와 같은 함수
$.ajax({
	url: "../json/cate1.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function(data){
		//이 곳에 적용되는 함수를 Callback 이라고 한다.
		var cnt = data.result.length;
		var style = 'style="width:'+(100/cnt+'%')+';"';
		var html;
		for(var i=0; i<cnt; i++){
			//console.log(data.result[i].main.title);
			html = '<ul '+style+'>';
			html += '<li class="title">';
			html += '<a href="'+data.result[i].main.link+'">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip" style="background-color:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background-color:'+data.result[i].main.color+'"></div>'
			html += '</div>';
			html += '</li>';
			for(var j=0; j<data.result[i].sub.length; j++){
				//console.log(data.result[i].sub[j].title);
				html += '<li class="cont">';
				html += '<a href="'+data.result[i].sub[j].link+'">';
		    	html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip" style="background-color:'+data.result[i].sub[j].color+'">';
				html += '<div style="background-color:'+data.result[i].sub[j].color+'"></div>'
				html += data.result[i].sub[j].icon;
				html += '</div>';
				html += '</li>';
			}
			html += '</ul>'
			$("#modal1").append(html);
	    }
	},
	error: function(xhr, status, error){
		//이 곳에 적용되는 함수를 Callback 이라고 한다.
		console.log(xhr, status, error);
	}
});

/*
function modalMake1(){
	var wid = 100/cates.length + "%";
	for(var i=0; i<cates.length; i++){
		html = '<ul style="width:'+wid+'">'
		html += '<li class="title">';
		html += '<a href="'+cates[i].main.link+'">'+cates[i].main.title+'</a>'
		if(cates[i].main.icon !== ""){ //!== :빈 값이 아니라면
		html += '<div class="tooltip" style="background-color:'+cates[i].main.color+'">';html += cates[i].main.icon;
		html += '<div style="background-color:'+cates[i].main.color+'"></div>';
		html += '</div>';
		} 
		html += '</li>'
		for(var j=0; j<cates[i].sub.length; j++){
		   html += '<li class="cont">';
		   html += '<a href="'+cates[i].sub[j].link+'">'+cates[i].sub[j].title+'</a>'
		   if(cates[i].main.icon !== ""){
		   }
		   html += '<div class="tooltip" style="background-color:'+cates[i].sub[j].color+'">';
		   html += cates[i].sub[j].icon;
		   html += '<div  style="background-color:'+cates[i].sub[j].color+'"></div>';
		   html += '</div>'
		   html += '</li>'
     	}
		html += '</ul>'
		$("#modal1").append(html);
	}
}
modalMake1();
*/



/////////////////////카테고리 모달2
$.ajax({
	url: "../json/cate2.json",
	type: "get",
	dataType: "json",
	data:"",
	success: function(data){
		//console.log(data);
		var html;
		var blogs = data.result.blog;
		var posts = data.result.recent;
		//Blog 생성
		for(var i=0; i<blogs.length; i++){
			html = '<ul>'
			html += '<li class="title">';
			html += '<a href = "' + blogs[i].main.link + '">' + blogs[i].main.title+'</a>';
			if (blogs[i].main.icon != ""){
			  html += '<div class="tooltip" style="background-color:'+blogs[i].main.color+'">';
			  html += blogs[i].main.icon;
			  html += '<div style="background-color:'+blogs[i].main.color+'"></div>'
			  html += '</div>';
			}
			html += '</li>'
			for(var j=0; j<blogs[i].sub.length; j++){
				html += '<li class="sub">';
				html += '<a href="'+blogs[i].sub[j].link+'">'+blogs[i].sub[j].title+'</a>';
				if(blogs[i].sub[j].icon != ""){
				  html += '<div class="tooltip" style="background-color:'+blogs[i].sub[j].color+'">';
				  html += blogs[i].sub[j].icon;
				  html += '<div style="background-color:'+blogs[i].sub[j].color+'"></div>'
				  html += '</div>';
				}
				html += '</li>';
			}
			html += '</ul>'
			$("#modal2 > .blogs").append(html);
		}
		//recent 생성
		for(var i=0; i<posts.length; i++){
			html = '<ul>'
			html += '<li class="post clear" onclick="goPost(\''+posts[i].link+'\');">';
            html += '<img src="'+posts[i].img+'" class="img post_img hover">';
            html += '<div>';
            html += '<div class="post_title">'+posts[i].title+'</div>';
            html += '<span class="post_date">'+posts[i].date+'</html>';
            html += '<span class="post_cnt">'+posts[i].comment+'</span>';
            html += '<span class="post_comment">Commnet</span>';
            html += '</div>';
            html += '</li>';
			html += '</ul>'
			$("#modal2 > .recents").append(html);
		}

	},
	error: function(xhr, status, error){
		alert("통신이 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")
		// \: 특수문자 넣기 전에 삽입.
		// \n: 다음 줄(엔터)
		console.log(xhr, status, error);
    }
});
/*
<ul>
    <li class="title"><a href="#">BLOG TYPES</a></li>
    <li class="sub"><a href="#">Alternative</a></li>
    </ul>
<ul>
    <li class="title"><a href="#">SINGLE POSTS</a></li>
    <li class="sub"><a href="#">Post example #1</a></li>
</ul>

//  
<ul>
    <li class="post clear" onclick="goPost();">
    <img src="../img/main/blog-11-75x65.jpg" class="img post_img">
    <div>
        <div class="post_title">A companion for extra sleeping</div>
        <span class="post_date">July 23, 2016</span>
        <span class="post_cnt">1</span>
        <span class="post_comment">Comment</span>
    </div>
                    </li>
                  </ul>

*/

/////////////////////카테고리 모달3
$.ajax({
	url: "../json/cate3.json",
	type: "get",
	dataType: "json",
	data:"",
	success: function(data){
		//console.log(data);
		var cnt = data.result.pages.length;
		var cntSub = data.result.pages[i].sub.length;
		console.log(cntSub);
		var style = 'style="width:'+(100/cnt+'%')+';"';
		var html;
		for(var i=0; i<cnt; i++){
			html = '<ul '+style+'>';
			html += '<li class="pages_title">'
			html += '<a href="'+data.result.pages[i].link+'">';
			html += data.result.pages[i].main.title;
			html += '</a>';
			html += '<div class="tooltip" style="background-color:'+data.result.pages[i].main.color+'">';
			html += data.result.pages[i].main.icon;
			html += '<div style="background-color:'+data.result.pages[i].main.color+'"></div>'
			html += '</div>'
			html += '<ul class="pages_sub">';
			for(var j=0; j<data.result.pages[i].sub.length; j++){
				html += '<li>';
				html += '<a href="'+data.result.pages[i].sub[j].link+'">';
				html += data.result.pages[i].sub[j].title
				html += '</a>';
				html += '</li>';
			}
			html += '</ul>';
			html += '</li>';			
			html += '</ul>';
			$("#modal3").append(html);
		}

		/*
		<ul>
                  <li class="pages_title">
					<a>title</a>
                    <ul class="pages_sub">
                      <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
					  <li><a></a></li>
                    </ul>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
				</ul>
				 */

	},
	error: function(xhr, status, error){
		alert("통신이 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")
		// \: 특수문자 넣기 전에 삽입.
		// \n: 다음 줄(엔터)
		console.log(xhr, status, error);
    }
});




