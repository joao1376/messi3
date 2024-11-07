document.getElementById();
let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let mensagem = document.getElementById('mensagem').value;

if (nome && email && mensagem) {
	alert('mensagemen enviada com sucesso!');

	document.getElementById('form-contato').rest();
} else {
	alert('Por favor, preencha todos os campos.');
}
	
