const aiService = require('../services/ai.service')

try {
    module.exports.getResponse = async (req,res)=>{
        const prompt = req.body.prompt;
        if (!prompt) {
            return res.status(400).send('Prompt is required!')
        }
    
        const response = await aiService(prompt);
    
        res.send(response);
    }
} catch (error) {
    console.error("Response Error", error.message )
}