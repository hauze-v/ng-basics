import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Adam';
  imgURL = 'https://picsum.photos/id/237/500/500';

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    /** Type assertion */
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  public logImg(event: string) {
    console.log(event);
  }
}