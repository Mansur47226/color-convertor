function hexToRGB(hex) {
    hex = hex.replace('#', '');

    if (!isValidHexCode(hex)) return null;

    const components = getRGBComponents(hex);
    
    return toRGBObject(components);

};


function isValidHexCode(hex) {
    const stripped = hex.replace(/#/gi, '');

    return /^[0-9A-Fa-f]{6}$/i.test(stripped);
}

const getRGBComponents = (hex) => {
const red = hex.substring(0, 2);
const green = hex.substring(2, 4);
const blue = hex.substring(4, 6);

return { red, green, blue };
};

const hexToDecimal = (hexValue) => {
    return parseInt(hexValue, 16);
};

const toRGBObject = (components) => ({
    red: hexToDecimal(components.red),
    green: hexToDecimal(components.green),
    blue: hexToDecimal(components.blue),
});

function convertHexToRGB() {
    const hexInput = document.getElementById('hex').value;
    const rgbResult = hexToRGB(hexInput);

    if (rgbResult) {
        const rgbString = `rgb(${rgbResult.red}, ${rgbResult.green}, ${rgbResult.blue})`;
        document.getElementById('rgb').value = rgbString;
    } else {
        alert('Please enter a valid hex color code');
     }
    }   