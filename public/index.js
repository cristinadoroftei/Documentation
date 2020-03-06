
var userObj;

$(function() {
$.getJSON("data.json",function(data){
userObj = data;
homeClick()
});
})

function changeClass(){
    var navBar = document.getElementById('menu')
    var page = document.getElementById('content')
    navBar.classList.toggle('nav-closed')
    page.classList.toggle('page-closed')
}

function homeClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation"></div>');
    $( ".documentation" ).append( `${userObj.lessons[0].title.join('\n')}` );

}

function aboutClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( "<p>About Sentence</p>" );
}


