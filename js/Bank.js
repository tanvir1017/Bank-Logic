document.getElementById('login-btn').addEventListener('click', function (){
    const userDetails = document.getElementById('user-info');
    const user = userDetails.value;
    // console.log(user);
    
    const userDetail = document.getElementById('pass');
    const password = userDetail.value;
    // console.log(password);
 
    if(user != 'hossainmdjabed037@gmail.com'){
        const textAlert = document.getElementById('alert');
        textAlert.innerText = "User email didn't match!!"
    }
    else if(password != 'hossain jabed037'){
        const textAlert = document.getElementById('alert');
        textAlert.innerText = "password incorrect!!"
    }
    else if(user != 'hossainmdjabed037@gmail.com' && password != 'hossain jabed037'){
        const textAlert = document.getElementById('alert');
        textAlert.innerText = "No user aviable!!"
    } 
    else if(user == 'hossainmdjabed037@gmail.com' && password == 'hossain jabed037'){
        window.location.href = 'User-page.html'
    }
    else{
        document.getElementById('login-btn').addEventListener('click', function(){
            const passwordMatchAlert = document.getElementById('pass');
            passwordMatchAlert.style.backgroundColor = 'red'
        })
    }
    /* document.getElementById('login-btn').addEventListener('blur', function(){
        const passwordMatchAlert = document.getElementById('pass');
        passwordMatchAlert.style.backgroundColor = 'white'
    }) */
    /* document.getElementById('login-btn').addEventListener('click', function(){
        const textAlert = document.getElementById('alert');
        textAlert.innerText = 'No user avilable!!'
    }) */
})