
window.addEventListener("DOMContentLoaded", function(e){
    axios("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1")
    .then(element =>{
        console.log(element.data)
        var card = this.document.querySelector(".container");
        card.innerHTML="";
        for (let index = 0; index < element.data.length; index++) {
            const elemento = element.data[index];
            card.innerHTML+=
        `<div id="${index}" class="card">
            <div class="row align-items-start" style="background-color: black;">
                <div class="col-2">
                    <img src="${elemento.image}" class="text-center" alt="...">
                </div>
    
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${elemento.title}</h5>
                        <p class="card-text">${elemento.body}</p>
                    </div>
                </div>
                
                <div class="col-2">
                    <div class="Boton-Tarea">
                        <button class="Edit">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z">
                                </path>
                            </svg>
                        </button>
    
                        <button class="Delete" id="Delete_${index}">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z">
                                </path>
                                <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
        }
    });
    
    
    
    axios("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1")
    .then(aux3=>{
        for (let index = 0; index < aux3.data.length; index++) {
            const elemento = aux3.data[index];
            var aux = `Delete_${index}`;
            const element = document.getElementById(aux);
            element.addEventListener("click",function(event){
                var aux2 = `http://bp-marvel-api.herokuapp.com/marvel-characters/${elemento._id}?idAuthor=${elemento.idAuthor}`
                axios.delete(aux2);
            })
        }
    })
    
    
     var Nuevo = document.getElementById("Nueva-tarea");
     Nuevo.addEventListener("click",function(event){
        var AgregarMenu=document.querySelector(".Agregar-menu");
        AgregarMenu.innerHTML="";
        AgregarMenu.innerHTML=
        `<h3>NUEVO PERSONAJE</h3>
        <div class="Nombre">
            <p>Nombre: </p>
            <input class="input1" id="Nombre" placeholder="Nombre" type="text"> 
            <p id="Error_Name" class="input-error"></p>
        </div>
        <div class="Nombre">
            <p>Descripcion: </p>
            <input class="input1" id="Descripcion" placeholder="Descripcion" type="text"> 
            <p id="Error_Descripcion" class="input-error"></p>
        </div>
        <div class="Nombre">
            <p>URL: </p>
            <input class="input1" id="URL" placeholder="URL" type="text"> 
            <p id="Error_URL" class="input-error"></p>
        </div>
        <button class="Guardar" id="Guardar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-usb-drive-fill" viewBox="0 0 16 16">
                <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM5.5 5a.5.5 0 0 0-.5.5V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5.5a.5.5 0 0 0-.5-.5h-6Z"/>
              </svg>
              Guardar
        </button>
        <button class="Cancelar" id="Cancelar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
              Cancelar
        </button>`
    
        var Cancelar = document.getElementById("Cancelar");
        Cancelar.addEventListener("click",function(event){
            var AgregarMenu=document.querySelector(".Agregar-menu");
            AgregarMenu.innerHTML="";
        });
        var Guardar = document.getElementById("Guardar");
        Guardar.addEventListener("click",function(event){
            var Nombre = document.getElementById("Nombre").value
            var Descripcion = document.getElementById("Descripcion").value
            var URL = document.getElementById("URL").value
            var aux =0;
            if (Nombre=="") {
                document.querySelector("#Error_Name").innerHTML="No debe ser vacio"
            }else{
                aux++;
            }
            if (Descripcion=="") {
                document.querySelector("#Error_Descripcion").innerHTML="No debe ser vacio"
            }else{
                aux++;
            }
             
            if (URL=="") {
                document.querySelector("#Error_URL").innerHTML="No debe ser vacio"
            }else{
                aux++;
            }
            if (aux==3) {
                var AgregarMenu=document.querySelector(".Agregar-menu");
                AgregarMenu.innerHTML="";
    
                axios({
                    method: 'post',
                    url: 'https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1',
                    data: {
                      "title":Nombre,
                      "body":Descripcion,
                      "image":URL,
                      "category":"main"
    
                    }
                  });
            }
            
        });
    })
    
    })