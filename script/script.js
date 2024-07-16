const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const info = document.querySelector('#info-content');
const enterEmail = document.querySelector('#enter-email');
const submit = document.querySelector('.submit');
const listviewtoggel = document.querySelectorAll('.btn-view');
const listcontent = document.querySelectorAll('.content');

//Hiện thông tin cá nhân sau khi nhập mail
submit.addEventListener('click', function(){
    let email = document.querySelector('#email').value;
    if(!email || !email.match(regex))
    {
        alert('Invalid email');
    }
    else{
        //Ẩn form input mail và hiện thông tin cá nhân
        info.classList.remove('d-none');
        enterEmail.classList.add('d-none');
    }
});

listviewtoggel.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        
        // Ẩn nội dung tương ứng
        const content = document.getElementById(`content-${index}`);

        //Kiểm tra xem có ẩn hiện hay chưa
        if(content.classList.contains('d-none'))
        {
            content.classList.remove('d-none');
        }
        else
        {
            content.classList.add('d-none');
        }
    });
});