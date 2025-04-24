document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('bugForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        // ambil elemen
        const username = document.getElementById('username');
        const email    = document.getElementById('email');
        const server   = document.getElementById('server');
        const desc     = document.getElementById('description');
        const perm     = document.getElementById('permission');
    
        // ambil error elemen
        const errU = document.getElementById('error-username');
        const errE = document.getElementById('error-email');
        const errS = document.getElementById('error-server');
        const errD = document.getElementById('error-description');
        const errP = document.getElementById('error-permission');
    
        // bersihkan error
        [errU, errE, errS, errD, errP].forEach(el => el.textContent = '');
    
        let valid = true;
    
        // 1. Username minimal 3 char
        if (username.value.trim().length < 3) {
            errU.textContent = 'Username must be at least 3 characters long.';
            valid = false;
        }
    
        // 2. Email harus ada '@' dan '.'
        if (!email.value.includes('@') || !email.value.includes('.')) {
            errE.textContent = 'Email is invalid.';
            valid = false;
        }
    
        // 3. Server wajib dipilih
        if (server.value === '') {
            errS.textContent = 'Choose a Server';
            valid = false;
        }
    
        // 4. Deskripsi minimal 20 karakter
        if (desc.value.trim().length < 20) {
            errD.textContent = 'Description is too short.';
            valid = false;
        }
    
        // 5. Checkbox permission wajib dicentang
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