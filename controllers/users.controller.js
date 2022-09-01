const getUsers = (req, res) => {
  res.status(200).send("welcome to my second server");
}

const createUser = (req, res) => {
  res.status(201).send("data saved");
}

const updateUser = (req, res) => {
  res.status(200).send("data replaced");
}

const deleteUser = (req, res) => {
  res.status(200).send("data deleted");
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};