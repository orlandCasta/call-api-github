//function load(){
//    repositories("orlandCasta")
//}

/**
 ** *********************************************************************
 ** ***************************LLAMANDO APIs*****************************
 ** *********************************************************************
 */
async function consumiendo(user){
    const api = "https://api.github.com"
    const response = await fetch(api + "/users/"+user)
    const data = await response.json
    return data
}

async function repositories(user){
    const api2 = "https://api.github.com/users/"
    const response = await fetch(api2+user+"/repos")
    const data2 = await response.json
    //const data2 = await console.log(response2.json())
    return data2
}

/**
 ** *********************************************************************
 ** **********************MOSTRANDO DATOS EN EL HTML*********************
 ** *********************************************************************
 */
function userAc(user){
// Elementos de informacion de la card del usuario
    const userNickName = document.getElementById("titulo")
    const userImage = document.getElementById("imagen")
    const userName = document.getElementById("nombre")
    const userLink = document.getElementById("enlace")
    const userRepo = document.getElementById("repo")
    
    const api = "https://api.github.com"
    fetch(api + "/users/"+user)
    .then(response => response.json())
    .then(json => {
        userNickName.innerHTML =json.login
        userImage.src = json.avatar_url
        userName.innerHTML = json.name
        userRepo.innerHTML = json.public_repos
        userLink.href = json.html_url
        
    }) 
}
/**
 ** *********************************************************************
 */
function reposUser(user){
    const repoName = document.getElementById("rName")
    const repoDate = document.getElementById("rDate")
    const repoDescription = document.getElementById("rDescription")

    const api2 = "https://api.github.com/users/"
    fetch(api2+user+"/repos")
    .then(response => response.json())
    .then(json => {
        repoName.innerHTML = json.name
        
    })

}
/**
 ** *********************************************************************
 ** *************************FUNCION BOTON BUSCAR************************
 ** *********************************************************************
 */
function usuario(){
    const input = document.getElementById("usuarioNombre")
    reposUser(input.value)
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