function usuario(){
    const user = document.getElementById("usuarioNombre").value;
    search(user)
    document.getElementById("cardsUsuarios").style.display='block';
}

function search(user){
// requerimientos para informacion de usuario
const userNickName = document.getElementById("titulo")
const userImage = document.getElementById("imagen")
const userName = document.getElementById("nombre")
const userLink = document.getElementById("enlace")
const userDateProfile = document.getElementById("fecha")

// requerimientos para informacion de repositorios
const apiRepo = `https://api.github.com/users/${user}/repos`
const imagen = "/js.png";
const datosRepos = document.getElementById("cardsRepos")

    const apiUsers = `https://api.github.com/users/${user}`
    fetch(apiUsers)
    .then(response => response.json())
    .then(json => {
        userNickName.innerHTML =json.login
        userImage.src = json.avatar_url
        userName.innerHTML = json.name
        userLink.href = json.html_url
        userDateProfile.innerHTML = json.updated_at
    })

    fetch(apiRepo)
    .then(response => response.json())
    .then(data => {
        const finaltada = data.filter(repo => repo.language === 'JavaScript')
        finaltada.forEach(function (value){
            //console.log(value);
            //console.log(data);
            datosRepos.innerHTML +=
            `
            <div class="card cardsrepos" style="width: 18rem;">
                <img class="card-img-top img-fluid" src="${imagen}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${value.name}</h5>
                    <label class="" id="rDate">${value.created_at}</label>
                    <p class="card-text" style="color: black;">${value.description}</p>
                    <a href="${value.clone_url}" class="btn btn-outline-primary btn-block">go to repository</a>
                </div>
            </div>
            `
          });
    })
}
            //async function repositories(user){
            //    const apiRepo = "https://api.github.com/users/"
            //    const response2 = await fetch(apiRepo +user+"/repos/")
            //    const data2 = await response2.json
            //    return data2
            
            //    console.log(data2)
            //}
            
            
            //function repositories(user){
            //    const ruta = "https://api.github.com/users/"
            //    fetch(ruta +user+"/repos")
            //    .then(response2 => response2.json())
            //    .then(data2 => console.log(json))
            //}
            
            
            //const anotherFunction = async () =>{
            //    try{
            //        const response = await consumiendo();
            //        console.log(consumiendo);
            //    } catch (error) {
            //        console.error(error)
            //    }
            //}

            /*
for(data.length of data){




            datos.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <a href="#" class="btn btn-primary btn-lg btn-block" id="rEnlace">Go to site</a>
                    <label class="" id="rDate"></label>
                    <label class="" id="rDescription"></label>
                </div>
            </div>
            `
        }
            */