document.getElementById('button').onclick =  function CheckCode() {
    let password =document.getElementById('password').value;
    if (password == '8xty0pf4ZE') {
        alert('Well done, here is the next link: https://justapuzzle.netlify.app/back_to_the_past/break.html')
    } else {
        alert('ERROR, You Failed... I\'m desapointed')
    }
}
