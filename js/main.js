
  console.log('activate framework!');

$( document ).ready(function() {
    // alert( "ready!" );

  var arr = ["jon", "jon", "joff", "joff", "cercei", "cercei", "drogo", "drogo", "selmy", "selmy", "melisandre", "melisandre", "dany", "dany", "tyrion", "tyrion", "sansa", "sansa", "ned", "ned", "jamie", "jamie", "jorah", "jorah"];


  var memory_value = [];
  // var memory_tile_ids = [];
  var tiles_flipped = 0;

  var current_player = "player1";

  var player1_Score = 0;
  var player2_Score = 0;

  //start the game with the ability to click
  var game_on = "true";


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

// var is_game_on = function(){
//   if (game_on === "false"){
//     re
//   }
// }



function changeTurn() {
  if (current_player == 'player1') {
    $('#player1 p').removeClass('player1Current');
    current_player = 'player2';
  } else {
    $('#player2 p').removeClass('player2Current');
     current_player = 'player1';
  }
}


var check_current_player = function(){
  if (current_player === "player1"){
    $('#player1 p').addClass('player1Current');
    //add hover class to each card

$(".square").hover(function() {
    $(this).removeClass("player2_current");
});

    $(".square").hover(function() {
    $(this).addClass("player1_current");
}, function() {
    $(this).removeClass("player1_current");
});


  }else if (current_player === "player2"){
     $('#player2 p').addClass('player2Current');
     // $('#player2 p').grow( {duration : 2000, pulses : 3});

     $(".square").hover(function() {
    $(this).removeClass("player1_current");
  });

     $(".square").hover(function() {
    $(this).addClass("player2_current");
  }, function() {
    $(this).removeClass("player2_current");
  });


  }
}

check_current_player();



var check_if_match = function(){
  if (tiles_flipped === 1){
    //keep card turned upright
    return;
  } else if (tiles_flipped === 2){
    // if (memory_value[0].hasClass($(this)) === memory_value[1].hasClass($(this))){
      if (memory_value[0].hasClass('jon') && memory_value[1].hasClass('jon') || memory_value[0].hasClass('joff') && memory_value[1].hasClass('joff') || memory_value[0].hasClass('cercei') && memory_value[1].hasClass('cercei') || memory_value[0].hasClass('drogo') && memory_value[1].hasClass('drogo') || memory_value[0].hasClass('selmy') && memory_value[1].hasClass('selmy') || memory_value[0].hasClass('melisandre') && memory_value[1].hasClass('melisandre') || memory_value[0].hasClass('dany') && memory_value[1].hasClass('dany') || memory_value[0].hasClass('tyrion') && memory_value[1].hasClass('tyrion') || memory_value[0].hasClass('sansa') && memory_value[1].hasClass('sansa') || memory_value[0].hasClass('ned') && memory_value[1].hasClass('ned') || memory_value[0].hasClass('jamie') && memory_value[1].hasClass('jamie') || memory_value[0].hasClass('jorah') && memory_value[1].hasClass('jorah'))  {
      // alert('MATCH!!!!');

      game_on = "false";
      console.log(game_on);

      if (current_player === "player1"){
        $('#player1_Score').html(player1_Score += 1);

      } else {
        $('#player2_Score').html(player2_Score += 1);

      }

      memory_value[0].fadeTo(1000, 0);
      memory_value[1].fadeTo(1000, 0);

      var reset_mem_value = function(){
        memory_value = [];
        game_on = "true";
        console.log(game_on);
      }
      setTimeout(reset_mem_value, 1100);

      tiles_flipped = 0;
      // alert(tiles_flipped);
      // alert(memory_value[0]);

    }else {
      //change player's turn
      changeTurn();

      game_on = "false";
      console.log(game_on);

      //turn cards back over again

    var flip_cards = function(){
      memory_value[0].addClass('back');
      memory_value[1].addClass('back');
      memory_value = [];
      game_on = "true";
      console.log(game_on);
    };
    setTimeout(flip_cards, 1000);
      tiles_flipped = 0;


    }
  }
}



$('#a').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#a').removeClass('back').addClass(arr[0]);
    memory_value.push($('#a'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
    $('#a').animate({height: '10px'}, "slow");
  }
});

$('#b').click(function(){
  if (game_on === "false"){
    return;
  }else{
  $('#b').removeClass('back').addClass(arr[1]);
    memory_value.push($('#b'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#c').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#c').removeClass('back').addClass(arr[2]);
    memory_value.push($('#c'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#d').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#d').removeClass('back').addClass(arr[3]);
    memory_value.push($('#d'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#e').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#e').removeClass('back').addClass(arr[4]);
    memory_value.push($('#e'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#f').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#f').removeClass('back').addClass(arr[5]);
    memory_value.push($('#f'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#g').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#g').removeClass('back').addClass(arr[6]);
    memory_value.push($('#g'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#h').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#h').removeClass('back').addClass(arr[7]);
    memory_value.push($('#h'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#i').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#i').removeClass('back').addClass(arr[8]);
    memory_value.push($('#i'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#j').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#j').removeClass('back').addClass(arr[9]);
    memory_value.push($('#j'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#k').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#k').removeClass('back').addClass(arr[10]);
    memory_value.push($('#k'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

 $('#l').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#l').removeClass('back').addClass(arr[11]);
    memory_value.push($('#l'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#m').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#m').removeClass('back').addClass(arr[12]);
    memory_value.push($('#m'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#n').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#n').removeClass('back').addClass(arr[13]);
    memory_value.push($('#n'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#o').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#o').removeClass('back').addClass(arr[14]);
    memory_value.push($('#o'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#p').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#p').removeClass('back').addClass(arr[15]);
    memory_value.push($('#p'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#q').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#q').removeClass('back').addClass(arr[16]);
    memory_value.push($('#q'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#r').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#r').removeClass('back').addClass(arr[17]);
    memory_value.push($('#r'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#s').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#s').removeClass('back').addClass(arr[18]);
    memory_value.push($('#s'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#t').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#t').removeClass('back').addClass(arr[19]);
    memory_value.push($('#t'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#u').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#u').removeClass('back').addClass(arr[20]);
    memory_value.push($('#u'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#v').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#v').removeClass('back').addClass(arr[21]);
    memory_value.push($('#v'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#w').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#w').removeClass('back').addClass(arr[22]);
    memory_value.push($('#w'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});

$('#x').click(function(){
  if (game_on === "false"){
    return;
  }else{
    $('#x').removeClass('back').addClass(arr[23]);
    memory_value.push($('#x'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();
  }
});





// if ( $(this).hasClass('jon') ){
//     alert('We found Jon!');
//   }


});


