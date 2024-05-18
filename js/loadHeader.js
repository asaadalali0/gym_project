document.addEventListener("DOMContentLoaded", function() {
    var headerPlaceholder = document.getElementById("header-placeholder");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerPlaceholder.innerHTML = xhr.responseText;
            // Now that the header is loaded, initialize the date and time script
            initializeDateTime();
        }
    };
    xhr.send();
});

function initializeDateTime() {
    function updateDateTime() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        document.getElementById('dateTime').textContent = formattedDateTime;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
}