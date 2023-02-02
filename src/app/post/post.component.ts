import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>()

  /** Runs before access to Input values  */
  constructor() {
    console.log('constructor() called', this.postImg);
  }

  /** Runs after property binding has occurred  */
  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }
}
