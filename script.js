const html = document.documentElement
const avatarImg = document.querySelector(`#profile img`)

function turnLight() {
  html.classList.toggle(`light-mode`)
  if (html.classList.contains(`light-mode`)) {
    avatarImg.setAttribute(`src`, `./assets/avatar-light.png`)
  } else {
    avatarImg.setAttribute(`src`, `./assets/avatar.png`)
  }
}
