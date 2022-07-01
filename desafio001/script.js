function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var txtmsg = window.document.getElementById('txtmsg')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora > 0 && hora < 12){
        document.body.style.background = '#E6E0D4'
        img.src = 'imagens/manha.png'
        txtmsg.innerHTML = 'Bom Dia!'
    } else if (hora > 12 && hora < 18){
        document.body.style.background = '#C27E4F'
        img.src = 'imagens/tarde.png'
        txtmsg.innerHTML = 'Boa Tarde!'
    } else{
        document.body.style.background ='#0C1F2D'
        img.src = 'imagens/noite.png'
        txtmsg.innerHTML = 'Boa Noite!'
    }
}