const menu = document.getElementsByClassName("menu");
for (let i = 0; i < menu.length; i++){
  menu[i].addEventListener('click', () => {
    const contact = menu[i].nextElementSibling;
    console.log(contact);
    contact.classList.toggle("is-open");
  });
}