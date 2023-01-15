const {Router} = require('express');

const userRouter = Router()

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:userId', UserController.getOneUser);
userRouter.delete('/:userId', UserController.deleteUser);
userRouter.put('/:userId', UserController.updateUser)

module.exports = userRouter;