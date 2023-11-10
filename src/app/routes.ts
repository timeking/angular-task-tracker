import {Routes} from "@angular/router";
import {TasksComponent} from "./components/tasks/tasks.component";
import {TaskComponent} from "./components/task/task.component";

const routeConfig: Routes = [
  {
    path: '',
    component: TasksComponent,
    title: 'Default Tasks Page'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    title: 'Tasks Page'
  },
  {
    path: 'tasks/:id',
    component: TaskComponent,
    title: 'Task Page'
  }];

export default routeConfig;
