const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header nav");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});


const form = document.getElementById("contact-form");
const btn = document.querySelector(".btn-send");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    btn.disabled = true;
    btn.innerText = "Enviando...";

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    emailjs.send("service_yi3o5o8", "template_v0w2i1f", {
        from_name: nome,
        from_email: email,
        message: mensagem
    })
    .then(function () {
        btn.innerText = "Mensagem Enviada ✓";
        form.reset();
        setTimeout(() => {
            btn.innerText = "Enviar Mensagem";
            btn.disabled = false;
        }, 3000);
    })
    .catch(function (error) {
        btn.innerText = "Erro ao enviar";
        btn.disabled = false;
        console.log(error);
    });
});