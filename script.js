function mudarTema() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pega a tag img
  const img = document.querySelector("#profile img")
  
  //verifica se esta modo light
  if (html.classList.contains("light")) {
    //se estiver ligh muda a imagem
    img.setAttribute('src', './assets/avatarLight.png')
  } else {
    //se estiver modo dark troca imagem
    img.setAttribute('src', './assets/avatar.png')
  }




}
