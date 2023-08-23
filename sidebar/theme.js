
const sidebar = document.querySelector('.sidebar');
const active = document.querySelector('.list-item.active');
const themeButtons = document.querySelectorAll('.colorswitcher');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.classList[1];
        console.log(theme)
        sidebar.className = `sidebar ${theme}`;
        active.className = `list-item active ${theme}`;
    });
});




  themeButtons.forEach(button=>{

  })