function Iniciar() {
    const tagSelecionada = document.querySelector('p');
    const nomeInput = document.querySelector('input').value;
    const tagSelecionada2 = document.querySelector('h1');
  
    document.getElementById("botao").classList.add("animacao");
    setTimeout(() => {
      document.getElementById("botao").classList.remove("animacao");
    }, 3000);
  
    tagSelecionada.style.display = 'block';
    tagSelecionada2.style.display = 'none';
    document.getElementById('botao').style.display = 'none';
    document.getElementById('nome').style.display = 'none';
  
    let texto = [`Bem-vindo ao meu portfólio ${nomeInput}!`,
                `Aqui você poderá conhecer um pouco mais sobre mim e ver alguns dos meus projetos.`,
                `Sinta-se à vontade para explorar e entre em contato caso tenha alguma dúvida ou interesse em colaborar.`,
                `Aproveite a visita!`];
    let posicao = 0;
    let linha = 0;
  
    function mostrarLetras() {
      if (posicao < texto[linha].length) {
        if (texto[linha][posicao] === '<') {
          let tagFechamento = texto[linha].indexOf('>', posicao + 1);
          tagSelecionada.innerHTML += texto[linha].substring(posicao, tagFechamento + 1);
          posicao = tagFechamento + 1;
        } else {
          tagSelecionada.innerHTML += texto[linha][posicao];
          posicao++;
        }
        setTimeout(mostrarLetras, 50);
      } else if (linha < texto.length - 1) {
        linha++;
        posicao = 0;
        tagSelecionada.innerHTML += '<br>';
        setTimeout(mostrarLetras, 50);
      }
    }
  
    mostrarLetras();

    setTimeout(redirecionarPagina, 16000); // Contagem regressiva de 5 segundos
    }

  function redirecionarPagina() {
    location.href = "/principal.html"; // Redireciona para outra_pagina.html
  }