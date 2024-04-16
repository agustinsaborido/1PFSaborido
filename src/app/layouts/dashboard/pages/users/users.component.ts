import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'createdAt',
    'actions',
  ];


  users: IUser[] = [
    {
      id:1,
      firstName:'Agustín',
      lastName:'Saborido',
      email:'agustin@hotmail.com',
      role:'ADMIN',
      createdAt: new Date()
  },
  {
    id:2,
    firstName:'Jose',
    lastName:'Jesús',
    email:'Jesus@hotmail.com',
    role:'USER',
    createdAt: new Date()
},
];

constructor(private matDialog: MatDialog){}

openDialog(editingUser?: IUser): void{
  this.matDialog.
  open(UserDialogComponent,{
    data:editingUser,
  }).afterClosed().subscribe({
    next: (result)=>{
      if (result){
      
        if(editingUser){
        //TENGO QUE ACTUALIZAR EL USUARIO EN EL ARRAY
        this.users = this.users.map((u)=> u.id === editingUser.id ? {...u, ...result} : u
      );
      } else{
        //LOGICA DE CREAR EL USUARIO
        result.id = new Date().getTime().toString().substring(0, 3);
        result.createdAt = new Date();
        this.users = [...this.users, result];

      }
      }
    },
  });
}

onDeleteUser (id:number): void{
  if (confirm('Está seguro?')){
    this.users = this.users.filter((u) => u.id != id)
  }
}
}
