const checkValidData = (name, email, password)=>{
    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    
    if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}

export default checkValidData;