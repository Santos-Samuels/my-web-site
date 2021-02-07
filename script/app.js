const loadProjects = (projects, projectsDiv) => {
    const parentDiv = document.querySelector(projectsDiv)

    projects.forEach(project => {

        const html = `
            <article>
                <h2>${project.title}</h2>
                
                <div>
                    <span>${project.tecnology}</span>
                    <p>${project.description}</p>
                    
                    <footer>
                        <a href="${project.codeUrl}" id="code">CODE</a>
                        <a href="${project.demoUrl}" id="demo">DEMO</a>
                    </footer>
                </div>
            </article>
        `

        parentDiv.insertAdjacentHTML('beforeend', html)
    })
}

loadProjects(projectsList, '#projectsDiv')