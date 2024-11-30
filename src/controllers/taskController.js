let tasks = [];

const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const getTasks = (req, res) => {
    res.status(200).json(tasks);
  };
  
  module.exports = { createTask, getTasks };  