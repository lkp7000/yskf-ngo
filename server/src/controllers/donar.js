import createError from "http-errors";

import db from "@/database";

export const register = async (req, res, next) => {
  try {
    // Create user
    const user = await db.models.donars.create(req.body, {
      fields: ["firstName", "lastName", "email", "amount", "status"],
    });

    // Generate and return tokens
    // const token = user.generateToken();
    // const refreshToken = user.generateToken("2h");
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

export const getDonarList = async (req, res, next) => {
  try {
    const donars = await db.models.donars.findAll({
      where: {
        status: true, // Assuming `status` is a boolean indicating active donars
      },
      order: [["createdAt", "DESC"]],
      attributes: ["transactionId", "firstName", "lastName", "email", "amount", "status", "createdAt", "updatedAt"],
    });
    console.log("Active Donars:", JSON.stringify(donars, null, 2));
    res.status(201).json(donars);
  } catch (error) {
    console.error("Error fetching active donars:", error);
  }
};
