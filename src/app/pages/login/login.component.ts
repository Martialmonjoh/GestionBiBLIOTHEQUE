import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthenticationRequest, AuthenticationResponse } from 'src/gd-api/src/models';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // authenticationRequest: AuthenticationRequest = {}
  errorMessage = '';
  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }
  login(){

  }
}
