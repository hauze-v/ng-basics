import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>()

  /** Runs before access to Input values  */
  constructor() {
    console.log('constructor() called', this.postImg);
  }

  /** Runs after property binding has occurred  */
  public ngOnInit(): void {
    console.log('ngOnInit() called', this.postImg);
  }

  public ngOnChanges(): void {
    console.log('ngOnChanges() called');
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

}
