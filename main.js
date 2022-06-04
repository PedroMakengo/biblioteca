window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  activateMenuAtCUrrentSection(home);
  activateMenuAtCUrrentSection(services);
  activateMenuAtCUrrentSection(about);
  activateMenuAtCUrrentSection(contact);
  showBackToTopButtonOnScroll();
}

function activateMenuAtCUrrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2;

  // Verificar se a secção passou da linha
  // quais dados vou precisar ?
  const sectionTop = section.offsetTop;

  // Altura da secção
  const sectionHeight = section.offsetHeight;

  // O topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // informações dos dados e da lógica
  // console.log(
  //   "O topo da seção chegou ou passou da linha ?",
  //   sectionTopReachOrPassedTargetLine
  // );

  // Verificar se a base está abaixo da linha alvo
  // quais dados vou precisar ?
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  // console.log("O fundo da seção passou da linha ?", sectionEndPassedTargetLine);

  // limite da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header, 
  #services .card,
  #about,
  #about header, 
  #about .content,
  #about img
`);
