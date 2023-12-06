//TODO: Add Your Code Below
window.addEventListener('load', async () => {

    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    let data = await response.json()
    data.sort((a,b) => a.hoursInSpace - b.hoursInSpace)
    const container = document.getElementById('container')
    data.forEach(astronaut => {
        container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li style="color: ${astronaut.active ? 'green' : ''}">Active: ${astronaut.active}</li>
                        <li>Skills:${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
            </div>
            `
    })
})