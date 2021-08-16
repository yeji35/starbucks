// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus() // 검색창 요소를 클릭하면 실행.
})

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색'); 
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',''); 
});

//년도 출력 
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() //2021