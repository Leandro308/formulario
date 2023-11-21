function validarformulario(){
    const nome = document.getElementById('nome').value
    const email = document.querySelector('#email').value
    const senha = document.getElementById('senha').value

    if(nome == '' || email == '' || senha == ''){
        alert('Digite os campos corretamente')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            alert('Insira o email corretamente')
        }
    }
    
    if(senha.length > 8){
        alert('Limite de carácter excedido')

}