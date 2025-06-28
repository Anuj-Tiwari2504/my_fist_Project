document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const symptoms = document.getElementById('symptoms').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Store in sessionStorage
    const appointmentData = {
        name,
        email,
        phone,
        department,
        symptoms,
        appointmentDate,
        appointmentTime,
        gender,
    };

    sessionStorage.setItem('appointment', JSON.stringify(appointmentData));
    alert('Appointment successfully booked!');
});