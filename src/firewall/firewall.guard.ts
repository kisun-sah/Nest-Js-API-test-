import { CanActivate, ExecutionContext, Injectable, Body } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class FirewallGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.body.name === 'kisu' ? true : false ;
  }
}
