window.addEventListener("load",function(){
      
    let form = document.querySelector("form") 
    
    
        form.addEventListener("submit",function(e){
           
            e.preventDefault();
    
        let errores=[];
    
        let campoNombre= document.querySelector("#title");
            if(campoNombre.value==""){
                errores.push("El campo nombre no debe estar vacio")
               
            }else if(campoNombre.value.length<2){
                errores.push("El campo de nombre debe tener al menos 2 caracteres")
            }
            
        let campoPrecio= document.querySelector("#price");
            if(campoPrecio.value==""){
                errores.push("El campo precio no debe estar vacio")
            }

            let campoDescripcion= document.querySelector("#description");
            if(campoDescripcion.value==""){
                errores.push("El campo descripcion no debe estar vacio")
            }

        let campoFoto= document.querySelector("#image");
      
            if(campoFoto.value==""){            
                errores.push("Debes subir una foto del producto")
                
            }


            if (errores.length>0){
                e.preventDefault();
            
        let ulErrores= document.querySelector("div.errores ul" );
            for (let i=0; i<errores.length;i++){
                ulErrores.innerHTML+="<li>"+ errores[i]+"</li>"
            }
        }
        else{form.submit()
    
        }
    
    });
    })