console.log("script carregou");

// Formulário de contato
const formulario = document.querySelector(".formulario");
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const dados = Object.fromEntries(new FormData(formulario));
    console.log("Mensagem:", dados);
    formulario.reset();
  });
}
// Menu Mobile
const botaoMenu = document.querySelector(".menu-botao");
const menu = document.querySelector("#menu");
if (botaoMenu && menu) {
  const definirMenu = (aberto) => {
    menu.classList.toggle("aberto", aberto);
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botaoMenu.innerHTML = aberto ? "&#10005;" : "&#9776;";
  };
  botaoMenu.addEventListener("click", () =>
    definirMenu(!menu.classList.contains("aberto"))
  );
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) definirMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") definirMenu(false);
  });
  window.matchMedia("(min-width: 48.01rem)").addEventListener("change", (e) => {
    if (e.matches) definirMenu(false);
  });
}