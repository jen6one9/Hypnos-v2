// Table of User's Profile Settings
module.exports = function(sequelize, DataTypes) {
  const Profile = sequelize.define('Profile', {
    age: {
      type: DataTypes.STRING,
    }
  });
  return Profile;
};