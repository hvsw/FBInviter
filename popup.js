
function selectAll(showConfirmation){
  var checks = document.getElementsByName("checkableitems[]");
  for(var i in x) {
    elem = checks[i];
    if(elem.type == "checkbox" && !elem.disabled && !elem.checked)
      elem.click(); 
  }
  if(showConfirmation)
    alert("Seleção concluída!");
}