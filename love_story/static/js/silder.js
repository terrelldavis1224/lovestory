document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('slider');
    var ageDisplay = document.getElementById('ageDisplay');

    function updateSliderBackground(value) {
        var x = (value - slider.min) / (slider.max - slider.min) * 100;
        var color = 'linear-gradient(90deg, #fe218b ' + x + '%, rgb(214, 214, 214) ' + x + '%)';
        slider.style.background = color;
    }

    slider.oninput = function () {
        ageDisplay.innerHTML = "Age:"+this.value;
        updateSliderBackground(this.value);
    };

    updateSliderBackground(slider.value);
});
