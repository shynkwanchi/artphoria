import mongoose from "mongoose";

const MemberSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    birthday: {
        type: Date,
        require: true,
    },
    gender: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    location: {
        type: String,
    },
    biography: {
        type: String,
    },
    joinDate: {
        type: Date,
        default: new Date(),
    }
});

export default MemberSchema;