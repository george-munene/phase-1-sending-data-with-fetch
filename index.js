// Add your code here
// const formData = {    
//     dogName: "Bryon2",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// };

//  return fetch("http://localhost:3000/dogs", configurationObject)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(`There was an error here ${error}`));


const button = document.getElementById("button");

button.addEventListener("click", () => submitData());

const newElement = document.createElement('div'); 
const errorBox = document.createElement('div');

function submitData(name, email){

    
    
    const loginData ={
        name: name,
        email: email
    };

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(loginData)
    };

    const returnFetch =  fetch("http://localhost:3000/users", configObject)
    .then(response => response.json())
    .then(data => {
               
        newElement.textContent = `New id is: ${data.id}`
        document.body.appendChild(newElement)
    })
    .catch(error => {
        console.log(`Detected Error Posting login Details. Here: ${error}`)
        errorBox.textContent = `Detected Error Posting login Details. Here: ${error}`
        document.body.appendChild(errorBox)
    })

    return returnFetch
       
}

