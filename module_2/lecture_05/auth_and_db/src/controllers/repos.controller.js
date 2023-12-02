async function getAllRepos(req, res) {
  res.send('getAllRepos');
}

async function getRepoById(req, res) {
  res.send('getRepoById');
}

async function createRepo(req, res) {
    res.send('createRepo');
}

async function updateRepo(req, res) {
    res.send('updateRepo');
}

async function deleteRepo(req, res) {
    res.send('deleteRepo');
}

module.exports = {
  getAllRepos,
  getRepoById,
  createRepo,
  updateRepo,
  deleteRepo,
};
