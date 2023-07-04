function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var nome = document.getElementById('nome')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12 ){
   //BOM DIA
 img.src = 'img/fotomanha.png'
 document.body.style.background = '#E0F8E0'
}else if(hora >= 12 && hora < 18){
   //BOA TARDE
img.src = 'img/fototarde.png'
document.body.style.background = '#F5D0A9'
}else{
   //BOA NOITE
   img.src = 'img/fotonoite.png'
   document.body.style.background = '#071019'
}
}