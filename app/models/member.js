
module.exports = function(sequelize, Sequelize) {

	var Member = sequelize.define('member', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING(50),notEmpty: true},
		lastname: { type: Sequelize.STRING(50),notEmpty: true},
		username: {type:Sequelize.TEXT},
		about : {type:Sequelize.TEXT},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

	return Member;

}