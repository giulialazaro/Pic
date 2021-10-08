import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CreateUser } from '../shared/model/user.model';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.page.html',
  styleUrls: ['create-user.page.scss']
})
export class CreateUserPage implements OnInit {

  ionicForm: FormGroup;
  private termoDeAceite: boolean;

  constructor(public formBuilder: FormBuilder, private alertController: AlertController, public activatedRoute: ActivatedRoute, public userService: UserService, public router: Router) { }

  user: CreateUser = {
    allow_search: null,
    age_group: null,
    sex: null ,
    status: null,
    status_other: null,
    what_brought_you: null,
    what_brought_you_other: null,
    code: null,
    nickname: null
  }

  ngOnInit() {
   this.presentAlert()
   this.user.code = this.activatedRoute.snapshot.params.codeGroup;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'TERMO DE CONSENTIMENTO LIVRE ESCLARECIDO',
      message: 'Você autoriza que suas respostas sejam utilizadas para pesquisas científicas futuras, sem qualquer identificação?',
      buttons: [
        {
          text: 'Não Aceitar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (aceito = false) => {
            this.user.allow_search = aceito;
          }
        }, {
          text: 'Aceitar',
          cssClass: 'success',
          handler: (aceito = true) => {
            this.confirmAlert()
          }
        }
      ]
    });

    await alert.present(); 
  } 

  async confirmAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'TERMO DE CONSENTIMENTO LIVRE ESCLARECIDO',
      message: 'Natureza da pesquisa: Identificar o conhecimento sobre amamentação baseado nas orientações do Caderno da Atenção Básica n. 23 do Ministério da Saúde (2015). <br> <b>1 - Participantes da pesquisa:</b> gestantes, puérperas, familiares e amigos das mesmas, ou qualquer pessoa que queira testar seus próprios conhecimentos a respeito do tema. <br> <b>2- Envolvimento na pesquisa:</b> ao participar deste estudo você contribuirá para as futuras pesquisas e possíveis estratégias de promoção à saúde para sociedade. Você tem liberdade de se recusar a participar, sem qualquer prejuízo. <br> <b>3 - Sobre a coleta de dados:</b> inicialmente, solicitamos que informe sua idade, sexo, se é gestante, puérpera, estudante ou outro, e o que a/o levou a participar do jogo. Em seguida, será apresentado o jogo no qual você deverá julgar as afirmativas apresentadas, sem consulta simultânea a material didático, como verdadeira, falsa ou “não sei”. A duração será de aproximadamente 20 minutos. <br> <b>4 - Riscos e desconforto: </b> não há riscos, uma vez que a não haverá identificação do participante. A participação nesta pesquisa não infringirá as normas legais e éticas. <br> <b>5 - Confidencialidade:</b> todas as informações coletadas são confidenciais. Somente os pesquisadores terão acesso as respostas e nos comprometemos a manter sigilo. Ao publicar os resultados dessa pesquisa, os dados serão tratados de forma coletiva, não havendo possibilidade de identificação. <br> <b>6 - Benefícios:</b> O uso de aplicativos móveis como ferramentas para ampliação de conhecimento tem como vantagem a facilidade e rapidez de acesso e manuseio. Estas tecnologias são extremamente versáteis, estando disponível para utilização pelo usuário 24 horas por dia, de acordo com suas necessidades e preferências. Esperamos que seu uso possa fortalecer a prática do aleitamento materno, ao contribuir para a compreensão de sua importância e benefícios tanto para a mãe quanto para o bebê, além de esclarecer sobre e incentivar o enfrentamento dos principais problemas relacionados a prática. <br> <b>7 - Pagamento:</b> você não terá nenhum tipo de despesa para participar desta pesquisa, bem como nada será pago por sua participação. Após estes esclarecimentos, solicitamos o seu consentimento de forma livre para participar desta pesquisa e para a divulgação dos dados obtidos neste estudo. • Sim, de forma livre e esclarecida, manifesto meu consentimento em participar da pesquisa. • Não, não quero participar.',
      buttons: [
        {
          text: 'Não Aceitar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (aceito = false) => {
            this.user.allow_search = aceito;
          }
        }, {
          text: 'Aceitar',
          cssClass: 'success',
          handler: (aceito = true) => {
            this.user.allow_search = aceito;
          }
        }
      ]
    });

    await alert.present(); 
  } 

  setCreateUserAttribute(name: string, value: any) {
    this.user[name] = value;
  }

  createUser() {
    if (this.user.nickname === ''){

    }
    this.userService.createGroup(this.user).subscribe(resposta => {
      const idUser = resposta.id;
      if (resposta.room_id){
        this.router.navigate([`${idUser}/game`], {queryParams: { roomId: resposta.room_id }})
      } else {
        this.router.navigate([`${idUser}/game`])
      } 
    })
  }

}