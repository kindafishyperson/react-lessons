export const completed = 'Completed';
export const inProgress = 'In Progress';
export const statuses = {
  false: inProgress,
  true: completed,
};
export class Item {
  constructor({ id, text = 'None', isCompleted = false }) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}
