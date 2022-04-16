const asyncHandler = require("express-async-handler");

//@desc  Get goals
//@route GET /api/goals
//@access = Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

//@desc  Set goals
//@route PST /api/goals
//@access = Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text body");
  }
  res.status(200).json({ message: "set goals" });
});

//@desc  Update goal
//@route PUT /api/goals/:id
//@access = Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

//@desc  Delete goal
//@route DELETE /api/goals/:id
//@access = Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
