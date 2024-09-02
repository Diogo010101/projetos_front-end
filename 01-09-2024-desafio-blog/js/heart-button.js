let objHeartButton = document.querySelectorAll('.heart-button');
let objPostBorda = document.querySelectorAll('.post-artigo');







for (let i = 0; i < objHeartButton.length; i++){
    objHeartButton[i].addEventListener('click', () =>{
        objHeartButton[i].classList.toggle(`heart-buttonfull`)
        objPostBorda[i].classList.toggle(`post-artigo-active`)

    })
}