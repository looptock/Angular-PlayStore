import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label-primary',
  templateUrl: './card-label-primary.component.html',
  styleUrls: ['./card-label-primary.component.css']
})
export class CardLabelPrimaryComponent implements OnInit {
  @Input()
  primaryTitle:string = ""
  @Input()
  primaryDescription:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
