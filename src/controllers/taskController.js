import Task from '../models/taskModel.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};


// Controlador para crear una nueva tarea
export const createTask = async (req, res) => {
  const { title, completed } = req.body;
  const newTask = new Task({ title, completed });
  try {
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

// Controlador para obtener una tarea por su ID
export const getTaskById = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findById(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

// Controlador para actualizar una tarea
export const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(taskId, { title, completed }, { new: true });
    if (task) {
      res.json({ message: 'Tarea actualizada exitosamente', task });
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar la tarea:', error);
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

// Controlador para eliminar una tarea
export const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(taskId);
    if (task) {
      res.json({ message: 'Tarea eliminada exitosamente' });
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar la tarea:', error);
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};

