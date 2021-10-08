import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GamePage } from './game/game.page';
import { CreateUserPage } from './create-user/create-user.page';
import { CreateGroupPage } from './create-group/create-group.page';
import { NavigationPage } from './navigation/navigation.page';
import { WhoArePage } from './who-are/who-are.page';

@NgModule({
  declarations: [AppComponent, GamePage, CreateUserPage, CreateGroupPage, NavigationPage, WhoArePage],
  entryComponents: [],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
