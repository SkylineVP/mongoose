const mongoose = require('mongoose');
const yup = require('yup');

const emailValidationSchema = yup.string().email().required();

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true

	},
	role: {
		enum: ['ADMIN', 'USER', 'MODERATOR'],
		type: String,
		required: true
	},
	email: {
		type: String,
		validate: {
			validator: value => emailValidationSchema.validate(value),
			message: 'Email validation failed'
		},
		unique: true
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;