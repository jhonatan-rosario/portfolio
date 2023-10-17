(function() {
const sendMessageButton = document.getElementById("sendMessageButton");

    sendMessageButton.onclick = eventClick => {
        eventClick.preventDefault();

        const formContact = document.forms["contactForm"];

        const name = formContact["nameInput"].value;
        const email = formContact["emailInput"].value;
        const subject = formContact["subjectInput"].value;
        const message = formContact["messageTextArea"].value;

        const body = 
            `Olá, me chamo ${name}!\n\n${message}\n\n\nAtenciosamente,\n${name} \<${email}\>`;

        const url = `mailto:josanilton.filho@gmail.com?subject=${subject}&body=${body}`;
        const urlEncoded = encodeURI(url);

        window.open(urlEncoded);
    };
})();