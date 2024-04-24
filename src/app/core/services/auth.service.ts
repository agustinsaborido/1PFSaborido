import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  login(): void {
    this._authUser$.next({
      id: 1,
      createdAt: new Date(),
      email: 'agustinsaborido@gmail.com',
      firstName: 'agustín',
      lastName: 'saborido',
      role: 'ADMIN',
    });
  }

  logout(): void {
    this._authUser$.next(null);
  }
}