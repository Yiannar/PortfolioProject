const express = require('express');
const {
  getAllUserProfiles,
  getUser,
  loginUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../queries/user_profile/user_profile');

const profile = express.Router();

// INDEX
profile.get('/', async (req, res) => {
  try {
    const allUsers = await getAllUserProfiles();
    if (allUsers[0]) {
      res.status(200).json(allUsers);
    } else {
      res.status(500).json({ error: 'Unable to get all users' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// SHOW
profile.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userProfile = await getUser(id);
    if (!userProfile.message) {
      res.status(200).json(userProfile);
    } else {
      res.status(400).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// LOGIN
profile.post('/login', async (req, res) => {
  try {
    const loginResult = await loginUser(req.body);
    if (loginResult.success) {
      res.status(200).json(loginResult.user);
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// CREATE
// profile.post('/', async (req, res) => {
//   try {
//     const profile = await createUser(req.body);
//     res.status(200).json(profile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// DELETE
profile.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProfile = await deleteUser(id);
    res.status(200).json(deletedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// UPDATE
profile.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProfile = await updateUser(id, req.body);
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = profile;
