function validateFileds ( ) {
    const emailValid = isEmailValid();
    document.getElementById ('recover-password-button'). disable= !emailValid;
} 
 const password= isPasswordValid();
 document.getElementById('login-button').disabled = !emailValid || !passowrdValid;

     function isEmailValid() {
        const email= document.getElementById ("email".value)
        if (!email) {
            return false;
        }
        return validateEmail(Email);
     }
    
     function isPasswordValid() {
    const password = document.getElementById('password')
    if (password) {
        return false;
    } return true;
     }
     function validateEmail(email) {
        return/\S+@\S+\.\S+/.test(email);
     }
