const Phone = require('../model/model');

exports.get = async (req, res) => {
    try {
        const keyword = req.query.keyword
            ? {
                first: {
                    $regex: req.query.keyword,
                    $options: "i",
                },
            }
            : {};
        const phone = await Phone.find({ ...keyword });
        res.status(200).json(phone.reverse());
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
        const phone = await Phone({ _id: req.query.id });

        if (!phone) {
            return res.status(500).json({
                message: error.message
            });
        }
        const newPhone = await Phone.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidator: true,
            useFindAndModify: false
        })

        res.status(200).json({
            sucesss: true,
            newPhone
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteContact = async (req, res) => {
    try {
        const phone = await Phone({ _id: req.query.id });

        if (!phone) {
            return res.status(500).json({
                message: error.message
            });
        }

        await Phone.findByIdAndDelete(req.query.id);

        res.status(200).json({
            success: true,
            message: "deleted sucessully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

