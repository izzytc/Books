//our firebase reference

var data = new Firebase('https://tutorialbooks.firebaseio.com/');

//on change get data
data.on("value", function(snapshot) {
  context = snapshot.val();

var source = $("#home-template").html ();
var template = Handlebars.compile(source);
var html = template(context);

console.log(html);
$("#yield").html(html);

});


//Event method
//$=jquery select
$("#submit").click(function(){


var book = {
title: null,
author: null, 
genre: null

}

book.title = $("#title").val();
book.author = $("#author").val();
book.genre = $("#genre").val();


data.child("books").push(book);


});








