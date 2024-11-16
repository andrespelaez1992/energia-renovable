function calcularAhorro() { var energiaNoRenovable = parseFloat(document.getElementById('energiaNoRenovable').value); 
    var energiaRenovable = parseFloat(document.getElementById('energiaRenovable').value); 
    var emisionesNoRenovable = parseFloat(document.getElementById('emisionesNoRenovable').value); 
    var emisionesRenovable = parseFloat(document.getElementById('emisionesRenovable').value);
     var ahorroEnergetico = energiaNoRenovable - energiaRenovable;
      var reduccionCO2 = (emisionesNoRenovable * energiaNoRenovable) - (emisionesRenovable * energiaRenovable); 
      document.getElementById('ahorroEnergetico').innerText = ahorroEnergetico.toFixed(2);
       document.getElementById('reduccionCO2').innerText = reduccionCO2.toFixed(2); }