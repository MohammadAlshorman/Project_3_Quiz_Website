const user = JSON.parse(localStorage.getItem('user'));



document.addEventListener('DOMContentLoaded', function () {
    const name = localStorage.getItem('name') || 'Mohammad Al-shorman';
    const email = localStorage.getItem('email') || 'shorman@example.com';
    const bio = localStorage.getItem('bio') || 'Web Developer specializing in Frontend and Backend.';
    const gender = localStorage.getItem('gender') || 'Male';
    const age = localStorage.getItem('age') || '22';
    const profileImage = localStorage.getItem('profile-image') || 'default-profile.jpg';

    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-email').textContent = email;
    document.getElementById('profile-bio').textContent = bio;
    document.getElementById('profile-gender').textContent = gender;
    document.getElementById('profile-age').textContent = age;
    document.getElementById('profile-image').src = profileImage;

    document.getElementById('edit-button').addEventListener('click', function () {
        const modal = document.getElementById('edit-profile-modal');
        modal.classList.add('modal-visible');
        modal.style.display = 'flex';
    });

    document.getElementById('close-modal').addEventListener('click', function () {
        const modal = document.getElementById('edit-profile-modal');
        modal.classList.remove('modal-visible');
        setTimeout(function () {
            modal.style.display = 'none';
        }, 300);
    });

    document.getElementById('edit-profile-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;
        const profileImage = document.getElementById('profile-image-upload').files[0];

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('bio', bio);
        localStorage.setItem('gender', gender);
        localStorage.setItem('age', age);

        if (profileImage) {
            const reader = new FileReader();
            reader.onload = function (e) {
                localStorage.setItem('profile-image', e.target.result);
                document.getElementById('profile-image').src = e.target.result;
            };
            reader.readAsDataURL(profileImage);
        }

        document.getElementById('profile-name').textContent = name;
        document.getElementById('profile-email').textContent = email;
        document.getElementById('profile-bio').textContent = bio;
        document.getElementById('profile-gender').textContent = gender;
        document.getElementById('profile-age').textContent = age;

        alert('Profile updated successfully!');
        document.getElementById('edit-profile-modal').classList.remove('modal-visible');
        setTimeout(function () {
            location.reload();
        }, 300);
    });

    const resetPasswordBtn = document.getElementById('reset-password-btn-inside');
    const resetPasswordModal = document.getElementById('reset-password-modal');
    const closeResetModal = document.getElementById('close-reset-modal');

    resetPasswordBtn.addEventListener('click', function () {
        resetPasswordModal.classList.add('modal-visible');
        resetPasswordModal.style.display = 'flex';
    });

    closeResetModal.addEventListener('click', function () {
        resetPasswordModal.classList.remove('modal-visible');
        setTimeout(function () {
            resetPasswordModal.style.display = 'none';
        }, 300);
    });

    document.getElementById('reset-password-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
        } else {
            localStorage.setItem('password', newPassword);
            alert('Password reset successful!');
            resetPasswordModal.classList.remove('modal-visible');
            setTimeout(function () {
                location.reload();
            }, 300);
        }
    });
});

