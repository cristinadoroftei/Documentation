
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

function overviewClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation"></div>');
    $('.documentation').css('display', 'none').fadeIn(500);
    $( ".documentation" ).append( `${userObj.whatIsJavascript.content.join('\n')}` );
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
}

function varLetConstClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.varVsLetVsConst.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function objectsClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.objects.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function arraysClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.arrays.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function functionsClick() {
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.functions.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function nodejsClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.nodejs.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function toolsClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.tools.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function commandsClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.commands.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function modulesClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.modules.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}

function restClick(){
    $(".documentation").remove()
    $(".page").append('<div class="documentation" ></div>');
    $(".documentation").append( `${userObj.rest.content.join('\n')}` );
    $('.documentation').css('display', 'none').fadeIn(500);
    $(".info-text").css("font-size", "1.3em")
    $(".info-text").css("margin", "0.3em")
    $('body').append(" <script src='prism.js'></script>")
}


