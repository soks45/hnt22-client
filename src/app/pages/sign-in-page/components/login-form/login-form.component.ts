import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlsOf, FormMixin } from '@mixins/form.mixin';
import { BaseObject, Constructor } from '@mixins/mixins';
import { AuthService, Login } from '@services/auth.service';
import { MessagesService } from '@services/messages.service';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'hnt22-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends FormMixin<Constructor, Login>(BaseObject) {
  formGroup: FormGroup<ControlsOf<Login>>;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messages: MessagesService,
    private router: Router
  ) {
    super();

    this.formGroup = this.formBuilder.group({
      login: new FormControl('', {
        initialValueIsDefault: true,
        validators: [Validators.required, Validators.maxLength(255)]
      }),
      password: new FormControl('', {
        initialValueIsDefault: true,
        validators: [Validators.required, Validators.maxLength(255)],
      }),
    });
  }

  onSubmit(): void {
    if (!this.checkForm()) {
      return;
    }

    this.isLoading = true;

    this.authService
      .login(this.formGroup.value as Login)
      .pipe(
        tap((v) => {
          this.messages.success(`Доброй день, ${v.firstName} ${v.lastName}!`);
          this.router.navigate(['/account/details']);
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        error: () => this.messages.error('Неверный логин или пароль')
      });
  }
}
