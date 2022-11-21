import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashBoardComponent } from './layouts/dash-board/dash-board.component';
import { LoginpageComponent } from './mainpagecomponent/loginpage/loginpage.component';
import { ListComponent } from './pageslist/list/list.component';
import { UsersComponent } from './pageslist/users/users.component';

const routes: Routes = [
  {
    path: '',
    component:LoginpageComponent
  },
  //auth layouts
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
      path: '',
      component:LoginpageComponent
    },
      {
      path: 'loginpage',
      component:LoginpageComponent
    }]
  },
  //dashboard
  {
    path: '',
    component: DashBoardComponent,
    children: [{
      path: '',
      component:UsersComponent
    },
      {
        path: 'users',
        component:UsersComponent
      },
      {
        path: 'list',
        component:ListComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
