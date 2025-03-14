import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantages-card',
  standalone: true,
  imports: [],
  templateUrl: './advantages-card.component.html',
  styleUrl: './advantages-card.component.css'
})
export class AdvantagesCardComponent {

  @Input({required:true}) img!:any;
  @Input({required:true}) title1!:string;
  @Input({required:true}) title2!:string;


}
