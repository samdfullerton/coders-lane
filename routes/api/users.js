const express = require ('express') 
const router = express.Router()
const gravatar = require ('gravatar')
const bcrypt = require ('bcryptjs')
const {check, validationResult} = require ('express-validator')
const User = require('../../models/User')


// 
router.post('/',[
   check( 'name', 'name is required')
   .not()
   .isEmpty(),
   check('email', 'Please include email').isEmail(),
   check('password','please enter a password with 6 or more characters').isLength({ min: 6})
] ,
async(req, res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(404).json({errors: errors.array()})
    }
    
    const { name, email, password }= req.body;   
    
    try {
     // see user existence
     let user = await User.findOne({ email})
     if(user) {
         res.status(400).json({errors: [{msg: "user already exists"}]})

     }
    // get gravatar
    const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
    })

    user = new User({
        name,
        email,
        avatar,
        password
    });
    
    // password encryption
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password,salt)

    await user.save();
    // returnJsonwebtoken
        
    res.send('User Registered')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
        
    }

    // get gravatar
    // password encryption
    // returnJsonwebtoken


}
);

module.exports = router