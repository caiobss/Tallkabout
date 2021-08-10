let mobilemenu = document.querySelector(".mobile-menu")
        mobilemenu.addEventListener("click", clicar)
        function clicar(){
            let menu = document.querySelector('.menu')
            menu.classList.toggle('show-menu')
        }