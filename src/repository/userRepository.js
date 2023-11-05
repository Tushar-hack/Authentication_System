import User from '../models/user.js';

class UserRepository{
    async createUser (UserData) {
        try {
            const user = await User.create(UserData);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findByEmail (userEmail){
        try {
            const user = await User.findOne({email: userEmail});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;