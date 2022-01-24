function helloWorld()
{
    console.log("Olá Mundo!!!");
}
const saudacao = () => {
    var data = new Date()
    return data.getHours() <= 12? "Bom dia": data.getHours() <= 18? "Boa tarde": "Boa noite"; 
}
//comentario
helloWorld();
console.log("A suadação do momento é " + saudacao());