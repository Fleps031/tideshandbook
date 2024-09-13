import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['sheetID'];
  }

  ngOnInit(): void {
    console.log(this.id);
  }

}
