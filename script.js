const openShare = document.querySelector('.open-share');
const share = document.getElementById('share');
const remove = document.getElementById('remove');
share.addEventListener('click', ()=>{
    openShare.classList.add('clicked');
})
remove.addEventListener('click', ()=>{
    openShare.classList.remove('clicked');
})