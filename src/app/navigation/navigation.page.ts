import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CreateGroupPage } from '../create-group/create-group.page';


@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.page.html',
    styleUrls: ['navigation.page.scss']
  })
  export class NavigationPage implements OnInit {

    constructor(public router:Router){}
  
    ngOnInit() {
      this.router.navigate(['navigation/who-are']);
    }

}