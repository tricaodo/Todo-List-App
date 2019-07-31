import {Task} from './cockpit/task.model';
import {AngularFireDatabase} from '@angular/fire/database';



export class TasksService{
  private tasks: Task[] = [
    // new Task('Buy Birthday Gift', 'Gift for sister on her birthday'),
    // new Task('Going To Interview', 'Having the interview with Google'),
    // new Task('Having doctor appointment', 'Checking health manually'),
  ];
  constructor(private db: AngularFireDatabase){}
  public getTasks(): Task[]{

    // console.log(this.db);
    return this.tasks;
  }
  public addTask(task: Task): void{
    let id = this.db.createPushId();
    this.db.list('posts').push(task);
    // this.db.object('posts/' + id).set(task);
  }
  fetchTasks(){
    return this.db.list('posts').valueChanges();
  }
}
