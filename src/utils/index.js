const Joi =require ("joi");


const registerSchema = Joi.object().keys({
    sector: Joi.string().required(),
    fullName: Joi.string().required(),
    
})



module.exports = {
  registerSchema,
 
};