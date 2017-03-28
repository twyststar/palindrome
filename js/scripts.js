

$(function(){
  $('#formOne').submit(function(event) {
    event.preventDefault();

    var user1 = parseInt($('input#play1').val());
    var user2 = parseInt($('input#play2').val());

    var numberOfTimes = (user2 / user1);

    console.log(numberOfTimes);
    // console.log(user2);
    if (numberOfTimes <= 0) {
      alert("This will not compute.");
    }

    if (isNaN(user1) || isNaN(user2))  {
        alert('great!');}

    var total = [];



    if ((user1 > 0 ) && (user2 > 0)) {
      for (var index = user1; index <= user2; index += user1 ) {
        total.push(index);
      }
    } else if ((user1 < 0 ) && (user2 < 0)) {
      for (var index = user1; index >= user2; index += user1 ) {
        total.push(index);
      }
    }
    alert(total);
  });
});
