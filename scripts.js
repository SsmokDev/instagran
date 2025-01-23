/* let = função,
imagem = nome da função,
(=) diz que qual o valor da função,
document = html,
querySelector = selecionar alguma coisa,
() dentro de aspas vai ser posto oque sera procurado,
 (".troca-imagem")= é o elemento procurado
*/
/* criamos uma variavel chamada imagem, buscamos(querySelector) do html(document) o alguem/elemento/classe que vamos trabalhar (.troca-imagem)*/
let imagem = document.querySelector(".troca-imagem")

/* criamos uma função chamada troca imagem*/
function trocaImagem(){
    if(imagem.style.opacity == 0){
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0;
    }
}
/* usamos o setInterval(intervaslo de tempo) para colocar um tempo de apacição entre uma imagem e outra*/
setInterval(trocaImagem, 3000);