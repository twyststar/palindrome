

$(function(){
  $('#formOne').submit(function(event) {
    event.preventDefault();

    var user1 = $('input#play1').val();
    var user2 = user1.replace(/[ ]/g, "");
    var user3 = user2.split("");
    var user4 = user3.slice();
    user4.reverse();

    console.log();
    console.log();
    if (user3.toString() === user4.toString()) {
      alert("palindrome!");
    } else {
      alert("Nope!")
    }

  });
});
