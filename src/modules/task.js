export default class Task {
    constructor(index, description, completed = false) {
      this.index = index;
      this.description = description;
      this.completed = completed;
    }
  }