let objArtigos = document.querySelector(".container-section-post")



let post = {
    "1":`<article class="post-artigo">
                <div class="data-like">
                    <span class="data-post">17 de ago, 2024</span>
                    <span class="heart-button"></span>
                </div>
                <h1 class="title-post">O que é linguagem de programação? Conheça as principais</h1>
                <p class="desc-post">Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.</p>
            </article>`,

    "2":`<article class="post-artigo">
                <div class="data-like">
                    <span class="data-post">12 de jun, 2024</span>
                    <span class="heart-button"></span>
                </div>
                <h1 class="title-post">GitHub agora permite fazer login sem precisar de senha</h1>
                <p class="desc-post">O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.</p>
            </article>`,

    "3": `<article class="post-artigo">
                <div class="data-like">
                    <span class="data-post">21 de jun, 2024</span>
                    <span class="heart-button"></span>
                </div>
                <h1 class="title-post">Por que os hiperlinks são azuis em sua maioria?</h1>
                <p class="desc-post">Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks - uma palavra ou termo clicável que direciona o leitor.</p>
            </article>`
}

//Verifica a quantidade de itens dentro do objeto
tamanho = Object.keys(post).length

for (let i = 1; i <= tamanho; i++){
    let itemPost = document.createElement('item')
    itemPost.innerHTML = `${post[i]}`
    objArtigos.appendChild(itemPost)
}


        

            

            

