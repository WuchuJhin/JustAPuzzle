document.getElementById('button').onclick =  function CheckCode() {
    let code = document.getElementById('code').value;
    if (code == '51124716791918') {
        alert('Congratulation: 51124716791918')
    } else {
        alert('I Guess that you will have to retry...')
    }
}
