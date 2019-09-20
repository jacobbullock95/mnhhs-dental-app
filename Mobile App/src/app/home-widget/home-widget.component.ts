import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-home-widget',
  templateUrl: './home-widget.component.html',
  styleUrls: ['./home-widget.component.css'],
  moduleId: module.id,
})
export class HomeWidgetComponent implements OnInit {

  @Input() headerText: string;
  @Input() rowNum: string;
  @Input() colNum: string;
  
  @Input() rowSpanNum: string;
  @Input() colSpanNum: string;
  @Input() imgUrl: string;
  @Input() customStyle: string;


  constructor() { }

  ngOnInit() {
  }

  

}
