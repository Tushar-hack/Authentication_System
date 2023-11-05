import otpGenerator from 'otp-generator';

function otp_generator() {
    return otpGenerator.generate(6,{specialChars: false, lowerCaseAlphabets:false, upperCaseAlphabets:false});
}

export{
    otp_generator
}