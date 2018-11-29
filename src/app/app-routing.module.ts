import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FileComponent } from './file/file.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "file",
    component: FileComponent
  },
  {
    path: "show",
    component: ShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
