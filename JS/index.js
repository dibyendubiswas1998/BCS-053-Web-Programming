const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const username = document.getElementById('username');
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const options1 = document.getElementById('options1');


const  SetErrorMsg = (input, ErrorMsg) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = ErrorMsg;
	formControl.className = "form-control error";
}
const SetSuccessMsg = (input) =>{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


const validation1 = ()=>{
    // fname, lname and username
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    // fname (frist name)
    if(fnameVal === ""){
        SetErrorMsg(fname, "Frist name can't blank");
    }else if(fnameVal < 1){
        SetErrorMsg(fname, "Enter your name properly");
    }
    else{
        SetSuccessMsg(fname);
    }

    // lname (Last name)
    if(lnameVal === ""){
        SetErrorMsg(lname, "Frist name can't blank");
    }else if(lnameVal < 1){
        SetErrorMsg(lname, "Enter your name properly");
    }
    else{
        SetSuccessMsg(lname);
    }
};
const validation2 = ()=>{
    const usernameVal = username.value.trim();
    var symbol = usernameVal.indexOf('@');
    var dot = usernameVal.lastIndexOf('.');

    if(usernameVal == ""){
        SetErrorMsg(username, "email can't blank");
    }
    else if(symbol < 1){
        SetErrorMsg(username, "invalid email");
    }
    else if(dot <= symbol+2){
        SetErrorMsg(username, "invalid email");
    }
    else{        
        SetSuccessMsg(username);
    } 
}
const validation3 = ()=>{
    const password1Val = password1.value.trim();
    const password2Val = password2.value.trim();

    if(password1Val == ""){
        SetErrorMsg(password1, "password can't blank");
    }
    else if(password1Val.length < 6){
        SetErrorMsg(password1, "minimum 6 character");
    }
    else if(password1Val.search(/[0-9]/) == -1){
        SetErrorMsg(password1, "use at least 1 number");
    }
    else{
        SetSuccessMsg(password1);
    }

    if(password2Val == ""){
        SetErrorMsg(password2, "confirm password can't blank");
    }
    else if(password2Val != password1Val){
        SetErrorMsg(password2, "both are not match");
    }
    else if(password2Val == password1Val){
        SetSuccessMsg(password2);
    }
    else{
        SetSuccessMsg(password2);
    }

}
const validation4 = () =>{
    const state = document.getElementById('state');
    if(options1.options[options1.selectedIndex].text === 'Select City'){
        SetErrorMsg(options1, "Select your city");
        state.innerHTML = "";
    }
    else if(options1.options[options1.selectedIndex].text === 'Kolkata'){
        state.innerHTML = "West Bengal";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'Jaipur'){
        state.innerHTML = "Rajasthan";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'Siliguri'){
        state.innerHTML = "West Bengal";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'Bengaluru'){
        state.innerHTML = "Karnataka";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'Chennai'){
        state.innerHTML = "Tamil Nadu";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'New Delhi'){
        state.innerHTML = "Delhi";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'Mumbai'){
        state.innerHTML = "Maharashtra";
        SetSuccessMsg(options1);
    }
    else if(options1.options[options1.selectedIndex].text === 'Hyderabad'){
        state.innerHTML = "Telangana";
        SetSuccessMsg(options1);
    }
    
}
// const Validation = (event) =>{
//     event.preventDefault();
//     validation1();
//     validation2();
//     validation3();
//     validation4();
    
// }

document.getElementById('btn').addEventListener('click', (event)=>{
    event.preventDefault();
    validation1();
    validation2();
    validation3();
    validation4();
    // document.getElementById('myform').submit();
});
