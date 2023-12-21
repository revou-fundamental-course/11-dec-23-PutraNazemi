//Fungsi pada bagian navbar
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-items').classList.toggle('show');
});
//Akhir fungsi

//Fungsi pada bagian untuk welcoming background
const welcome = document.getElementById('welcome');
let imageIndex = 1;

function changeBackground() {
    welcome.style.backgroundImage = `url('img/bg${imageIndex}.jpg')`;
    imageIndex = (imageIndex % 3) + 1;
}

setInterval(changeBackground, 5000);
//Akhir fungsi

//Fungsi pada bagian untuk welcoming text
document.addEventListener('DOMContentLoaded', function () {
    var nameForm = document.getElementById('nameForm');

    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var nameInput = document.getElementById('name');
        var enteredName = nameInput.value.trim();

        if (enteredName !== '') {
            updateWelcomeHeading(enteredName);

            nameForm.style.display = 'none';
        }
    });

    function updateWelcomeHeading(name) {
        var welcomeHeading = document.getElementById('welcome-heading');
        welcomeHeading.textContent = 'Hi ' + name + ', Welcome to Website';
    }
});
//Akhir fungsi

//Fungsi untuk memperhalus gerakan klik navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});
//Akhir fungsi

//Fungsi untuk pesan
function submitForm(event) {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value;
    const contactBirthdate = document.getElementById('contactBirthdate').value;
    const contactGender = document.querySelector('input[name="contactGender"]:checked').value;
    const contactMessage = document.getElementById('contactMessage').value;

    const contactFormResult = document.getElementById('contactFormResult');
    contactFormResult.innerHTML = `
        <h3>Message Results for Us:</h3>
        <p><strong>Name:</strong> ${contactName}</p>
        <p><strong>Date of Birth:</strong> ${contactBirthdate}</p>
        <p><strong>Gender:</strong> ${contactGender}</p>
        <p><strong>Message:</strong> ${contactMessage}</p>
    `;
}
//Akhir fungsi




