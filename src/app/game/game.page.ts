import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Game } from '../shared/model/game.model';
import { Question } from '../shared/model/questions.model';
import { GameService } from '../shared/service/game.service';
import { QuestionsService } from '../shared/service/questions.service';


@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss']
})
export class GamePage implements OnInit {


  constructor(public activatedRoute: ActivatedRoute, public router: Router, public toast: ToastController, public questionsService: QuestionsService, public gameService: GameService) {}

  game: Game = {
    user_id: null,
    question_id: null,
    answer_user: null
  }

  questions: Question[];
  options: Question;
  indice = 0;
  mostrarResposta: boolean = false;
  alternativaCorreta: string;
  fimPartida: boolean;
  naoMostrarResposta: boolean;

  ngOnInit() {
    this.mostrarResposta = false;
    this.game.user_id = this.activatedRoute.snapshot.params.idUser;
    const idGrupo = this.activatedRoute.snapshot.queryParamMap.get('roomId')
    this.questionsService.questions(idGrupo).subscribe(questions => {
      this.questions = questions;
    })
  }

  responseQuestions() {
    this.game.question_id = this.questions[this.indice].id,
    this.gameService.game(this.game).subscribe(()=> {
      this.mostrarResposta = true;
      if(this.questions[this.indice].correct_answer == this.game.answer_user){
        this.alternativaCorreta = "ACERTOU"
      } else {
        this.alternativaCorreta = "ERROU"
      }
    })
  }

  continue() {
    let idUser = this.game.user_id;
    if(this.indice < this.questions.length - 1){
    this.indice = this.indice + 1;
    this.mostrarResposta = false;
  } else if (this.indice === this.questions.length -1) {
    this.router.navigate([`${idUser}/finished`]);
  }
}

  answer() {
    this.indice = this.indice + 1;
  }

  setCreateGameAttribute(name: string, value: any) {
    this.game[name] = value;
  }

  
  
}