function showAppointment() {
    // Retrieve appointment from sessionStorage
    const appointment = JSON.parse(sessionStorage.getItem('appointment'));

    if (appointment) {
        // Display appointment details
        const container = document.getElementById('appointmentDetailsContainer');
        container.innerHTML = `
            <div class="appointment">
                <p><strong>Name:</strong> ${appointment.name}</p>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Phone:</strong> ${appointment.phone}</p>
                <p><strong>Department:</strong> ${appointment.department}</p>
                <p><strong>Symptoms:</strong> ${appointment.symptoms}</p>
                <p><strong>Date:</strong> ${appointment.appointmentDate}</p>
                <p><strong>Time:</strong> ${appointment.appointmentTime}</p>
            </div>
        `;
    } else {
        document.getElementById('appointmentDetailsContainer').innerHTML = '<p>No appointment found.</p>';
    }
}

function thankYouMessage() {
    alert("Thank you for your appointment booking.");
    // Redirect to index page or do something else if needed
}

function downloadPDF() {
    // Get the appointment details from the DOM
    const appointment = document.getElementById('appointmentDetailsContainer').innerText;

    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set the font for the title (bold and centered)
    doc.setFont('helvetica', 'bold');  // Set font to Helvetica and style to bold
    doc.setFontSize(20);  // Set the font size for the title
    const title = 'Medical Appointment Confirmation';

    // Calculate title width to center it
    const titleWidth = doc.getTextWidth(title);
    const xPosition = (doc.internal.pageSize.width - titleWidth) / 2; // Center the title horizontally
    doc.text(title, xPosition, 20);  // Draw the title at the calculated position

    // Set font for the details
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);  // Set font size for the details
    doc.text(appointment, 10, 30);  // Appointment details start from 30px below the title

    // Save the generated PDF
    doc.save('appointment-details.pdf');
}

// Call the function to display the appointment when the page loads
window.onload = showAppointment;