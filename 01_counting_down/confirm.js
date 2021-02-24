document.getElementById("yes").onclick = () => {
    let info = window.confirm("Please confirm you order.")

    if (info) {
        location.href = 'success.html'
    }
}