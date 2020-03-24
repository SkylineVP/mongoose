const User = require('../models/Users');

const postUser = async function ( req, res, next ) {
	const {body: user} = req;

	User.create(user,
		( err, user ) => {
			if (err) {
				console.error(err);
				res.send('BadRequest').status(400);
			}
			return res.send(user).status(200);
		});
};

const getUserByEmail = async function ( req, res, next ) {
	console.log(req);
	const {params: {email}} = req;

	User.findOne({email}, function ( err, user ) {
		if (err) {

			res.send('BadRequest').status(400);
		}
		return res.send(user).status(200);
	})
};
const updateUser = async function ( req, res, next ) {

	(User.updateOne({email: req.params.email},
		req.body,
		function ( err, updatedUser ) {
			if (err) {
				res.send('BadRequest').status(400);
			}
			return res.send(updatedUser).status(200);
		}));

};
const deleteUser = async function ( req, res, next ) {

	User.deleteOne({email: req.params.email},
		function ( err, deletedUser ) {
			if (err) {
				res.send('BadRequest').status(400);
			}
			return res.send(deletedUser).status(200);
		});

};
module.exports = {
	postUser,
	getUserByEmail,
	updateUser,
	deleteUser
};