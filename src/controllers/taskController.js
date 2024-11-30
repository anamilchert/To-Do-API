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

  const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
  
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Task not found" });
    }
  
    tasks[taskIndex] = { id: parseInt(id), title, description };
    res.status(200).json(tasks[taskIndex]);
  };
  
  const deleteTask = (req, res) => {
    const { id } = req.params;
  
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Task not found" });
    }
  
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  };
  
  module.exports = { createTask, getTasks, updateTask, deleteTask };  