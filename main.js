const quality = document.getElementById('quality');
const riskLevel = document.getElementById('risk-level');
const airInput = document.getElementById('air');
const span = document.getElementById('no');

const checkAirQuality = () => {
    if (airInput.value >= 0 && airInput.value <= 50) {
        quality.innerHTML = 'Level of health concern: Good ';
        riskLevel.innerHTML = 'Level of health effect: Little or no risk';
        document.body.style.backgroundColor = 'green';
        span.innerHTML = airInput.value;
    } else if (airInput.value > 50 && airInput.value <= 100) {
        quality.innerHTML = 'Level of health concern: Moderate ';
        riskLevel.innerHTML = 'Level of health effect: Acceptable quality';
        document.body.style.backgroundColor = 'yellow';
        span.innerHTML = airInput.value;
    } else {
        quality.innerHTML =
            'Level of health concern: Unhealthy for sensitive groups ';
        riskLevel.innerHTML =
            'Level of health effect: Generable publics not likely affected';
        document.body.style.backgroundColor = 'orange';
        span.innerHTML = airInput.value;
    }

    console.log(airInput.value);
};
