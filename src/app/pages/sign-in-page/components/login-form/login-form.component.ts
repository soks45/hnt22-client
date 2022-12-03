import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlsOf, FormMixin } from '@mixins/form.mixin';
import { BaseObject, Constructor } from '@mixins/mixins';
import { AuthService, Login } from '@services/auth.service';
import { MessagesService } from '@services/messages.service';

@Component({
  selector: 'hnt22-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends FormMixin<Constructor, Login>(BaseObject) {
  formGroup: FormGroup<ControlsOf<Login>>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messages: MessagesService,
  ) {
    this.formGroup

    super();
  }
}
