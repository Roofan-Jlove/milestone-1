var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    displayResume();
});
function displayResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var startEdu = document.getElementById('start').value;
    var endEdu = document.getElementById('end').value;
    var position = document.getElementById('position').value;
    var company = document.getElementById('company').value;
    var startWork = document.getElementById('start').value;
    var endWork = document.getElementById('end').value;
    var description = document.getElementById('description').value;
    var skill = document.getElementById('skill').value;
    var skillLevel = document.getElementById('skill-level').value;
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institute:</strong> ").concat(institute, "</p>\n            <p><strong>Start Date:</strong> ").concat(startEdu, "</p>\n            <p><strong>End Date:</strong> ").concat(endEdu, "</p>\n            <h3>Experience</h3>\n            <p><strong>Position:</strong> ").concat(position, "</p>\n            <p><strong>Company:</strong> ").concat(company, "</p>\n            <p><strong>Start Date:</strong> ").concat(startWork, "</p>\n            <p><strong>End Date:</strong> ").concat(endWork, "</p>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n            <h3>Skills</h3>\n            <p><strong>Skill:</strong> ").concat(skill, "</p>\n            <p><strong>Skill Level:</strong> ").concat(skillLevel, "</p>\n        ");
        resumeOutput.style.display = 'block';
    }
}
