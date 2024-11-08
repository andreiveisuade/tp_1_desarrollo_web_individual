document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const consulta = document.getElementById('consulta');

    form.addEventListener('submit', function (event) {
        let isValid = true;
        let errorMessage = '';

        // VALIDAR NOMBRE
        if (fullName.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, ingresa tu nombre completo.\n';
        }

        // VALIDAR EMAIL
        if (email.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, ingresa tu correo electrónico.\n';
        } else if (!validateEmail(email.value.trim())) {
            isValid = false;
            errorMessage += 'Por favor, ingresa un correo electrónico válido.\n';
        }

        // VALIDAR CONSULTA
        if (consulta.value.trim() === '') {
            isValid = false;
            errorMessage += 'Por favor, ingresa tu mensaje.\n';
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
