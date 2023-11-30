// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
    const takeOffButton = document.getElementById('takeoff')
    const landButton = document.getElementById('landing')
    const abortButton = document.getElementById('missionAbort')
    const upButton = document.getElementById('up')
    const downButton = document.getElementById('down')
    const leftButton = document.getElementById('left')
    const rightButton = document.getElementById('right')
    const shuttleBackground = document.getElementById('shuttleBackground')
    const flightStatus = document.getElementById('flightStatus')
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight')
    const astronautChat = document.getElementById('astronautChat')
    const rocket = document.getElementById('rocket')
    rocket.style.position = 'absolute'
    rocket.style.left = '0px'
    rocket.style.bottom = '0px'
    const origFlightStatus = flightStatus.innerHTML
    const origShuttleBackground = shuttleBackground.style.backgroundColor
    const origShuttleHeight = spaceShuttleHeight.innerHTML

    landButton.addEventListener('click', () => {
        alert('The shuttle is landing. Landing gear engaged.')
        rocket.style.left = '0px'
        rocket.style.bottom = '0px'
        flightStatus.innerHTML = origFlightStatus
        spaceShuttleHeight.innerHTML = origShuttleHeight
        shuttleBackground.style.backgroundColor = origShuttleBackground
        rocket.src = './LaunchCode_rocketline_white.png'
    })

    abortButton.addEventListener('click', e => {
        const confirmAbort = confirm('Confirm that you want to abort the mission.')
        if (confirmAbort) {
            rocket.style.left = '0px'
            rocket.style.bottom = '0px'
            flightStatus.innerHTML = 'Mission aborted.'
            flightStatus.style.color = 'red'
            spaceShuttleHeight.innerHTML = origShuttleHeight
            shuttleBackground.style.backgroundColor = origShuttleBackground
            rocket.src = './LaunchCode_rocketline_white.png'
        }
    })

    takeOffButton.addEventListener('click', e => {
        if (flightStatus.innerHTML !== 'Shuttle in flight') {
            const isReady = confirm('Confirm that the shuttle is ready for takeoff')
            if (isReady) {
                flightStatus.innerHTML = 'Shuttle in flight'
                shuttleBackground.style.backgroundColor = 'blue'
                spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000
                rocket.style.left = `${parseInt(rocket.style.left) + 45}%`
                rocket.style.bottom = `${parseInt(rocket.style.bottom) + 5}%`
            }
        }
    })

    upButton.addEventListener('click', e => {
        if (flightStatus.innerHTML === 'Shuttle in flight') {
            rocket.style.bottom = parseInt(rocket.style.bottom) < 75
                ? `${parseInt(rocket.style.bottom) + 5}%` : rocket.style.bottom
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000
        }
    })

    rightButton.addEventListener('click', e => {
        if (flightStatus.innerHTML === 'Shuttle in flight') {
            rocket.style.left = parseInt(rocket.style.left) < 85
                ? `${parseInt(rocket.style.left) + 5}%` : rocket.style.left
        }
    })

    downButton.addEventListener('click', e => {
        if (flightStatus.innerHTML === 'Shuttle in flight') {
            rocket.style.bottom = parseInt(rocket.style.bottom) > 5
                ? `${parseInt(rocket.style.bottom) - 5}%` : rocket.style.bottom
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) >= 10000
                ? parseInt(spaceShuttleHeight.innerHTML) - 10000 : 0
            if (parseInt(spaceShuttleHeight.innerHTML) < 10000) {
                rocket.src = './Explosion-8.png'
                astronautChat.innerHTML('Houston, we have a problem')
                astronautChat.style.color = 'red'
            }
        }
    })

    leftButton.addEventListener('click', e => {
        if (flightStatus.innerHTML === 'Shuttle in flight') {
            rocket.style.left = parseInt(rocket.style.left) > 0
                ? `${parseInt(rocket.style.left) - 5}%` : rocket.style.left
        }
    })

})