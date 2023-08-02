import { DataTypes } from "sequelize";
import { orm } from "../connection.js";

export const credentialModel = orm.define("credential", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.BLOB,
    allowNull: false,
    get() {
      return this.getDataValue("data").toString("utf8"); // or whatever encoding is right
    },
  },
});