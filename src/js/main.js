(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const btnBurger = document.querySelector(".header__burger");
    const burgerMenu = document.querySelector(".header__menu");
    const btnClose = document.querySelector(".header__cls-menu");
    const inputs = document.querySelectorAll(".form__input");
    const form = document.querySelector(".form");

    //burger menu
    btnBurger.addEventListener("click", () => {
      burgerMenu.classList.add(
        "visible",
        "animate__animated",
        "animate__fadeInRight"
      );
    });
    btnClose.addEventListener("click", () => {
      burgerMenu.classList.add("animate__backInRight");
      burgerMenu.classList.remove(
        "visible",
        "animate__animated",
        "animate__fadeOutRight"
      );
    });

    //form
    inputs.forEach((input) => {
      input.addEventListener("keypress", (evt) => {
        console.log(evt.charCode, evt.keyCode);
        const keycode = evt.charCode || evt.keyCode;
        if (keycode === 46) {
          evt.preventDefault();
          return false;
        }
      });
    });

    async function submit(name, address, phone) {
      let user = {
        name: name,
        address: address,
        phone: phone,
      };
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });

      let result = await response.json();
      alert("Спасибо за заказ!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target.name.value);
      console.log(e.target.address.value);
      submit(e.target.name.value, e.target.address.value, e.target.phone.value);
    });

    //modal
    Fancybox.bind("[data-fancybox]", {
      Images: {
        initialSize: "cover",
      },
    });
  });
})();
