const express = require ('express') 
const router = express.Router()



// 
router.get('/', (req,res)=> res.send('postse Route'))

module.exports = router