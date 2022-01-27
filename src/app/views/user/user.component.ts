import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { listUser } from '../../models/listUser.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: listUser[] = [];
  @Input() cargar!: listUser;

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe(data =>{
      console.log(data);
      this.user = data;
      
    })
  }

  cargar_user(datos: listUser){
    this.cargar = datos;
  }

  

}
