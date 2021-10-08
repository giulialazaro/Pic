import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateGroupPage } from './create-group/create-group.page';
import { CreateUserPage } from './create-user/create-user.page';
import { GamePage } from './game/game.page';
import { HomePage } from './home/home.page';
import { FinishedPage } from './finished/finished.page';
import { NavigationPage } from './navigation/navigation.page';
import { componentFactoryName } from '@angular/compiler';
import { WhoArePage } from './who-are/who-are.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: ':codeGroup/create-user',
    component: CreateUserPage
  },
  {
    path: 'create-user',
    component: CreateUserPage
  },
  {
    path: 'create-group',
    component: CreateGroupPage,
  },
  {
    path: ':idUser/game',
    component: GamePage
  },
  {
    path: 'navigation',
    component: NavigationPage,
    children: [
      {
        path: 'who-are',
        component: WhoArePage
      }
    ]
  },
  {
    path: ':idUser/finished',
    component: FinishedPage
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
