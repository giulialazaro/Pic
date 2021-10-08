import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CreateGroup, ListGroup } from '../shared/model/group.model';
import { GroupService } from '../shared/service/group.service';

@Component({
  selector: 'app-who-are',
  templateUrl: 'who-are.page.html',
  styleUrls: ['who-are.page.scss']
})
export class WhoArePage {


  constructor(public groupService: GroupService, public activatedRoute: ActivatedRoute, public router: Router, public toast: ToastController) {}
  
  
}