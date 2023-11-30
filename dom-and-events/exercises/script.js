function init () {
    const missionAbort = document.getElementById("abortMission")
    const button = document.getElementById("liftoffButton")
    const paragraph = document.getElementById("statusReport")
    const resetButton = document.getElementById('reset')
    const origText = paragraph.innerHTML

    // Put your code for the exercises here.
    button.addEventListener('click', () => {
        paragraph.innerHTML = 'Houston, we have liftoff!'
    })

    missionAbort.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'red'
    })
    
    missionAbort.addEventListener('mouseout', e => {
        e.target.style.backgroundColor = ''
    })

    missionAbort.addEventListener('click', () => {
        paragraph.innerHTML = confirm('Are you sure you want to abort the mission?') ? 
            'Mission aborted!  Space shuttle returning home.' : paragraph.innerHTML
    })

    // not part of exercise, just more convenient than hitting refresh
    resetButton.addEventListener('click', () => {
        paragraph.innerHTML = origText
    })
    
}

window.addEventListener("load", init);
