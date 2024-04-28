const { Phone } = require('../models')
const { Op } = require('sequelize');



class PhoneController {

    static async fetchPhones(req, res, next) {
        try {

            let phones = await Phone.findAll();

            res.status(200).json(phones);
        } catch (error) {
            next(error);
        }
    }

    static async addPhone(req, res, next) {
        try {
            const { brand, model, storage, color, price, quantity } = req.body;

            const newPhone = await Phone.create({ brand, model, storage, color, price, quantity });
    
            res.status(200).json(newPhone);
        } catch (error) {
            next(error);
        }
    }
    
    static async editPhone(req, res, next) {
        try {
            const phoneId = req.params.id;
            const {id, brand, model, storage, color, price, quantity } = req.body;
    
            const phone = await Phone.findByPk(phoneId);
            if (!phone) {
                throw { name: "NotFound" };
            }
    
            await Phone.update({id, brand, model, storage, color, price, quantity }, {
                where: {
                    id: phoneId
                }
            });
    
            res.status(200).json({ message: `Phone with id ${phoneId} has been updated` });
        } catch (error) {
            next(error);
        }
    }
    
    static async deletePhone(req, res, next) {
        try {
            const phoneId = req.params.id;
    
            const phone = await Phone.findByPk(phoneId);
            if (!phone) {
                throw { name: "NotFound" };
            }
    
            await Phone.destroy({
                where: {
                    id: phoneId
                }
            });
    
            res.status(200).json({ message: `Phone with id ${phoneId} has been deleted` });
        } catch (error) {
            next(error);
        }
    }

    static async search(req, res, next) {
        try {
            const { searchTerm } = req.query;
    
            if (!searchTerm) {
                throw { name: "InvalidQuery" };
            }
    
            const phones = await Phone.findAll({
                where: {
                    [Op.or]: [
                        { brand: { [Op.like]: `${searchTerm}%` } },
                        { model: { [Op.like]: `${searchTerm}%` } }
                    ]
                }
            });

            if (phones.length === 0) {
                res.status(404).json({ message: "No Result" });
                return;
            }
    
            res.status(200).json(phones);
        } catch (error) {
            next(error);
        }
    }
    
    
    

}

module.exports = PhoneController