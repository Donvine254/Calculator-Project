//removes the last value in the display
//replaced the function with slice function alone
/*
function backspace() {
  var displayValue = document.getElementById("display").value;
  if (displayValue.length > 0) {
    document.getElementById("display").value = displayValue.slice(0, -1);
  }
}*/
//add brackets function
  function addBrackets() {
    var displayValue = calc.display.value;
    var openBracketCount = (displayValue.match(/\(/g) || []).length;
    var closeBracketCount = (displayValue.match(/\)/g) || []).length;
  
    if (openBracketCount === closeBracketCount) {
      calc.display.value += "(";
    } else {
      calc.display.value += ")";
    }
  }
 

//add percent function; the function does not calculate anything when called
/*
function addPercent() {
    var displayValue = calc.display.value.trim();
    if (displayValue === "") {
      calc.display.value = "0%";
    } else if (displayValue.match(/^(0|[1-9][0-9]*)(\.[0-9]+)?%?$/)) {
      if (displayValue.endsWith("%")) {
        calc.display.value = parseFloat(displayValue) / 100;
      }
       else {
        calc.display.value = parseFloat(displayValue);
      }
      calc.display.value += "%";
    } else {
      alert("Invalid format");
    }
  }

/*
function addPercent() {
    var displayValue = calc.display.value.trim();
    if (displayValue === "") {
      calc.display.value = "0%";
    } else if (displayValue.match(/^(0|[1-9][0-9]*)(\.[0-9]+)?%?$/)) {
      if (displayValue.endsWith("%")) {
        var value = parseFloat(displayValue.replace(/%/g, "")) / 100;
        calc.display.value = value.toFixed(2);
      } else {
        calc.display.value = parseFloat(displayValue);
        calc.display.value /= 100;
        calc.display.value = calc.display.value.toFixed(2);
      }
      calc.display.value += "%";
    } else {
      alert("Invalid format");
    }
  }
*/
  
  //addDot function. This function adds a dot to the display.
function addDot() {
  var display = document.forms['calc']['display'];
  var lastChar = display.value;
  if (lastChar.match(/[+\-*/]/)) {
    // If the last character is an operator, add a dot
    display.value += '.';
  } else if (display.value.indexOf('.') === -1) {
    // If the display doesn't already contain a dot, add one
    display.value += '.';
  }
}
//another percentage function. This function only evaluates the percentage but does not add a percentage to the display
function addPercentage() {
    var displayValue = calc.display.value.trim();
    if (displayValue === "") {
      calc.display.value = "0%";
    } else if (displayValue.match(/^(0|[1-9][0-9]*)(\.[0-9]+)?%?$/)) {
      if (displayValue.endsWith("%")) {
        var value = parseFloat(displayValue.replace(/%/g, "")) / 100;
        calc.display.value = value;
      } else {
        calc.display.value = parseFloat(displayValue);
        calc.display.value /= 100;
      }
      calc.display.value += "%";
    } else {
      alert("Invalid format");
    }
  }