// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled"); 
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})




// //change port to test first time load

// var spectralKitten;

// var init = function(){	
// 	spectralKitten = new SpectralKitten();
	
// 	spectralKitten.loadCards(
// 		function(cards)
// 		{
// 			console.log("Cards Loaded : " + spectralKitten.cards.length);

// 			var source = $("#card-list-template").html();
// 			var template = Handlebars.compile(source);

// 			var context = {cards:spectralKitten.cards};
// 			var html = template(context);
// 			$("#card-list").html(html);

// 		}
// 	);
// }