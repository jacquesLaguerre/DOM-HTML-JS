function displayDate() {
    document.getElementById("demo").innerHTML = Date () };

    document.getElementsByTagName('button')[0].addEventListener("click", ()=>{
        alert('you clicked the button')
    })
    window.addEventListener('resize', ()=> {
        document.getElementById('demo').innerHTML = "YOU RESIZED THE WINDOW!"
    })

    window.addEventListener("keydown", (event) => {
        switch(event.key) {
            case 'v':
                document.body.style.backgroundColor = "violet"
                break
            case 'w':
                document.body.style.backgroundColor = "white"
                break
            case 'y':
                document.body.style.backgroundColor = "yellow"
                break
            case 'g':
                document.body.style.backgroundColor = "green"
                break
            case 's':
                document.body.style.backgroundColor = "salmon"
                break
        }
    })