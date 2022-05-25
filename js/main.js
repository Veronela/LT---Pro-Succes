new SimpleLightbox({ elements: '.container-galerie a'  });

new SimpleLightbox({ elements: '.orar-imagini a'  });
AOS.init({
    duration: 1200,
    offset: 100,
    once: true
});

emailjs.init("6ElVESv-5FnoXbQAe");



function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}


function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_oz4utyf", "template_q7w7r27", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}
