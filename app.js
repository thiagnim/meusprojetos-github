function pesquisar(){
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `
    }
  
    // Insere os resultados na seção HTML
    section.innerHTML = resultados
  }


