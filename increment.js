var tinyHorrorTotal = 0;
var buyTinyHorrorCost = 10;
var fudTotal = 0;
var foreboding = 100;
var placeHolderEnabled = 0;

$(document).ready(function(){

  $('#buyTinyHorror').on('click', function () {

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

  $('#sellFUD').on('click', function () {

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

  setInterval(additionItems,1000);

  function additionItems () {
    // var multiplierProduct = totalZortblorps * 2;
    // var totalProduct = multiplierProduct + multiplierProduct;
    fudTotal = fudTotal + tinyHorrorTotal;

    $( "#fudTotal" ).val(function (i, val) {
      return fudTotal;
    });

    if (tinyHorrorTotal >= 10 && placeHolderEnabled == 0) {
      $( "#newUnits" ).after('<div class="row mb-3"><div class="col-sm-3"><label for="placeholderTotal">Place Holder</label></div><div class="col-sm-5"><input type="text" value="0" id="placeHolderTotal" readonly></div><div class="col-sm-4"><button type="button" id="buyPlaceholder" class="btn btn-primary">Buy Placeholder</button></div></div>');
      placeHolderEnabled = 1;
    }

  }

});

