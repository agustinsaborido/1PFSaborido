import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  delay,
  filter,
  first,
  forkJoin,
  map,
  Observable,
  of,
  skip,
  Subject,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { IUser } from '../users/models';

@Component({
  selector: 'app-clase-10-rxjs-2',
  templateUrl: './clase-10-rxjs-2.component.html',
  styleUrl: './clase-10-rxjs-2.component.scss',
})
export class Clase10Rxjs2Component implements OnInit, OnDestroy {
  cambioElUsuario$ = new Subject<boolean>();

  componenteDestruido$ = new Subject<boolean>();
  componenteDestruidoBehavior$ = new BehaviorSubject([]);

  usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);

  obtenerUsuarioSubscription?: Subscription;

  usuarios: IUser[] = [];
  roles: string[] = [];

  cargando = false;

  getRoles(): Observable<string[]> {
    return of(['ADMIN', 'USER', 'STUDENT', 'TEACHER']).pipe(delay(1500));
  }

  getUsers(): Observable<IUser[]> {
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
    return of(USERS_DB).pipe(delay(3000));
  }

  login(): void {
    this.cambioElUsuario$.next(true);
  }

  ngOnDestroy(): void {
    console.log('El componente se destruyo');
    this.componenteDestruido$.next(true);

    this.obtenerUsuarioSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.cargando = true;
    forkJoin([this.getUsers(), this.getRoles()]).subscribe({
      next: (value) => {
        this.usuarios = value[0];
        this.roles = value[1];
      },
      complete: () => {
        this.cargando = false;
      },
    });


    const obtenerUsuario$ = new Observable<number>((observer) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        observer.next(counter);
      }, 1000);
    });

    this.cambioElUsuario$.subscribe({
      next: (value) => {
        this.usuarioAutenticado$.next({
          id: 1,
          createdAt: new Date(),
          email: 'Zapata@mail.com',
          firstName: 'Luciano',
          lastName: 'Zapata',
          role: 'ADMIN',
        });
      },
    });

    this.usuarioAutenticado$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  
  }
}



























// {
//   id: 1,
//   firstName: 'David',
//   lastName: 'Rivas',
//   email: 'davidrivas@hotmail.com',
//   role: 'ADMIN',
//   createdAt: new Date(),
// },
// {
//   id: 2,
//   firstName: 'Gonzalo',
//   lastName: 'Barbero',
//   email: 'barbergonzalo@hotmail.com',
//   role: 'USER',
//   createdAt: new Date(),
// },
// {
//   id: 3,
//   firstName: 'Naia',
//   lastName: 'Rodriguez',
//   email: 'naiarodriguez@hotmail.com',
//   role: 'ADMIN',
//   createdAt: new Date(),
// },
// {
//   id: 4,
//   firstName: 'Barbara',
//   lastName: 'Hoyos',
//   email: 'barbarahoyos@hotmail.com',
//   role: 'USER',
//   createdAt: new Date(),
// },