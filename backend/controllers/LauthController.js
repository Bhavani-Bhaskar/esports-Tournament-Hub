// controllers/authController.js
import User from '../models/User.js';
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export default loginUser;