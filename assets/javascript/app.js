const purchaseBtn = document.querySelector('.button')
purchaseBtn.addEventListener('click',function() {
    let name = document.getElementById('yourName').value;
    let email = document.getElementById('yourEmail').value;
    let noOfPasses = document.querySelector('.select').value;
    let comments = document.querySelector('.comments').value;
    if (name == '' || email == '' || noOfPasses == '' || comments == '') {
        console.log('all fields required'); return;
    }
    else {
        console.log('Purchase Successful'); return;
    }})