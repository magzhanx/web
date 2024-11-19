var colors = ['red', 'yellow', 'cian', 'green', 'black', 'white'];
        var currentIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            
            currentIndex = currentIndex + 1;
            if (currentIndex == 6){
                currentIndex = 0;
            } 
        }

function displayDateTime() {
            var now = new Date();

            var options = { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                hour: 'numeric', minute: 'numeric', hour12: true
            };
            var formattedDateTime = now.toLocaleDateString('en-US' ,options);
            var hour = now.getHours();

            document.getElementById("dateTime").textContent = formattedDateTime;
        }
        window.onload = displayDateTime;



        function validateForm(event) {
            event.preventDefault();
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
            var passwordError = document.getElementById('passwordError');
            var confirmPasswordError = document.getElementById('confirmPasswordError');

            passwordError.textContent = '';
            confirmPasswordError.textContent = '';
            if (!password) {
                passwordError.textContent = 'Password is required.';
                return;
            } else if (password.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                return;
            }
            if (password !== confirmPassword) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                return;
            }
            alert("Congratulations! All data is filled correctly");
            window.location =  "index.html";
        }

        
        function subscibe(){
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("subscribeBtn");
        var closeBtn = document.getElementById("closeBtn");
        btn.onclick = function() {
            modal.style.display = "block";
        }
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
     
    }


    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

document.addEventListener("DOMContentLoaded", function() {
    var switchthemebutton = document.getElementById("switch_theme");
    var bg = document.getElementById("bg");
    var footer = document.getElementById("footer");
    var nav = document.getElementById("nav");

    function changeTheme() {
        var isLightTheme = switchthemebutton.classList.contains("btn-light");
        if (isLightTheme) {
            bg.classList.replace("bg-light", "bg-dark");
            footer.classList.replace("bg-dark", "bg-secondary");
            nav.classList.replace("bg-dark", "bg-secondary");
            switchthemebutton.classList.replace("btn-light", "btn-dark");
            localStorage.setItem("theme", "dark"); 
        } else {
            bg.classList.replace("bg-dark", "bg-light");
            footer.classList.replace("bg-secondary", "bg-dark");
            nav.classList.replace("bg-secondary", "bg-dark");
            switchthemebutton.classList.replace("btn-dark", "btn-light");
            localStorage.setItem("theme", "light"); 
        }
    }
    function applySavedTheme() {
        var savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            bg.classList.replace("bg-light", "bg-dark");
            footer.classList.replace("bg-dark", "bg-secondary");
            nav.classList.replace("bg-dark", "bg-secondary");
            switchthemebutton.classList.replace("btn-light", "btn-dark");
        } else {
            bg.classList.replace("bg-dark", "bg-light");
            footer.classList.replace("bg-secondary", "bg-dark");
            nav.classList.replace("bg-secondary", "bg-dark");
            switchthemebutton.classList.replace("btn-dark", "btn-light");
        }
    }
    applySavedTheme();

    switchthemebutton.addEventListener("click", changeTheme);
});


function toggleContent() {
    var moreProducts = document.getElementById("more_products");
    var btnText = document.getElementById("showmorebtn");
    
        if (moreProducts.style.display === "none") {
            moreProducts.style.display = "block";
            btnText.textContent = "Show Less";
        }
        else if (moreProducts.style.display === "block"){
            moreProducts.style.display = "none";
            btnText.textContent = "Show More";
        };
    };
    var featuredProducts = document.getElementById("featured");
var home = document.getElementById("home");
var product = document.getElementById("nav_products");
var contactus = document.getElementById("contactus");
var search = document.getElementById("search");
var signin = document.getElementById("signin");
var sub = document.getElementById("subscribeBtn");
var showmore = document.getElementById("showmorebtn");

function changeLanguage() {
    var language = document.getElementById("languageSelector").value;
    switch (language) {
        case "en":
            home.textContent = "Home";
            product.textContent = "Products";
            contactus.textContent = "Contact Us";
            search.textContent = "Search";
            signin.textContent = "Sign In";
            sub.textContent = "Subscribe";
            showmore.textContent = "Show More";
            featuredProducts.textContent = "Featured Products";
            break;
        case "ru":
            home.textContent = "Главная";
            product.textContent = "Товары";
            contactus.textContent = "Cвязаться с Нами";
            search.textContent = "Искать";
            signin.textContent = "Войти";
            sub.textContent = "Подписаться";
            showmore.textContent = "Больше";
            featuredProducts.textContent = "Рекомендуемые продукты";
            break;
        case "kz":
            home.textContent = "Басты Бет";
            product.textContent = "Таруарлар";
            contactus.textContent = "Бізбен Хабар";
            search.textContent = "Табу";
            signin.textContent = "Кіру";
            sub.textContent = "Жазылу";
            showmore.textContent = "Көбірек көрсету";
            featuredProducts.textContent = "Таңдаулы Тауарлар";
            break;
        default:
            home.textContent = "Home";
            product.textContent = "Products";
            contactus.textContent = "Contact Us";
            search.textContent = "Search";
            signin.textContent = "Sign In";
            sub.textContent = "Subscribe";
            showmore.textContent = "Show More";
            featuredProducts.textContent = "Featured Products";
            break;
    }

    localStorage.setItem("language", language);
}
window.onload = function() {
    var savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
        document.getElementById("languageSelector").value = savedLanguage;
        changeLanguage();
    }
};


    const soundButton = document.getElementById("subscribeBtn");
        const notificationSound = document.getElementById("notificationSound");
        soundButton.addEventListener("click", () => {
            notificationSound.play();
        });

function reset(){
    document.querySelectorAll('input').forEach(input => input.value = '');
}

