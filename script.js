
function toggleMode(){

  const html = document.documentElement
  /*if(html.classList.contains('light'))
  {
    html.classList.remove('light')
  }else
  {
   html.classList.add("light") 
  }*/

  html.classList.toggle("light")
  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")){
    // Se tiver light mode, adicionar a imagem list
     img.setAttribute("src", "Assets/avatar.png")

  } else {
    img.setAttribute("src", "./Assets/avatar-light.png")
    
  }

  
  
}