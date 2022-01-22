import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss'],
})
export class CustomGridComponent implements OnInit {
  @Input() gridHeaders: any[] = [];
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
