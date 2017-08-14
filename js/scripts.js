$(document).ready(function() {
  var flavors = ["Mint", "Chocolate", "Vanilla", "Coffee", "Bubble Gum"];

  flavors.forEach(function(flavor) {
    $("#icecream").append("<li>" + flavor + "</li>");
  });
});
