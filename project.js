// function timesTable(num) {
//     return new Promise((resolve, reject) => {
//         resolve(num * num)
//         reject("Sorry ERROR!")
//     })
    
// }
// timesTable(0).then((result) => {
//     console.log(result);
//     return timesTable(result + 1)
// }).then((result2) => {
//     console.log(result2);
//     return timesTable(result2 + 1)
// }).then((final) => {
//     console.log(`${final} is the final result`)
// }).catch((error) => {
//     console.log(error)
// })



// function greet(index) {
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (index) {
//                  resolve("Success!!")
//             }else {
//                 reject("Failed due to error")
//             }
//         }, 5000)
//     })
// }

// async function call() {
//     try {
//         let greeting = await greet(1);
//         console.log(greeting)
//         console.log("You now know async and await")
//     }
//     catch(error) {
//         console.log(`${error} was returned`)
//     }
// }

// call()

//Old way
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Error locating specimen")
//         }else {
//             return response.json()
//             }
//         })
//     .then((data) => {
//         console.log(data.name, data.weight)
//     }).catch(error => {
//         console.error(error)
//     })

//New way

// async function Fetched() {
//     let userInput = document.querySelector("#userInput").value.toLowerCase()
//     try{
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
//         if (!response.ok) {
//             throw new Error("Failure to fetch")            
//         }else {
//             const data = await response.json();
//             let Pokemon = data.sprites.front_default;
//             const image = document.getElementById("pokemonImage")
//             image.src = Pokemon
//             image.style.display = "block";
//         }
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

//EXERCISES FOR PROMISE

let button = document.getElementById("find");
button.addEventListener("click", findFriend)
    async function findFriend() {
        try {
            const response = await fetch("https://randomuser.me/api")
            if(!response.ok) {
                throw new Error("An error occured")
            } else{
                const data = await response.json();
                let name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
                let gender = data.results[0].gender;
                let country = data.results[0].location.country;
                let email = data.results[0].email;
                let output = document.getElementById("output");
                setTimeout(() => {
                output.textContent = `Your new friend is ${name}.\nThe person is a ${gender} in gender,\nwho stays in ${country}.\nFor further contact, the email is ${email}`;
                }, 2000)
            }
        }
        catch(error) {
            console.log(error)
        }
    }
