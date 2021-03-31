const link = document.querySelector(".writetous-link");
const popup = document.querySelector(".modal-writetous");
const close = popup.querySelector(".modal-close");
const login = popup.querySelector(".writetous-user");
const send = popup.querySelector(".modal-button");
const email = popup.querySelector(".writetous-email");
const text = popup.querySelector(".writetous-text");
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    const storage = localStorage.getItem("login");
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

send.addEventListener("click", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    login.value = "";
    email.value = "";
    text.value = "";
});

window.addEventListener("keydown", function (evt) {
    console.log(evt.code);
    if (evt.code === "Escape") {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        }
    }
});
