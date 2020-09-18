function load(){
    repositories("orlandCasta");
}
//----------------------------------------------------------------------------

function usuario(){
    const user = document.getElementById("usuarioNombre").value;
    userAc(user)
}

function repositorio(){
    const user = document.getElementById("usuarioNombre").value;
    userRepo(user)
}
//-----------------------------------------------------------------------------
//                                      APIs                                   
//-----------------------------------------------------------------------------

/*
function repositories(user){
    const usuarioGit = user
    const api = "https://api.github.com/users/"
    const apiUsers = `https://api.github.com/users/${user}`
    const apiRepo = `https://api.github.com/users/${user}/repos`

    fetch(apiUsers)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    });
    fetch(apiRepo)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    });
    }
*/
//-----------------------------------------------------------------------------
//                          API USUARIO MOSTRANDO EN HTML                      
//-----------------------------------------------------------------------------

function userAc(user){
    const userNickName = document.getElementById("titulo")
    const userImage = document.getElementById("imagen")
    const userName = document.getElementById("nombre")
    const userLink = document.getElementById("enlace")

    const apiUsers = `https://api.github.com/users/${user}`
    fetch(apiUsers)
    .then(response => response.json())
    .then(json => {
        userNickName.innerHTML =json.login
        userImage.src = json.avatar_url
        userName.innerHTML = json.name
        userLink.innerTextf = json.id
    })
}

//-----------------------------------------------------------------------------
//                          API REPOS MOSTRANDO EN HTM                         
//-----------------------------------------------------------------------------
function userRepo(user){
    const apiRepo = `https://api.github.com/users/${user}/repos`
    const imagen = "/javascript.png";
    const repoEnlace = document.getElementById("rEnlace")
    const repoDate = document.getElementById("rDate")
    const repoDescription = document.getElementById("rDescription")
    const datosRepos = document.getElementById("cards")

    fetch(apiRepo)
    .then(response => response.json())
    .then(data => {
        data.forEach(function (value){
            console.log(value);
            datosRepos.innerHTML +=
            `
            <div class="card">
                <div class="card-body">
                    <img src="${imagen}" class="card-img-top img-fluid" alt="" id="imagen">
                    <label class="" id="rDate">${value.created_at}</label>
                    <label class="" id="rDescription">${value.description}</label>
                    <a href="${value.clone_url}" class="btn btn-primary btn-lg btn-block" id="rEnlace">Go to site</a>
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