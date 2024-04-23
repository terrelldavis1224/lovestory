


document.addEventListener('DOMContentLoaded', function() {
    var Lucky_button = document.getElementById('Lucky_button');
    var gender_button = document.getElementById('partner_type');
    var Lucky_button_hidden = document.getElementById('Feeling_Lucky_hidden');
    var gender_button_hidden = document.getElementById('partner_type_hidden');
    var Opposite_button = document.getElementById('Opposite_button');
    var Opposite_button_hidden = document.getElementById('Opposite_button_hidden');



    Opposite_button.onclick = function() {
        if (Opposite_button.value === 'Yes') {
            Opposite_button.value = 'No';
            Opposite_button_hidden.value = 'No';
            Opposite_button.style.backgroundColor = '#FED700';
        } else if (Opposite_button.value === 'No') {
            Opposite_button.value = 'Yes';
            Opposite_button_hidden.value = 'Yes';
            Opposite_button.style.backgroundColor = '#21b0fe';
        }
    }
    Opposite_button.addEventListener('mousedown', function() {
        this.style.animation = 'shrink 0.1s forwards';
    });

    Opposite_button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.0)'; // fix to make 1.1 to 1.0
        this.style.animation = 'grow 0.2s forwards';
    });

    Lucky_button.onclick = function() {
        if (Lucky_button.value === 'Feeling Lucky') {
            Lucky_button.value = 'Normal';
            Lucky_button_hidden.value = 'Normal';
            Lucky_button.style.backgroundColor = '#FED700';
        } else if (Lucky_button.value === 'Normal') {
            Lucky_button.value = 'Feeling Lucky';
            Lucky_button_hidden.value = 'Feeling Lucky';
            Lucky_button.style.backgroundColor = '#21b0fe';
        }
    }
    Lucky_button.addEventListener('mousedown', function() {
        this.style.animation = 'shrink 0.1s forwards';
    });

    Lucky_button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.0)'; // fix to make 1.1 to 1.0
        this.style.animation = 'grow 0.2s forwards';
    });
    
    gender_button.onclick = function() {
        if (gender_button.value === 'Romeo') {
            gender_button.value = 'Juliet';
            gender_button_hidden.value = 'Juliet';
            gender_button.style.backgroundColor = '#FED700';
        } else if (gender_button.value === 'Juliet') {
            gender_button.value = 'Romeo';
            gender_button_hidden.value = 'Romeo';
            gender_button.style.backgroundColor = '#21b0fe';
        }
    }
    gender_button.addEventListener('mousedown', function() {
        this.style.animation = 'shrink 0.1s forwards';
    });

    gender_button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.0)'; // fix to make 1.1 to 1.0
        this.style.animation = 'grow 0.2s forwards';
    });


});

