$(document).ready(function() {
  $("form#blankFlavors").submit(function(event){
    var flavors = ["iceCream1", "iceCream2", "iceCream3"];

  flavors.forEach(function(flavor) {
    var userInput = $("input#" + flavor).val();

    $("#result").append("<li>" + userInput + "</li>");
    console.log(flavor);
  });

  event.preventDefault();
  });
});
