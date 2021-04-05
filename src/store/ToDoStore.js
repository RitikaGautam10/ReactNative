import {action, makeObservable, observable} from 'mobx';

class ToDoStore {
  constructor() {
    makeObservable(this);
  }
  @observable list = [];

  @action
  todo(content) {
    this.list = [...this.list, content];
  }
  @action removetodo(id) {
    this.list = this.list.filter((item) => item.Id !== id);
  }
  @action Updatedtodo(newData) {
    this.list = this.list.map((item) =>
      item.Id !== newData.Id ? item : newData,
    );
  }
}

export default new ToDoStore();
