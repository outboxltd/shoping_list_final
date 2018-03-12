import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
      this.itemService.getById(items[0]._id).subscribe();
    });
  }

}
