function getUsers(req, res, next) {
  return res.status(200).json({users: "user"});
}

module.exports = { getUsers };
