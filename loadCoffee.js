fetch('https://api.sampleapis.com/coffee/hot')
.then(response => response.json())
.then(displayCoffees)
.catch(console.error)

function displayCoffees(coffeeList){
    const main = document.getElementById('main')
    coffeeList.map(coffee => {
        const node = document.createElement("p");
        const textnode = document.createTextNode(coffee.title);
        node.appendChild(textnode);
        main.appendChild(node);
       
    })
}
getCoffee()                 