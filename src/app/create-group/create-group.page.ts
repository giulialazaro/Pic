import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CreateGroup, ListGroup } from '../shared/model/group.model';
import { GroupService } from '../shared/service/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: 'create-group.page.html',
  styleUrls: ['create-group.page.scss']
})
export class CreateGroupPage  {


  constructor(public groupService: GroupService, public activatedRoute: ActivatedRoute, public router: Router, public toast: ToastController) {}
  
  grupo: CreateGroup = {
    name: ''
  }


  validations: boolean = false;

  retornoCreate: ListGroup = {
    code: '',
    name: '',
    id: null
  }

  async presentToast() {
    const toast = await this.toast.create({
      color: 'success',
      message: 'Grupo cadastrado com sucesso!',
      duration: 3000
    });
    toast.present();
  }

  async defaultGroup() {
    const toast = await this.toast.create({
      color: 'danger',
      message: 'Insira um nome para este grupo',
      duration: 1000
    });
    toast.present();
  }

  public createGroup(statusForm: any){
    if (!this.validations) {
    this.groupService.createGroup(this.grupo).subscribe(resposta => {
      this.retornoCreate = resposta;
      this.presentToast();
      this.router.navigate([`${this.retornoCreate.code}/create-user`]);
    })
  } else {
    this.defaultGroup()
  }
  }

  public nameChange(nameGroup: string) {
    const statusForm = new FormControl(nameGroup || '', [Validators.required, this.noWhitespaceValidator])
    if (statusForm.status === 'INVALID') {
      this.validations = true
    } else {
      this.validations = false;
    }
    this.grupo.name = nameGroup
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

}