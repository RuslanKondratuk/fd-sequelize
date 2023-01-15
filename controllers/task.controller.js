const {Task, User} = require('../models')

module.exports.createTask = async(req, res, nxet) =>{
try {
    const {body, params:{userId}} = req;
    const createdTask = await Task.create({...body, userId});
    res.status(201).send(createdTask);
} catch (error) {

}

}


module.exports.getAllUserTask = async(req, res, nxet) =>{}
module.exports.getOneTask = async(req, res, nxet) =>{}
module.exports.updateTask = async(req, res, nxet) =>{}
module.exports.deleteTask = async(req, res, nxet) =>{}