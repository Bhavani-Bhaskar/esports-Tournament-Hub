// models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
});

// Encrypt password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema);

export default User;
