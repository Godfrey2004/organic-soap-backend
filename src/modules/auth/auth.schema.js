export const registerSchema={
    name:{
        required:true
    },
    email:{
        required:true
    },
    password:{
        required :true,
        minLength:6
    }
};