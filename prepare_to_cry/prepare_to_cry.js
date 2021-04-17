document.getElementById('button').onclick =  function CheckCode() {
    let password =document.getElementById('password').value;
    if (password == '8xty0pf4ZE') {
        alert('Well done, here is the next link:')
    } else {
        alert('ERROR, You Failed... I\'m desapointed')
    }
}