const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");


function cadrastrar(){
    fecth("https://localhost/8080/cadrastrar",
    {
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        metod:'POST',
        body:JSON.stringify({ 
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            tel: Itel.value
})
    })
    .then(res => { console.log(res)})
    .catch(err => {console.log(err)})
};


formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  cadrastrar();
  limpar();
});

function limpar(){
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";            
}
