const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://anujgargcse:4epgXhKmPDI1@ep-steep-meadow-a1yy0vxv.ap-southeast-1.aws.neon.tech/skillslash?sslmode=require"
);

const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
    underscored: true,
    timestamps: false
});

sequelize.sync().then(() => {
  console.log("DB Synced");

  User.create({
    fullName: "Anuj Garg",
    email: "anuj@ss.com",
  },
  )
});
