
$(document).ready(function(){

  //hides dropdown content
  $(".jobs-size-chart").hide();
  
  //unhides first option content
  $("#option1").show();
  
  //listen to dropdown for change
  $("#jobs-size-select").change(function(){
    //rehide content on change
    $('.jobs-size-chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });
  
});