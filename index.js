const nameText = document.getElementById("name");
const passwordText = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener('submit', (e) =>{
    
    let messages =[];
    if(nameText.value === '' || nameText.value == null)
        messages.push("Name is requierd!!!");
    if(passwordText === '' || passwordText == null)
        messages.push("Password is requierd!!!");
    if(passwordText.value.length < 6)
        messages.push("Password is to short");

    if(messages.length > 0)
    {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
    
});