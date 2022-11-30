import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

export function appInitializer(
  authService: AuthService
): () => Observable<any> {
  return () => authService.refreshToken();
}
