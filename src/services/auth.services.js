var User = require('../models/user.model')

const changePassword = async (id, newPass) => {
  return await User.findByIdAndUpdate({_id: id}, {password : newPass});
};
const changeInfo = async (id, name, phone, address) => {
  return await User.findByIdAndUpdate({_id: id}, {name : name, phone: phone, address: address});
};
const findUserByID = async (id) =>{
  try {
    return await User.findOne({_id: id})
  } catch (error) {
    return null;
  }
}
const removeUserById = async(id) => {
  try{
    return await User.remove({ _id: id });
  }catch(error){
    return null;
  }
}
  module.exports = {
    changePassword,
    changeInfo,
    removeUserById,
    findUserByID
  };