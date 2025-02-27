const aiService = require('../services/ai.service')

try {
    module.exports.getResponse = async (req,res)=>{
        const code = req.body.code;
        if (!code) {
            return res.status(400).send('code is required!')
        }
    
        const response = await aiService(code);
    
        res.send(response);
    }
} catch (error) {
    console.error("Response Error", error.message )
}