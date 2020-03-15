
var userObj;

$(function() {
$.getJSON("data.json",function(data){
userObj = data;
overviewClick()

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

function changePage(page){
    $(".documentation").remove()
    $(".page").append('<div class="documentation"></div>');
    $('.documentation').css('display', 'none').fadeIn(500);
    $( ".documentation" ).append( `${page}` );
    $('body').append(" <script src='prism.js'></script>")
}

function overviewClick(){
    changePage( `${userObj.whatIsJavascript.content.join('\n')}` );
}

function varLetConstClick(){
    changePage( `${userObj.varVsLetVsConst.content.join('\n')}` );
   
}

function objectsClick(){
    changePage( `${userObj.objects.content.join('\n')}` );
}

function arraysClick(){
    changePage( `${userObj.arrays.content.join('\n')}` );
}

function functionsClick() {
    changePage( `${userObj.functions.content.join('\n')}` );
    
}

function nodejsClick(){
    changePage( `${userObj.nodejs.content.join('\n')}` );
    
}

function toolsClick(){
    changePage( `${userObj.tools.content.join('\n')}` );
    
}

function commandsClick(){
    changePage( `${userObj.commands.content.join('\n')}` );
    
}

function modulesClick(){
    changePage( `${userObj.modules.content.join('\n')}` );
    
}

function restClick(){
    changePage( `${userObj.rest.content.join('\n')}` );
    
}

function jqueryClick(){
    changePage( `${userObj.jquery.content.join('\n')}` );
    
}


