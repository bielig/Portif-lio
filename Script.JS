document.getElementById('btjava').addEventListener('click', function() {
    document.body.classList.add('fade-out'); // Adiciona a classe de fade-out

    // Aguarda a animação terminar antes de mudar de página
    setTimeout(function() {
        window.location.href = 'Apresentaçãoprofissional.html'; // Muda para a nova página
    }, 500); // O tempo deve ser igual ao da transição
});