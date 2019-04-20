var tinyHorrorTotal = 0;
var buyTinyHorrorCost = 10;
var yiglingTotal = 0;
var buyYiglingCost = 20;
var fudTotal = 0;
var foreboding = 100;
// toggle for 2nd unit - yiglings
var yiglingEnabled = 0;
// chaos stone initial value
var chaosValue = 0;

// @todo -- refactor these click items to pass variables / switch case
// in order to make this work for all buttons in a single function

$(document).on('click', '#buyTinyHorror', function () {

  $( "#foreboding" ).val(function (i, val) {

    if (foreboding > 0) {
      foreboding = foreboding - buyTinyHorrorCost;

      $( "#tinyHorrorTotal" ).val(function ( i, val ) {
        return ++tinyHorrorTotal;
      });

      return foreboding;
    }

    else {
      return foreboding;
    }

  });

});

$(document).on('click', '#buyYigling', function () {

  $( "#foreboding" ).val(function (i, val) {
    
    chaosStone();

    if (foreboding >= 20) {
      foreboding = foreboding - buyYiglingCost;
      $( "#yiglingTotal" ).val(function ( i, val ) {
        return ++yiglingTotal;
      });
        return foreboding;
      }
      else {
        return foreboding;
      }

  });

});

$(document).on('click', '#sellFUD', function () {

  $( "#foreboding" ).val(function (i, val) {

    if (fudTotal >= 100) {

      foreboding = foreboding + 10;

    $( "#fudTotal").val(function (i, val) {
      fudTotal = fudTotal - 100;
      return fudTotal;
    });

    return foreboding;

    }

    else {
      return foreboding;
    }
  });
});

$(document).ready(function(){

  setInterval(additionItems,1000);

  function additionItems () {

    // starting with yiglings, their earnings in multiples
    yiglingEarning = yiglingTotal * 10;

    // When we get more units, get sum of new totals from an array of values

    fudTotal = fudTotal + tinyHorrorTotal + yiglingEarning;
//    fudTotal = fudTotal + yiglingEarning;

    $( "#fudTotal" ).val(function (i, val) {
      return fudTotal;
    });

    if (tinyHorrorTotal >= 10 && yiglingEnabled == 0) {
      $( "#newUnits" ).after('<div class="row mb-3"><div class="col-sm-3"><label for="yiglingTotal">Yigling</label></div><div class="col-sm-5"><input type="text" value="0" id="yiglingTotal" readonly></div><div class="col-sm-4"><button type="button" id="buyYigling" class="btn btn-primary btn-sm">Buy Yigling</button></div></div>');
      yiglingEnabled = 1;
      $( ".fudInput").after('<div class="form-wrapper chaosStoneInput"><label for="chaosStones">Chaos Stones</label><input type="text" value="0" id="chaosStones" readonly></div>');
    }

  } // function additionItems end
  
}); // end document ready

// random function for chaos stones

function chaosStone() {

  var min=1;
  var max=100;
  var randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
  console.log(randomNumber);

  if (randomNumber >= 1 && randomNumber <= 5) {
    chaosValue = chaosValue + 1;
    $('#chaosStones').val(function (i, val) {
      return chaosValue;
    });
  }
}

// debugging / cheat console
// add 1000 foreboding on enter keypress (will be obfuscated after testing)

$(document).keypress(function (e) {
  $( "#foreboding" ).val(function (i, val) {
      if (e.which == 13) {
        foreboding = foreboding + 1000;
        return foreboding;
      }
  }); 
});

