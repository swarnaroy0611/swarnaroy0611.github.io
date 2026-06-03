fetch("profile.json")
.then(response => response.json())
.then(data => {

document.getElementById("app").innerHTML = `

<section class="hero">
    <h1>${data.name}</h1>

    <h3>${data.title}</h3>

    <p>${data.summary}</p>
</section>

<section class="section">
    <h2>Skills</h2>

    <div class="skills">
        ${data.skills.map(skill =>
            `<div class="skill">${skill}</div>`
        ).join("")}
    </div>
</section>

<section class="section">
    <h2>Experience</h2>

    <div class="card">
        <h3>${data.experience.role}</h3>

        <p>
            ${data.experience.company}
            |
            ${data.experience.duration}
        </p>
    </div>
</section>

<section class="section">
    <h2>Certifications</h2>

    <div class="cards">

    ${data.certifications.map(cert =>
        `<div class="card">${cert}</div>`
    ).join("")}

    </div>

</section>

`;
});
