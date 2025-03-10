function showAlert(){
        const alert = document.getElementById('orderOnline');
        alert.style.display = 'block';

        setTimeout(() => {
                closeAlert()
        }, 5000);
};

function closeAlert(){
        const alert = document.getElementById('orderOnline');
        alert.style.display = 'none';
}

// عضو بودن یا نبودن کاربر 

const user_disable = document.getElementById('user_disable');
const user_enable = document.getElementById('user_enable');

user_enable.style.display = 'none'

function openAdsUser(){
        const adsUser = this.document.getElementById('adsUser');
        adsUser.style.display = 'block';
        adsUser.style.left = '20px';
}

window.onload = function(){
        setTimeout(openAdsUser , 3000);
}