 Function mudarCor (novaCor) {
   var elemento = document.getElementById ("para1)
   elemento.style.backgroundColor = novaCor
   elemento.style.backgroundColor = novaCor
   elemento.style.display ='inline;
};

const imagem = document.GetElementById('foto')
let foto _t = false
imagem.addEventListener( 'click',()=>{
if (foto_t== false){
 imagem.src = 'foto';
 foto_t = true
 }else{
 imagem.src = ´teste.jpg´
 foto_t  = false;
}
 });

const rodri_circulo = document.getElementById('circulo')
let rodri_tamanho  = 1

rodri_circulo.addEventListener('dbclick' ,() => {
 alert (rodri_tamanho)
 rodri_circulo.style.borderRadius =  ´$(rodri_tamanho}px`;
 rodri_circulo.style.width = `$(rodri_tamanho*2)px` ;
rodri_circulo.style.height = `$(rodri_tamanho*2)px` ;
rodri_tamanho += 30;
});
