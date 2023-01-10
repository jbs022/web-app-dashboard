//Notification Alert

    //Notification Alert Variables
    const alertBanner = document.getElementById("notif-alert");

    //Create HTML for the banner
    alertBanner.innerHTML =
    `<p><strong>Alert:</strong> You have unread messages</p>
    <span class="alert-banner-close">X</span>`;

    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none"
        }
    });

//Message User interactivity
    
    //Message User Variables
    const user = document.getElementById("searchUser");
    const message = document.getElementById("messageField");
    const send = document.getElementById("send");

    send.addEventListener('click', () => {
        
        //Ensures search user and message fields are filled out
        if (user.value === "" && message.value === "") {
            alert("Please fill out user and message fields before sending");
        } else if (user.value === "") {
            alert("Please fill out user field before sending");
        } else if (message.value === "") {
            alert("Please fill out message field before sending");
        } else {
            alert(`Message successfully sent to: ${user.value}`);
        }
    });