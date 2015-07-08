
  console.log('activate framework!');

//jQuery code gets run inside
$( document ).ready(function() {

  //fade in
  $('*').fadeTo(0, 0).fadeTo(1500, 1);

  //array that holds the various classes
  var arr = ["jon", "jon2", "joff", "joff2", "cercei", "cercei2", "drogo", "drogo2", "selmy", "selmy2", "melisandre", "melisandre2", "dany", "dany2", "tyrion", "tyrion2", "sansa", "sansa2", "ned", "ned2", "jamie", "jamie2", "jorah", "jorah2"];

  //empty array that the 2 flipped cards get added to temporarily
  var memory_value = [];

  var tiles_flipped = 0;

  //start off with player 1
  var current_player = "player1";

  var player1_Score = 0;
  var player2_Score = 0;

  //start the game with the ability to click on cards
  var game_on = "true";


  //randomize background image
  function getRandom() {
  var random = Math.random();
  if (random < 0.2){
    $('body').addClass('background1');
  }else if (random < 0.4){
    $('body').addClass('background2');
  }else if (random < 0.6){
    $('body').addClass('background3');
  }else if (random < 0.8){
    $('body').addClass('background4');
  }else {
    $('body').addClass('background5');
  }
}
getRandom();

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

//don't want to click on same card twice
var add_to_tiles_flipped = function(){
  if (memory_value[0] === memory_value[1]){
    memory_value.pop();
    return;
  }else {
    tiles_flipped ++;
  }
}

//changes player turn
function changeTurn() {
  if (current_player == 'player1') {
    //player changes color
    $('#player1 p').removeClass('player1Current');
    current_player = 'player2';
  } else {
    $('#player2 p').removeClass('player2Current');
     current_player = 'player1';
  }
}

//checks whose turn it is
var check_current_player = function(){


  if (current_player === "player1"){
    $('#player1 p').addClass('player1Current');

    //border of card changes depending on player
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

//turns classes of player 1 on
check_current_player();


//checks if there's a winner
var check_if_match = function(){
  if (tiles_flipped === 1){
    return;
  } else if (tiles_flipped === 2){

    //checks to see if two cards match
    //I'm sure there's some way to make this shorter somehow
      if (memory_value[0].hasClass('jon') && memory_value[1].hasClass('jon2') || memory_value[0].hasClass('jon2') && memory_value[1].hasClass('jon') || memory_value[0].hasClass('joff') && memory_value[1].hasClass('joff2') || memory_value[0].hasClass('joff2') && memory_value[1].hasClass('joff') || memory_value[0].hasClass('cercei') && memory_value[1].hasClass('cercei2') || memory_value[0].hasClass('cercei2') && memory_value[1].hasClass('cercei') || memory_value[0].hasClass('drogo') && memory_value[1].hasClass('drogo2') || memory_value[0].hasClass('drogo2') && memory_value[1].hasClass('drogo') || memory_value[0].hasClass('selmy') && memory_value[1].hasClass('selmy2') || memory_value[0].hasClass('selmy2') && memory_value[1].hasClass('selmy') || memory_value[0].hasClass('melisandre') && memory_value[1].hasClass('melisandre2') || memory_value[0].hasClass('melisandre2') && memory_value[1].hasClass('melisandre') || memory_value[0].hasClass('dany') && memory_value[1].hasClass('dany2') || memory_value[0].hasClass('dany2') && memory_value[1].hasClass('dany') || memory_value[0].hasClass('tyrion') && memory_value[1].hasClass('tyrion2') || memory_value[0].hasClass('tyrion2') && memory_value[1].hasClass('tyrion') || memory_value[0].hasClass('sansa') && memory_value[1].hasClass('sansa2') || memory_value[0].hasClass('sansa2') && memory_value[1].hasClass('sansa') || memory_value[0].hasClass('ned') && memory_value[1].hasClass('ned2') || memory_value[0].hasClass('ned2') && memory_value[1].hasClass('ned') || memory_value[0].hasClass('jamie') && memory_value[1].hasClass('jamie2') || memory_value[0].hasClass('jamie2') && memory_value[1].hasClass('jamie') || memory_value[0].hasClass('jorah') && memory_value[1].hasClass('jorah2') || (memory_value[0].hasClass('jorah2') && memory_value[1].hasClass('jorah')))  {

      //turns off the ability to click on cards while two mismatches are turned upright
      game_on = "false";

      //add points to player score
      if (current_player === "player1"){
        $('#player1_Score').html(player1_Score += 1);

        //Determines Winner after board is cleared.,
        if(player1_Score + player2_Score === 12 && player1_Score > player2_Score){

          //reveals winner and play again button
          $('#play_again').removeClass("hidden");
          $('#winner').html("Player 1!!!");
          $('#play_again').fadeOut(0);
          $('#play_again').fadeTo(1000, 1);

        }else if(player1_Score + player2_Score === 12 && player1_Score === player2_Score){
          // alert("Tie!!");

          $('#play_again').removeClass("hidden");
          $('#winner').html("Tie!!");
          $('#play_again').fadeOut(0);
          $('#play_again').fadeTo(1000, 1);
        }

      } else {
        $('#player2_Score').html(player2_Score += 1);

        if(player1_Score + player2_Score === 12 && player2_Score > player1_Score){
          // alert("player 2 wins!!");


          $('#play_again').removeClass("hidden");
          $('#winner').html("Player 2!!!");
          $('#play_again').fadeOut(0);
          $('#play_again').fadeTo(1000, 1);
        }else if(player1_Score + player2_Score === 12 && player1_Score === player2_Score){
          // alert("Tie!!");

          $('#play_again').removeClass("hidden");
          $('#winner').html("Tie!!");
          $('#play_again').fadeOut(0);
          $('#play_again').fadeTo(1000, 1);
        }

      }

      //fades out matches
      memory_value[0].fadeTo(1000, 0);
      memory_value[1].fadeTo(1000, 0);

      //the 2 cards turned over get added to array, then array is erased
      var reset_mem_value = function(){
        memory_value = [];
        game_on = "true";
        console.log(game_on);
      }
      //after cards fade out, can click on new cards, but not before
      setTimeout(reset_mem_value, 1100);

      //number of cards that can be flipped gets reset
      tiles_flipped = 0;

      //if no match
    }else {
      changeTurn();
      game_on = "false";
      console.log(game_on);

      //flip mismatches back over after a second
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


//click functions for each card
$('#a').click(function(){
  //can't click on card if false
  if (game_on === "false"){
    return;
  }else{
    //changes back of card to picture determined from shuffled array
    $('#a').removeClass('back').addClass(arr[0]);
    memory_value.push($('#a'));
    tiles_flipped ++;
    check_if_match();
    check_current_player();


    console.log(memory_value[0]);
    console.log(tiles_flipped);

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

$('#button').click(function(){

//fade out
$('*').fadeTo(1000, 0);

var fade_out = function(){
  //reload page
location.reload();
}
setTimeout(fade_out, 1000);
});
});


