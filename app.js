document.getElementById('submit-btn').addEventListener('click',function(){
    const ans = document.getElementById('answer-area');
    if(ans.value == 9){
        window.location.href='confession.html'
    }
    else{
        window.location.href='next-page.html';
    }
})