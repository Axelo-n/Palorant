document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('bugForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const username = document.getElementById('username');
        const email    = document.getElementById('email');
        const server   = document.getElementById('server');
        const desc     = document.getElementById('description');
        const perm     = document.getElementById('permission');
    
        const errU = document.getElementById('error-username');
        const errE = document.getElementById('error-email');
        const errS = document.getElementById('error-server');
        const errD = document.getElementById('error-description');
        const errP = document.getElementById('error-permission');
    
        [errU, errE, errS, errD, errP].forEach(el => el.textContent = '');
    
        let valid = true;
    
        if (username.value.trim().length < 3) {
            errU.textContent = 'Username must be at least 3 characters long.';
            valid = false;
        }
    
        if (!email.value.includes('@') || !email.value.includes('.')) {
            errE.textContent = 'Email is invalid.';
            valid = false;
        }
    
        if (server.value === '') {
            errS.textContent = 'Choose a Server';
            valid = false;
        }
    
        if (desc.value.trim().length < 20) {
            errD.textContent = 'Description is too short.';
            valid = false;
        }
    
        if (!perm.checked) {
            errP.textContent = 'You must give permission to send a follow-up';
            valid = false;
        }
    
        if (valid) {
            alert('Report successfully sent, thankyou!');
            this.reset();
            [errU, errE, errS, errD, errP].forEach(el => el.textContent = '');
        }
    });
});