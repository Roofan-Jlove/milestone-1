document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();
    displayResume();
});

function displayResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const startEdu = (document.getElementById('start') as HTMLInputElement).value;
    const endEdu = (document.getElementById('end') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const startWork = (document.getElementById('start') as HTMLInputElement).value;
    const endWork = (document.getElementById('end') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;
    const skillLevel = (document.getElementById('skill-level') as HTMLSelectElement).value;

    const resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institute:</strong> ${institute}</p>
            <p><strong>Start Date:</strong> ${startEdu}</p>
            <p><strong>End Date:</strong> ${endEdu}</p>
            <h3>Experience</h3>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Start Date:</strong> ${startWork}</p>
            <p><strong>End Date:</strong> ${endWork}</p>
            <p><strong>Description:</strong> ${description}</p>
            <h3>Skills</h3>
            <p><strong>Skill:</strong> ${skill}</p>
            <p><strong>Skill Level:</strong> ${skillLevel}</p>
        `;
        resumeOutput.style.display = 'block';
    }
}
function loadImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('profileImage') as HTMLImageElement;
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

