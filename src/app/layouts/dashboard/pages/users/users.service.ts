import { Injectable } from '@angular/core';
import { IUser } from './models';
import { catchError, delay, first, Observable, of, throwError } from 'rxjs';

const USERS_DB: IUser[] = [
  {
    id: 1,
    firstName: 'David',
    lastName: 'Rivas',
    email: 'davidrivas@hotmail.com',
    role: 'ADMIN',
    createdAt: new Date(),
  },
  {
    id: 2,
    firstName: 'Gonzalo',
    lastName: 'Garcia',
    email: 'gonzagarcia@hotmail.com',
    role: 'USER',
    createdAt: new Date(),
  },
  {
    id: 3,
    firstName: 'Naia',
    lastName: 'Rodriguez',
    email: 'naiarodriguez@hotmail.com',
    role: 'ADMIN',
    createdAt: new Date(),
  },
  {
    id: 4,
    firstName: 'Barbara',
    lastName: 'Hoyos',
    email: 'barbarahoyos@hotmail.com',
    role: 'USER',
    createdAt: new Date(),
  },
];

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsers(): Observable<IUser[]> {
    return of(USERS_DB).pipe(delay(1500));
    // return throwError(() => new Error('Error al cargar los usuarios')).pipe(
    //   catchError((err) => of(err))
    // );
  }

  getUserById(id: number): Observable<IUser | undefined> {
    return of(USERS_DB.find((el) => el.id === id)).pipe(delay(1500));
  }
}