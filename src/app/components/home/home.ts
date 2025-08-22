import { Component } from '@angular/core';
import { QuienesSomos } from "../quienes-somos/quienes-somos";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuienesSomos],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
