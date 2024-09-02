import { DataTypes, Model } from "sequelize";

export default function (sequelize) {
  class Donars extends Model {
    static associate(models) {
      Donars.belongsTo(models.donars, { primaryKey: "transactionId" });
    }
  }

  Donars.init(
    {
      transactionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },

    {
      modelName: "donars",
      sequelize,
    }
  );

  return Donars;
}
