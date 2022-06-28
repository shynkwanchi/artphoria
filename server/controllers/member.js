import bcrypt from "bcrypt";
import MemberModel from "../models/member.js";

// SUPPLEMENTARY FUNCTIONS
function validateFullName(fullNameInput) {
    const fullNameRegEx = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";

    return fullNameInput.trim().match(fullNameRegEx);
}

function validateUsername(usernameInput) {
    const usenameRegex = "^[a-zA-z0-9]+$";

    return usernameInput.trim().match(usenameRegex);
}

function validateEmail(emailInput) {
    const emailRegEx = "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$";
    
    return emailInput.trim().match(emailRegEx);
}

// MAIN FUNCTIONS
export const signUp = async (req, res) => {
    try {
        const { fullName, username, email, birthday, password, verifyPassword } = req.body;

        if (!fullName || !username || !email || !birthday || !password || !verifyPassword)
            return res.status(400).json({ msg: "Please enter all required fields! "});

        if (!validateFullName(fullName))
            return res.status(400).json({ msg: "Please enter the CORRECT fullname format!" });

        if (!validateUsername(username))
            return res.status(400).json({ msg: "Username contains ONLY letters or numbers!" });

        if (!validateEmail(email))
            return res.status(400).json({ msg: "Please enter the CORRECT email format!" });

        if (password.trim().length < 8)
            return res.status(400).json({ msg: "Password contains AT LEAST 8 characters!" });

        if (verifyPassword.trim() !== password.trim())
            return res.status(400).json({ msg: "Please re-enter the SAME password!" });

        let foundMember = await MemberModel.findOne({username: username.trim() });
        if (foundMember)
            return res.status(400).json({ msg: "Username already exists!" });

        foundMember = await MemberModel.findOne({ email: email.trim() });
        if (foundMember)
            return res.status(400).json({ msg: "Email already exists!" });

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newMember = new MemberModel({
            fullName: fullName,
            username: username,
            email: email,
            birthday: new Date(birthday),
            password: hashedPassword,
            joinDate: new Date()
        });

        await newMember.save();
        return res.json({ msg: "Sign up successfully "})
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
};

export const signIn = async (req, res) => {
    res.send("SIGN IN LOGIC HERE");
};