//TODO: Add Your Code Below
window.addEventListener('load', async () => {

    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    let data = await response.json()
    data.sort((a,b) => b.hoursInSpace - a.hoursInSpace)
    const container = document.getElementById('container')
    let textColor = ''
    container.innerHTML += `<h2>Astronaut Count: ${data.length}</h2>`
    let astronautCount = 1
    data.forEach(astronaut => {
        if (astronaut.active) {
            textColor = 'green'
        } else {
            textColor = ''
        }
        container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronautCount}) ${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li style="color: ${textColor}">Active: ${astronaut.active}</li>
                        <li>Skills:${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
            </div>
            `
        astronautCount++
    })
})