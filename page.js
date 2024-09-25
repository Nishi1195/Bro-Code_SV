// JavaScript function to update the selected doctor card with detailed information
function selectDoctor(name, specialization, availability, description, imgSrc, hospital, education) {
    document.getElementById('selected-doctor-name').innerText = name;
    document.getElementById('selected-doctor-specialization').innerText = specialization;
    document.getElementById('selected-doctor-availability').innerText = availability;
    document.getElementById('selected-doctor-hospital').innerText = "Works at: " + hospital;
    document.getElementById('selected-doctor-education').innerText = "Education: " + education;
    document.getElementById('selected-doctor-description').innerText = description;
    document.getElementById('selected-doctor-img').src = imgSrc;
}