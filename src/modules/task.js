/* eslint-disable linebreak-style */
export default class TaskList {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}
