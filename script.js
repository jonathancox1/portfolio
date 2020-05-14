function copyEmail() {
    let email = document.querySelector('#email');
    email.focus();
    email.select();
    document.execCommand('copy');
    $('#emailLink').attr('data-original-title', 'Copied!');
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})