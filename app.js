fetch("profile.json")
.then(response => response.json())
.then(data => {

document.getElementById("app").innerHTML = `

<!-- HERO SECTION -->

<section class="hero">

    <div class="hero-card">

        <img
            src="${data.profileImage}"
            alt="${data.name}"
            class="profile-image">

        <h1 class="hero-name">
            ${data.name}
        </h1>

        <h2 class="hero-title">
            ${data.title}
        </h2>

        <p class="hero-summary">
            ${data.summary}
        </p>

        <div class="social-links">

            <a href="${data.socials.github}" class="social-btn">
                <i class="fab fa-github"></i>
                GitHub
            </a>

            <a href="${data.socials.linkedin}" class="social-btn">
                <i class="fab fa-linkedin"></i>
                LinkedIn
            </a>

            <a href="${data.socials.credly}" class="social-btn">
                <i class="fas fa-award"></i>
                Credly
            </a>

            <a href="${data.socials.microsoftLearn}" class="social-btn">
                <i class="fab fa-microsoft"></i>
                Microsoft Learn
            </a>

        </div>

        <div class="action-buttons">

            <a href="${data.resume}" class="primary-btn">
                Resume
            </a>

            <a href="mailto:${data.email}" class="secondary-btn">
                Contact Me
            </a>

        </div>

    </div>

</section>

<!-- ABOUT SECTION -->

<section class="section">

    <h2 class="section-title">
        About Me
    </h2>

    <div class="card">

        <p>
            ${data.about}
        </p>

    </div>

</section>

<!-- STATS -->

<section class="section">

    <div class="certifications-grid">

        ${data.stats.map(stat => `
            <div class="card">

                <h2>${stat.number}</h2>

                <p>${stat.label}</p>

            </div>
        `).join("")}

    </div>

</section>

<!-- SKILLS -->

<section class="section">

    <h2 class="section-title">
        Technical Skills
    </h2>

    ${Object.entries(data.skills).map(([category, skills]) => `

        <div class="card" style="margin-bottom:20px;">

            <h3 style="margin-bottom:15px;">
                ${category}
            </h3>

            <div class="skills-grid">

                ${skills.map(skill => `
                    <div class="skill">
                        ${skill}
                    </div>
                `).join("")}

            </div>

        </div>

    `).join("")}

</section>

<!-- EXPERIENCE -->

<section class="section">

    <h2 class="section-title">
        Professional Experience
    </h2>

    <div class="timeline">

        ${data.experience.map(job => `

            <div class="timeline-item">

                <div class="card">

                    <h3>
                        ${job.role}
                    </h3>

                    <h4>
                        ${job.company}
                    </h4>

                    <p style="margin-bottom:15px;">
                        ${job.duration}
                    </p>

                    <ul>

                        ${job.description.map(item => `
                            <li style="margin-bottom:10px;">
                                ${item}
                            </li>
                        `).join("")}

                    </ul>

                </div>

            </div>

        `).join("")}

    </div>

</section>

<!-- CERTIFICATIONS -->

<section class="section">

    <h2 class="section-title">
        Certifications
    </h2>

    <div class="certifications-grid">

        ${data.certifications.map(cert => `

            <div class="card">

                <h3>
                    ${cert.name}
                </h3>

                <p>
                    ${cert.year}
                </p>

            </div>

        `).join("")}

    </div>

</section>

<!-- PROJECTS -->

<section class="section">

    <h2 class="section-title">
        Featured Projects
    </h2>

    <div class="certifications-grid">

        ${data.projects.map(project => `

            <div class="card">

                <h3>
                    ${project.title}
                </h3>

                <p style="color:#38bdf8;margin-top:10px;">
                    ${project.tech}
                </p>

                <p style="margin-top:15px;">
                    ${project.description}
                </p>

            </div>

        `).join("")}

    </div>

</section>

<footer style="
text-align:center;
padding:40px;
color:#94a3b8;">

    © ${new Date().getFullYear()}
    ${data.name}

</footer>

`;

})
.catch(error => {

console.error(
"Failed to load profile.json",
error
);

document.getElementById("app").innerHTML = `

<h1 style="
text-align:center;
margin-top:100px;
color:red;">

Failed to load portfolio data

</h1>

`;

});
