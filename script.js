const convertBtn = document.getElementById('convert-btn');
const inputValue = document.getElementById('input-value');
const unitFrom = document.getElementById('unit-from');
const unitTo = document.getElementById('unit-to');
const resultDiv = document.getElementById('result');

function convertUnits() {
  const value = parseFloat(inputValue.value);
  const fromUnit = unitFrom.value;
  const toUnit = unitTo.value;
  let convertedValue;

  if (isNaN(value)) {
    resultDiv.innerText = 'Please enter a valid value.';
    return;
  }

  if (fromUnit === toUnit) {
    resultDiv.innerText = 'Units are the same. No conversion needed.';
    return;
  }

  switch (fromUnit) {
    case 'cm':
      convertedValue = value * getConversionFactor(toUnit, 'cm');
      break;
    case 'inch':
      convertedValue = value * getConversionFactor(toUnit, 'inch');
      break;
    case 'meter':
      convertedValue = value * getConversionFactor(toUnit, 'meter');
      break;
    case 'foot':
      convertedValue = value * getConversionFactor(toUnit, 'foot');
      break;
    default:
      resultDiv.innerText = 'Invalid units selected.';
      return;
  }

  resultDiv.innerText = `${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
}

function getConversionFactor(toUnit, fromUnit) {
  const conversionFactors = {
    cm: {
      inch: 0.3937,
      meter: 0.01,
      foot: 0.03281,
    },
    inch: {
      cm: 2.54,
      meter: 0.0254,
      foot: 0.08333,
    },
    meter: {
      cm: 100,
      inch: 39.37,
      foot: 3.2808,
    },
    foot: {
      cm: 30.48,
      inch: 12,
      meter: 0.3048,
    },
  };

  return conversionFactors[fromUnit][toUnit];
}

// Event listener
convertBtn.addEventListener('click', convertUnits);
