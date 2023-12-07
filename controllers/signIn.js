const SignIn=require('../Modals/signinSchema')
const jwt=require('jsonwebtoken')
module.exports.SignInUser=async function(req,res){
  
    try{
        let user = await SignIn.findOne({email: req.body.email});  
        if(!user) {
            return res.status(401).json({msg:"Email not found"})
            }

            if (user.password!==user.confirmPassword) {
                return res.status(401).send({ accessToken: null, msg: "Invalid Password!" });
                } else {
                    var token = jwt.sign({ id: user._id }, "himynameisritekmungali000nictomeetyou" , { expiresIn: '5h' });
                    
                    return res.status(200).send({accessToken :token,msg:'successfully logged in',user:user});
                    }
                    }catch (err) {
                        console.log(err)
                        return res.status(500).send({ msg: err })
                        };
                        
}