
export default function newTask(name, description, date, priority, project = '') {
  return {
    name, description, date, priority, project,
  };
}
