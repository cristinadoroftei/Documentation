
var userObj;

$(function() {
$.getJSON("data.json",function(data){
userObj = data;
homeClick()

let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  dropdownContent.classList.toggle('dropdown-container-open')
  });
}
});
})

function changeClass(){
    let navBar = document.getElementById('menu')
    let page = document.getElementById('content')
    navBar.classList.toggle('nav-closed')
    page.classList.toggle('page-closed')
}

function homeClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation"></div>');
    $( ".documentation" ).append( `${userObj.whatIsJavascript.title.join('\n')}` );
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")

}

function aboutClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( "<p>About Sentence</p>" );
}


