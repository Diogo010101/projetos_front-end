
const inputSearch = document.querySelector('#id-barra-pesquisa')
let items = []



inputSearch.addEventListener('input', (e) =>{
    const value = formatString(e.target.value)
    console.log(formatString(value))

    const items = document.querySelectorAll('.container-section-post .post-artigo')
    const notFound = document.querySelector('#not-found')

    let hasResults = false
    

    if (value != ''){
        items.forEach(item => {
            const itemTitle = item.querySelector('.title-post').textContent;
            if (formatString(itemTitle).indexOf(value) !== -1){
                item.style.display = 'flex';

                hasResults = true
            }else{
                item.style.display = 'none';
            }
        })
        if (hasResults){
            notFound.style.display = 'none'
        }else{
            notFound.style.display = 'flex'
        }
    }else{
        items.forEach(item => item.style.display = 'flex')

        notFound.style.display = 'none'
    }
})


function formatString(value){
    return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}