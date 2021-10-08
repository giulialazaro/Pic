import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateGroup, ListGroup } from '../shared/model/group.model';
import { GroupService } from '../shared/service/group.service';
import { PointsService } from '../shared/service/points.service';

@Component({
  selector: 'app-finished',
  templateUrl: 'finished.page.html',
  styleUrls: ['finished.page.scss']
})
export class FinishedPage implements OnInit {

  constructor(public pointsService: PointsService, public activatedRoute: ActivatedRoute, public router: Router) {}

  totalPoints = 0;

  ngOnInit() {
    let idUser = this.activatedRoute.snapshot.params.idUser;
    this.pointsService.points(idUser).subscribe(resposta => {
      this.totalPoints = resposta.total_points
    })
  }

}