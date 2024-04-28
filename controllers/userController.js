const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

class UserController {

    static async register(req, res, next) {
        try {
            console.log(req.body)
            const { email, password, username} = req.body
            const createUser = await User.create({ email, password, username})
            res.status(201).json(createUser)
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw { name: `email/password required` }
            }
            const findUser = await User.findOne({
                where: {
                    email
                }
            })

            if (!findUser) {
                throw { name: `invalid email/password` }
            }

            const passwordValidated = comparePassword(password, findUser.password)

            if (!passwordValidated) {
                throw { name: `invalid email/password` }
            }

            const payload = {
                id: findUser.id
            }

            const access_token = createToken(payload)
            res.status(200).json({ access_token, id: findUser.id})
        } catch (error) {
            next(error)
        }
    }

    static async userProfile(req, res, next) {
        try {
            const userId = req.user.id
            const user = await User.findByPk(userId)
            if (!user) throw { name: "NotFound" }
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    static async editProfile(req, res, next) {
        try {
            const userId = req.params.id;
            const { email, username } = req.body;
            const user = await User.findByPk(userId);
            
            if (!user) {
                throw { name: "NotFound", message: "User not found" };
            }
         
            await User.update({ email, username }, {
                where: {
                    id: userId
                }
            });
    
            res.status(200).json({ message: `Profile for user with id ${userId} has been updated` });
        } catch (error) {
            next(error);
        }
    }
    
    

    static async deleteUser(req, res, next) {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            if (!user) {
                throw { name: "NotFound", message: "User not found" };
            }

            await User.destroy({
                where: {
                    id: userId
                }
            });

            res.status(200).json({ message: `User with id ${userId} has been deleted` });
        } catch (error) {
            next(error);
        }
    }

    
}

module.exports = UserController