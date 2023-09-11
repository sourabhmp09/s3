const mongoose =require("mongoose");
const validator=require("validator");
const bcrypt = require("bcryptjs"); 
const crypto =require("crypto");
 const jwt =require("jsonwebtoken");

const userSchema =new mongoose.Schema({
    name:{ type  : String,
        required:[ true,"please enter name"],
        maxLength:[30,"nmae cannot extend 30 charectar"],
         minLength:[4,"name should have more then 4 charactor"]
    },
     email:{type: String,
           required:[true,"please enter your email"],
           unique:true,
           validate:[validator.isEmail,"please enter valid email"]
     },
     password:{
        type:String,
        required:[   true,"please enter Pasword"],
         minLength:[4,"name should have more then 8 charactor"],
         select:false
     },

     avatar: 
        {
          public_id: {
            type: String,
            // required: true,
          },
          url: {
            type: String,
            // required: true,
          },

        
        }, 
        createdAt: {
          type: Date,
          default: Date.now,
        },
        role:{ type:String,
            default:"user"
            },
 
                 resetPasswordToken:String,
                 resetPasswordExpire:Date,

});





userSchema.pre("save",async function(next){
    
  if(!this.isModified("password")){
      next();
  }

  this.password = await bcrypt.hash(this.password,10);
})


// JWT TOKEN

userSchema.methods.getJWTToken = function(){
return jwt.sign({id:this._id},process.env.JWT_SECRET,{
  expiresIn:process.env.JWT_EXPIRE,
});
}


// compare passwords

userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
}


//Generating password reset token

userSchema.methods.getResetPasswordToken = function(){
console.log("  userSchema.methods.getResetPasswordToken ");
//generating token

const resetToken = crypto.randomBytes(20).toString("hex");

//hashing and adding to userSchema

this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

this.resetPasswordExpire = Date.now()+15*60*1000;

return resetToken;
};


module.exports = mongoose.model("User",userSchema);