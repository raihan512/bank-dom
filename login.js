document.getElementById('login-btn').addEventListener('click', function () {
    let getEmail = document.getElementById('email');
    let email = getEmail.value;

    let getPass = document.getElementById('password');
    let pass = getPass.value;

    if (email === 'user@mail.com' && pass === '1506') {
        window.location.href = 'bank.html';
    } else {
        let invalidUser = document.getElementById('invalid-user');
        invalidUser.innerText = 'Your email or password is wrong. Please check again.';
    }
})