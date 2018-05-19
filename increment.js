var tinyHorrorTotal = 0;
var fudTotal = 0;
var foreboding = 100;

$(document).ready(function(){

  $('#buyTinyHorror').on('click', function () {

      $( "#foreboding").val(function (i, val) {

        if (foreboding > 0) {
          var buyTinyHorrorCost = 10;
          foreboding = foreboding - buyTinyHorrorCost;

          $( "#tinyHorrorTotal" ).val(function ( i, val ) {
            return ++tinyHorrorTotal;
          });

          return foreboding;
        }
   
    });

  });

  $('#sellFUD').on('click', function () {

    $( "#foreboding").val(function (i, val) {

      if (fudTotal >= 100) {

        foreboding = foreboding + 10;

        $( "fudTotal").val(function (i, val) {
          fudTotal = fudTotal - 100;
          return fudTotal;
        });

        return foreboding;

      }

    });
  
  });

  setInterval(additionItems,1000);

  function additionItems () {
    // var multiplierProduct = totalZortblorps * 2;
    // var totalProduct = multiplierProduct + multiplierProduct;
    fudTotal = fudTotal + tinyHorrorTotal;

    $( "#fudTotal" ).val(function (i, val) {
      return fudTotal;
    });

  }

});

