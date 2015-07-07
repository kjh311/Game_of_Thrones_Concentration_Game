
  console.log('activate framework!');

$( document ).ready(function() {
    // alert( "ready!" );

  var arr = ["jon", "jon2", "joff", "joff2", "cercei", "cercei2", "drogo", "drogo2", "selmy", "selmy2", "melisandre", "melisandre2", "dany", "dany2", "tyrion", "tyrion2", "sansa", "sansa2", "ned", "ned2", "jamie", "jamie2", "jorah", "jorah2"];


//function that shuffles the array
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

shuffle(arr);
// alert(arr);


$('#a').click(function(){
  $('#a').removeClass('back').addClass(arr[0]);
});

$('#b').click(function(){
  $('#b').removeClass('back').addClass(arr[1]);
});

$('#c').click(function(){
  $('#c').removeClass('back').addClass(arr[2]);
});

$('#d').click(function(){
  $('#d').removeClass('back').addClass(arr[3]);
});

$('#e').click(function(){
  $('#e').removeClass('back').addClass(arr[4]);
});

$('#f').click(function(){
  $('#f').removeClass('back').addClass(arr[5]);
});

$('#g').click(function(){
  $('#g').removeClass('back').addClass(arr[6]);
});

$('#h').click(function(){
  $('#h').removeClass('back').addClass(arr[7]);
});

$('#i').click(function(){
  $('#i').removeClass('back').addClass(arr[8]);
});

$('#j').click(function(){
  $('#j').removeClass('back').addClass(arr[9]);
});

$('#k').click(function(){
  $('#k').removeClass('back').addClass(arr[10]);
});

 $('#l').click(function(){
  $('#l').removeClass('back').addClass(arr[11]);
});

$('#m').click(function(){
  $('#m').removeClass('back').addClass(arr[12]);
});

$('#n').click(function(){
  $('#n').removeClass('back').addClass(arr[13]);
});

$('#o').click(function(){
  $('#o').removeClass('back').addClass(arr[14]);
});

$('#p').click(function(){
  $('#p').removeClass('back').addClass(arr[15]);
});

$('#q').click(function(){
  $('#q').removeClass('back').addClass(arr[16]);
});

$('#r').click(function(){
  $('#r').removeClass('back').addClass(arr[17]);
});

$('#s').click(function(){
  $('#s').removeClass('back').addClass(arr[18]);
});

$('#t').click(function(){
  $('#t').removeClass('back').addClass(arr[19]);
});

$('#u').click(function(){
  $('#u').removeClass('back').addClass(arr[20]);
});

$('#v').click(function(){
  $('#v').removeClass('back').addClass(arr[21]);
});

$('#w').click(function(){
  $('#w').removeClass('back').addClass(arr[22]);
});

$('#x').click(function(){
  $('#x').removeClass('back').addClass(arr[23]);
});

$('#player1_Score').html("0");
$('#player2_Score').html("0");






});


