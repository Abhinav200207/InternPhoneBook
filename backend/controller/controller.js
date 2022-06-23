const Phone = require('../model/model');

exports.get = async (req, res) => {
    try {
        const phone = await Phone.find();
        res.status(200).json(phone);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.create = async (req, res) => {
    try {
        const phone = await Phone.create(req.body);
        res.status(200).json(phone);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteContact = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

