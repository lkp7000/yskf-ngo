import { Sequelize } from "sequelize";

import * as config from "@/config/sequelize";

// import models
import userModel from "./models/user";
import tweetModel from "./models/tweet";
import donarsModel from "./models/donars";

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

// Create sequelize instance
const sequelize = new Sequelize("yskf_ngo", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

// Import all model files
const modelDefiners = [userModel, tweetModel, donarsModel];

// eslint-disable-next-line no-restricted-syntax
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Associations
Object.keys(sequelize.models).forEach((modelName) => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

export default sequelize;
