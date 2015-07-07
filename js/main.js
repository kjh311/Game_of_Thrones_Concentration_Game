
  console.log('activate framework!');

$( document ).ready(function() {
    // alert( "ready!" );

  var arr = ["jon", "jon", "joff", "joff", "cercei", "cercei", "drogo", "drogo", "selmy", "selmy", "melisandre", "melisandre", "dany", "dany", "tyrion", "tyrion", "sansa", "sansa", "ned", "ned", "jamie", "jamie", "jorah", "jorah"];


  var memory_value = [];
  // var memory_tile_ids = [];
  var tiles_flipped = 0;

  var current_player = "player1";

  var starting_score = 0;

  var player1_Score = $('#player1_Score').html(0);
  var player2_Score = $('#player2_Score').html(0);


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
      alert('MATCH!!!!');
      //add point to current player's score

      if (current_player === "player1"){
        $('#player1_Score').html();
      } else {
        $('#player2_Score').html();
      }

      memory_value[0].fadeTo(1000, 0);
      memory_value[1].fadeTo(1000, 0);

      var reset_mem_value = function(){
        memory_value = [];
      }
      setTimeout(reset_mem_value, 1100);

      tiles_flipped = 0;
      // alert(tiles_flipped);
      // alert(memory_value[0]);

    }else {
      //change player's turn
      changeTurn();
      //turn cards back over again

    var flip_cards = function(){
      memory_value[0].addClass('back');
      memory_value[1].addClass('back');
      memory_value = [];
    };
    setTimeout(flip_cards, 1000);
      tiles_flipped = 0;


    }
  }
}



$('#a').click(function(){
  $('#a').removeClass('back').addClass(arr[0]);
  memory_value.push($('#a'));
   // alert(memory_value[0]);
  tiles_flipped ++;
  check_if_match();
  console.log(tiles_flipped);
  console.log(memory_value[0]);
  console.log(memory_value[1]);
  check_current_player();
});

$('#b').click(function(){
  $('#b').removeClass('back').addClass(arr[1]);
  memory_value.push($('#b'));
  tiles_flipped ++;
  console.log(tiles_flipped);
  console.log(memory_value[0]);
  console.log(memory_value[1]);
  check_if_match();
  check_current_player();
});

$('#c').click(function(){
  $('#c').removeClass('back').addClass(arr[2]);
  memory_value.push($('#c'));
  tiles_flipped ++;
  check_if_match();

  console.log(tiles_flipped);
  console.log(memory_value[0]);
  console.log(memory_value[1]);

  check_current_player();
});

$('#d').click(function(){
  $('#d').removeClass('back').addClass(arr[3]);
  memory_value.push($('#d'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#e').click(function(){
  $('#e').removeClass('back').addClass(arr[4]);
  memory_value.push($('#e'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#f').click(function(){
  $('#f').removeClass('back').addClass(arr[5]);
  memory_value.push($('#f'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#g').click(function(){
  $('#g').removeClass('back').addClass(arr[6]);
  memory_value.push($('#g'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#h').click(function(){
  $('#h').removeClass('back').addClass(arr[7]);
  memory_value.push($('#h'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#i').click(function(){
  $('#i').removeClass('back').addClass(arr[8]);
  memory_value.push($('#i'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#j').click(function(){
  $('#j').removeClass('back').addClass(arr[9]);
  memory_value.push($('#j'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#k').click(function(){
  $('#k').removeClass('back').addClass(arr[10]);
  memory_value.push($('#k'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

 $('#l').click(function(){
  $('#l').removeClass('back').addClass(arr[11]);
  memory_value.push($('#l'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#m').click(function(){
  $('#m').removeClass('back').addClass(arr[12]);
  memory_value.push($('#m'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#n').click(function(){
  $('#n').removeClass('back').addClass(arr[13]);
  memory_value.push($('#n'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#o').click(function(){
  $('#o').removeClass('back').addClass(arr[14]);
  memory_value.push($('#o'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#p').click(function(){
  $('#p').removeClass('back').addClass(arr[15]);
  memory_value.push($('#p'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#q').click(function(){
  $('#q').removeClass('back').addClass(arr[16]);
  memory_value.push($('#q'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#r').click(function(){
  $('#r').removeClass('back').addClass(arr[17]);
  memory_value.push($('#r'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#s').click(function(){
  $('#s').removeClass('back').addClass(arr[18]);
  memory_value.push($('#s'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#t').click(function(){
  $('#t').removeClass('back').addClass(arr[19]);
  memory_value.push($('#t'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#u').click(function(){
  $('#u').removeClass('back').addClass(arr[20]);
  memory_value.push($('#u'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#v').click(function(){
  $('#v').removeClass('back').addClass(arr[21]);
  memory_value.push($('#v'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#w').click(function(){
  $('#w').removeClass('back').addClass(arr[22]);
  memory_value.push($('#w'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});

$('#x').click(function(){
  $('#x').removeClass('back').addClass(arr[23]);
  memory_value.push($('#x'));
  tiles_flipped ++;
  check_if_match();
  check_current_player();
});





// if ( $(this).hasClass('jon') ){
//     alert('We found Jon!');
//   }


});


