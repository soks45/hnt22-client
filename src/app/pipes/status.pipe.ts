import { Pipe, PipeTransform } from '@angular/core';
import { RequestStatus } from '@models/request';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: RequestStatus): string {
    switch (value) {
      case RequestStatus.Accepted: {
        return 'Принято';
      }
      case RequestStatus.Processing: {
        return 'На рассмотрении';
      }
      case RequestStatus.Rejected: {
        return 'Отклонено';
      }
      case RequestStatus.Send: {
        return 'Отправлено';
      }
    }

  }

}
