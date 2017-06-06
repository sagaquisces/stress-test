$(document).ready(function(){
  $("#stress_test").submit(function(event) {
    event.preventDefault();
    var inputtedWarningSignsLen = $('input:checkbox[name=warning_signs]:checked').length;
    var inputtedHealthSymptomsLen = $('input:checkbox[name=health_symptoms]:checked').length;
    var inputtedCopingMethodsLen = $('input:checkbox[name=coping_methods]:checked').length;

    $('#bad').hide();
    $('#great').hide();
    $('#ok').hide();

    var result = "";
    if (inputtedWarningSignsLen === 6 && inputtedHealthSymptomsLen >=4) {
      $("#bad").show();
    } else if (inputtedCopingMethodsLen >= 4 && inputtedHealthSymptomsLen <= 2 && inputtedWarningSignsLen <= 2) {
      $("#great").show();
    } else {
      $("#ok").show();
    }

  });
});

//var length1 = $('input:checkbox[name=warning_signs]:checked').length;
