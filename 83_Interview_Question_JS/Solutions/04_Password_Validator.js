// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

const Validator = (password)=>{
    const arr = Array.from(password)
    if (password.length < 8){
        console.log("Your password must be 8 character long")
    }

    const checkCaptialArr = arr.filter((x,i)=>{
        const value = password.charCodeAt(i)
        if (value >= 65 && value <= 90){
            return true
        }
        return false
    })
    const checkSmallArr = arr.filter((x,i)=>{
        const value = password.charCodeAt(i)
        if (value >= 97 && value <= 122){
            return true
        }
        return false
    })

    const checkDigit = arr.filter((x, i)=>{
        if (typeof Number(x)  == typeof Number(10)){
            return true
        }
        return false
    })
    if (checkCaptialArr.length === 0){
        console.log("Your password must contain atleast one Captial letter")
    }
    if (checkSmallArr.length === 0){
        console.log("Your password must contain atleast one Small letter")
    }
    if (checkDigit.length === 0){
        console.log("Your password must contain atleast one Digit")
    }
    if (checkCaptialArr.length !== 0 &&  checkSmallArr !== 0  && checkDigit.length !==0 && arr.length >= 8 ){
        console.log("Your password looks good !!")
    }
}

Validator("348Redsff")