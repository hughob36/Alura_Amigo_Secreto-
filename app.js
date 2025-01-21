
let maximoAmigos = 5;
let arrayAmigos = [];

//funcion agrega
function agregarAmigo(){
    
    if(document.getElementById('amigo').value == " "){
        alert("La caja esta vacia agregar un nombre.");       
    } else {
        
        if(arrayAmigos.length < maximoAmigos){
            
            arrayAmigos.push(document.getElementById('amigo').value);
            limpiarCaja();

            for(let i = 0; i < 5; i++){
                if(arrayAmigos[i] != undefined){
                    document.querySelector(`#_${i}`).textContent = `${arrayAmigos[i]}`;
                    document.querySelector(`#_${i}`).style.display = 'block';
                } 
            } 
        } else {
            alert('Llegaste a la máxima capacidad de amigos para sortear.');
            limpiarCaja();
        }
        
    }    
    console.log(arrayAmigos);
}
//funcion limpia
const limpiarCaja = () => document.querySelector("#amigo").value = " "; 

//funcion sortea
function sortearAmigo(){
    let numeroSorteo = Math.floor(Math.random() * maximoAmigos);
    console.log(numeroSorteo);

    if(arrayAmigos[numeroSorteo] == undefined){
        alert(`Parece que nadie tiene ese número.Por favor, introduce los ${maximoAmigos} nombres.`);
    } else {
        document.querySelector(`#resultado li`).textContent = ` GANADOR!!! ${arrayAmigos[numeroSorteo]}`;
    }

}





