// console.log("Hi");


// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokesBtn = document.querySelector('#jokebtn');


// const generateJoke = () =>{


//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }    
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader).then((res) =>
//         res.json())
//     .then((data) =>{
//         jokes.innerHTML = data.joke
//     }).catch((error) =>{
//         console.log(error);
//     }) 
// }


// jokesBtn.addEventListener('click', generateJoke);
// generateJoke();






const generateJoke = async () =>{
    

   try{
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke; 
   }catch(err){
        console.log(`the error is ${err}`);
   }
            
    
}


jokesBtn.addEventListener('click', generateJoke);
generateJoke();

