function Send() {
    let kotak = document.getElementById('chatBook')
    let pesan = document.getElementById('text')

    if (!pesan == ' ') {
        kotak.innerHTML += `<p>${pesan.value}</p>`
    }

    return false;
}