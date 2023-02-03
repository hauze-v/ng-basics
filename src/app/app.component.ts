import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'adam hauze'
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();
  cost: number = 2000;
  temperature = 25.3;
  pizza = {
    toppings: [ 'pepperoni', 'bacon', 'sausage', 'pineapple' ],
    size: 'large'
  }
  blueClass: boolean = false;
  fontSize: number = 16;

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