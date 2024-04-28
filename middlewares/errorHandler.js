module.exports = (error, req, res, next) => {
    console.log(error)
        let status
        let message
    
        switch (error.name) {
            case 'SequelizeUniqueConstraintError':
                status = 400
                message = 'Email must be unique'
                break;
            case 'email/password required':
                status = 400
                message = 'email/password is required'
                break;
            case 'SequelizeValidationError':
            case 'SequelizeUniqueValidationError':
                status = 400
                message = error.errors[0].message
                break;
            case 'InvalidToken':
            case 'JsonWebTokenError':
                status = 401
                message = 'Invalid Token'
                break;
            case 'Unauthenticated':
                status = 401
                message = 'Unauthenticated'
                break;
            case 'invalid email/password':
                status = 401
                message = 'Invalid email/password'
                break;
            case 'InvalidQuery':
                status = 401
                message = 'Search term is required'
                break;
            case 'Forbidden':
                status = 403
                message = 'You are not authorized'
                break;
            case 'NotFound':
                status = 404
                message = 'Data not found!'
                break;
            case 'SequelizeForeignKeyConstraintError':
                status = 404
                message = 'Character not found'
                break;
            default:
                status = 500
                message = 'Internal Server Error'
                break;
        }
    
        res.status(status).json({ message: message })
    }