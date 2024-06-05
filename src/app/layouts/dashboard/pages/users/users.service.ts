import { Injectable } from '@angular/core';
import { CreateUserPayload, IUser } from './models';
import {
  catchError,
  concatMap,
  delay,
  first,
  forkJoin,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


// const USERS_DB: IUser[] = [
//   {
//     id: 1,
//     firstName: 'David',
//     lastName: 'Rivas',
//     email: 'davidrivas@hotmail.com',
//     role: 'ADMIN',
//     createdAt: new Date(),
//   },
//   {
//     id: 2,
//     firstName: 'Gonzalo',
//     lastName: 'Garcia',
//     email: 'gonzagarcia@hotmail.com',
//     role: 'USER',
//     createdAt: new Date(),
//   },
//   {
//     id: 3,
//     firstName: 'Naia',
//     lastName: 'Rodriguez',
//     email: 'naiarodriguez@hotmail.com',
//     role: 'ADMIN',
//     createdAt: new Date(),
//   },
//   {
//     id: 4,
//     firstName: 'Barbara',
//     lastName: 'Hoyos',
//     email: 'barbarahoyos@hotmail.com',
//     role: 'USER',
//     createdAt: new Date(),
//   },
// ];

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.baseAPIURL + '/users');
  }

  getUserById(id: string): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`);
  }

  createUser(payload: CreateUserPayload): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.baseAPIURL}/users`,
      payload
    );
  }
}


