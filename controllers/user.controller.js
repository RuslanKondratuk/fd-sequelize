
const {User} = require('../models')

module.exports.createUser = async(req, res, next) => {
    try {
        const {body} = req;
        console.log(body);
        const result = await User.create(body);
        res.status(201).send(result);
    } catch (error) {
        next(error)
    }
}
module.exports.getOneUser = async(req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        res.status(200).send(user);

    } catch (error) {
        next(error)
    }
}
module.exports.getAllUsers = async(req, res, next) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).send(allUsers);
    } catch (error) {
        next(error)
    }
}
module.exports.updateUser = async(req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const [rowCount, [updated]] = await User.update(body,
            {where: {
                id: userId
            }, returning: true
        }
        )
        res.status(201).send(updated)
    } catch (error) {
        next(error)
    }
}
module.exports.deleteUser = async(req, res, next) => {
    try {
        const {params: {userId}} = req;
        const deleteUser = await User.destroy({where: {
            id: userId}

        })
        if(deleteUser){
            res.status(201).send({data: deleteUser});
        } else {
            res.status(404).send("Not OK")
        }

    } catch (error) {
        next(error)
    }
}