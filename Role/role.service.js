const userModel = require("../User/user.model");
const Role = require("./role.model");

exports.createRole = async (roleParam) => {
  try {
    const data = await Role.findOne({ "name": roleParam.name });
    console.log(data);
    if (data) throw new Error(`this ${roleParam.name} already exist `);
    const role = await Role.create(roleParam);
    const x = await userModel.findByIdAndUpdate(
      { _id: roleParam.id },
      { role: role._id }
    );
    return role;
  } catch (error) {
    return error;
  }
};


