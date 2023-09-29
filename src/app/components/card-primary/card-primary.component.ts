import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-primary',
  templateUrl: './card-primary.component.html',
  styleUrls: ['./card-primary.component.css']
})
export class CardPrimaryComponent implements OnInit {
  @Input()
  primaryTitle:string = ""
  @Input()
  primaryDescription:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
