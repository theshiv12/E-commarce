const Role = require("./role.service");

exports.create = async (req, res) => {
  try {
    const role = await Role.createRole(req.body);
    if (role instanceof Error) {
      throw new Error(role?.message);
    }

    return res.status(201).json({
      success: true,
      message: role,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
