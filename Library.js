
document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").style.display = "block";
});

function validateMobileNumber(input) {
    const regex = /^\d{10}$/;
    if (!regex.test(input.value)) {
        input.setCustomValidity("Please enter a valid 10-digit mobile number.");
    } else {
        input.setCustomValidity("");
    }
}
