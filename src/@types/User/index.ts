export interface User {
  _id: string;
  email: string;
  password: string;
  confirmPassword: string;
  tasks: {
    _id: string;
    isCompleted: boolean,
    taskTitle: string,
    categoryValue: string,
    dificultValue: string
  }[]
}
