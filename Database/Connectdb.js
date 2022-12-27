const mongoose=require('mongoose');

exports.connectMongoose=()=>{
    mongoose
        .connect("mongodb+srv://aminul123:aminul1235@loan-cluster1.ru67a7y.mongodb.net/loan-form1")
        .then((e)=>console.log(`Database connected at ${e.connection.host}`))
        .catch((e)=>console.log(e));
};

const userschema= new mongoose.Schema({

    
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    phone_no:{
        type:String,
    },
    age:{
        type:String,
    },
    applicants_business_name:{
        type:String,
    },
    GST_no:{
        type:String,
    },
    address:{
        type:String,
    },
    business_id:{
        type:String,
    },
    loan_amount:{
        type:String,
    },
    interest_rate:{
        type:String,
    },
    loan_tenure:{
        type:String,
    },
});

exports.User=mongoose.model("User",userschema);
