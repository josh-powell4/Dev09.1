$(function(){ //shorthand for doc ready life
  
   //capture user's sign message & update pricing
  $('#userSignInput').on('keyup', function (e) {
    
    var inputLength = $(this).val().length;
    $('#tiles').text(inputLength);
    updatePrice(inputLength);   
 })
 
  //capture user's font choice + update pricing
 $('#userFontInput').on('click', function(e){
   
   // window.alert('firing?');
   
    var inputFont = $(this).is(':checked');
   
    updatePrice($('#userSignInput').val().length,
  inputFont);
 })

 $('#confirmOrder').on('click', function(e){
  event.preventDefault();
  //console.log('is my link firing?');
   
    var previewMsg = $('#userSignInput').val();
    previewMsg += '<a hre="#" id="cancelPreview">cancel</a>';
   
  $('#previewScreen').append(previewMsg);
  $('#previewScreen')
    .toggle()
    .animate({'right': '0px' }, -250);
                       
 })//closing tag to preview/confirm click event
  
  $('#cancelPreview').on('click', function(e){event.preventDefault();
  $('previewScreen').toggle();
                                              
 })

})//closing tag to my doc ready f/n

//updates pricing
function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 6;
  }

  if(fontUpgrade) {
    costPerTile = 5;
  }

  else {
    costPerTile = 6;
  }
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  if(signLength !=0) { shipping = 7;}
  else { shipping = 0;}
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('grandTotal').text('$'+grandTotal);
  
  return grandTotal;
  
}