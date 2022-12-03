import { Component } from '@angular/core';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { RequestsService } from '@services/requests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hnt22-requests-list-page',
  templateUrl: './requests-list-page.component.html',
  styleUrls: ['./requests-list-page.component.scss']
})
export class RequestsListPageComponent {
  user$: Observable<User>;
  constructor(private auth: AuthService, private requests: RequestsService) {
    this.user$ = this.auth.user$;
  }
}
