let btn = document.getElementById('btnSubmit');

        function checker(){
            let user = document.querySelector('#username').value;
            let subject = document.querySelector('#sub').value;
            let phone = document.querySelector('#phone').value;
            let email = document.querySelector('#email').value;
            let password = document.querySelector('#password').value;
            let password2 = document.querySelector('#password2').value;
            let textArea = document.querySelector('#textArea').value;
            let text = '';
            // RegExp

            if (user == ""){
                text = 'Username cant be empty'
                nameError.innerHTML = text;
                document.querySelector('#username').classList.add('errorborder')
                return false
            }
            if(user.length < 5){
                text = 'Username must be more than 5!'
                nameError.innerHTML = text;
                document.querySelector('#username').classList.add('errorborder')
                return false;
            }else{
                nameError.innerHTML = '';
                document.querySelector('#username').classList.remove('errorborder')
                document.querySelector('#username').classList.add('successborder')
            }
            if (subject == ""){
                text = 'Subject field cant be empty'
                subError.innerHTML = text;
                document.querySelector('#sub').classList.add('errorborder')
                return false
            }else{
                subError.innerHTML = '';
                document.querySelector('#sub').classList.remove('errorborder')
                document.querySelector('#sub').classList.add('successborder')
            }
            if (isNaN(phone) || phone.length < 14){
                text = 'phone-number field cant be empty'
                phError.innerHTML = text;
                document.querySelector('#phone').classList.add('errorborder')
                return false
            }
           /* if(phone == ""){
                text = 'phone-number field cant be empty'
                phError.innerHTML = text;
                document.querySelector('#phone').classList.add('errorborder')
                return false
            }
             if(phone.length < 14){
                text = 'phone-number must be more than 14!'
                phError.innerHTML = text;
                document.querySelector('#phone').classList.add('errorborder')
                return false;
            }*/else{
                phError.innerHTML = '';
                document.querySelector('#phone').classList.remove('errorborder')
                document.querySelector('#phone').classList.add('successborder')

            }
            if (email == ""){
                text = 'Email field cant be empty and must end with .com'
                emailError.innerHTML = text;
                document.querySelector('#email').classList.add('errorborder')
                return false
            }else{
                emailError.innerHTML = '';
                document.querySelector('#email').classList.remove('errorborder')
                document.querySelector('#email').classList.add('successborder')

            }
            if (password == ""){
                text = 'Password should contain characters and numbers'
                passError.innerHTML = text;
                document.querySelector('#password').classList.add('errorborder')
                return false
            }
            if (password.length < 10){
                text = 'Password must be more than 10!'
                passError.innerHTML = text;
                document.querySelector('#password').classList.add('errorborder')
                return false;
            }else{
                passError.innerHTML = '';
                document.querySelector('#password').classList.remove('errorborder')
                document.querySelector('#password').classList.add('successborder')
            }
           /* if (password == number){
                text = 'Password must contain characters and numbers'
                passError.innerHTML = text;
                document.querySelector('#password').classList.add('errorborder')
                return false
            }*/
            if (password2 == ""){
                text = 'Please repeat password'
                pass2Error.innerHTML = text;
                document.querySelector('#password2').classList.add('errorborder')
                return false
            }
            if(password2.length < 10){ 
                text = 'Password must be more than 10!'
                pass2Error.innerHTML = text;
                document.querySelector('#password2').classList.add('errorborder')
                return false;
            }else{
                pass2Error.innerHTML = '';
                document.querySelector('#password2').classList.remove('errorborder')
                document.querySelector('#password2').classList.add('successborder')
            }
           /* if (password2 == password){
                text = 'Please repeat exact password'
                pass2Error.innerHTML = text;
                document.querySelector('#password2').classList.add('errorborder')
                return false
            }*/
           /* if(user.length < 5){
                text = 'Username must be more than 5!'
                nameError.innerHTML = text;
                document.querySelector('#username').classList.add('errorborder')
                return false;
            }*/
           
            document.getElementById('jomo').innerHTML = 'Successfully Registered'
            return false

           
            
        }
       