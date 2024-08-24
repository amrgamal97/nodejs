const {body} = require('express-validator');

const validationSchema = () => {
    return [body('title').notEmpty().withMessage('insert title'), body('price').notEmpty().withMessage('insert price')]
}

module.exports = validationSchema