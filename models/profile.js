//this creates the table profiles if it doesn't Exist and column for age.

module.exports = function(sequelize, Datatypes) {
    var Profile = sequelize.define("Profile", {
        //Database fill for survey form
        age: {
            type: Datatypes.INTEGER,
        }

    })
    return Profile;
}

