const {calcDate,rightNow,calcHours} = require('./middleware/date');

// Table of all User's Sleeps
module.exports = function(sequelize, DataTypes) {
  const Sleep = sequelize.define('Sleep', {
    date: {
     // calcDate //finds yesterday and displays as string
      type: DataTypes.DATE
    },
    toBed: {
      type: DataTypes.STRING,
      validate: {
        isBefore: rightNow //what it looks like
      }
    },
    toSleep: {
      type: DataTypes.STRING,
    },
    wokeUp: {
      type: DataTypes.STRING,
      validate: {
        isAfter: rightNow
      }
    },
    hours: {
      //calcHours // TODO function that calculates the hours slept
      type: DataTypes.DOUBLE
    },
    restful: {
      type: DataTypes.BOOLEAN,
    },
    rested: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    hooks: {
      beforeCreate: function(Sleep,done) {
        done(null,Sleep);
      }
    }
  });
  Sleep.associate = function(models){
    Sleep.belongsTo(models.Profile);
  };
  return Sleep;
};