import { Component } from '@angular/core';

export interface Circle {
  id: number,
  color: string,
  top: string,
  showId?: boolean,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public circlesStarted: boolean = false;
  public showSameColor: boolean = false;
  public canDeleteCircle: boolean = false;

    public showCircles(): void {
      this.circlesStarted = true;
    }

    public randomizeTop(): number {
      return  Math.round(Math.random() * 100) 
    }

    public showCircleId(circleId: number): void {
      this.circles[circleId - 1].showId = true;
      setTimeout(() => {
          this.circles[circleId - 1].showId = false;
      }, 4000);
    }

    public circles: Circle[] = [
      {
        id: 1,
        color: '#DABFFF',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 2,
        color: '#907AD6',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 3,
        color: '#4F518C',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 4,
        color: '#2C2A4A',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 5,
        color: '#7FDEFF',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 6,
        color: '#9B5094',
        top: `${this.randomizeTop()}%`,
        
      },
      {
        id: 7,
        color: '#8FB8DE',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 8,
        color: '#253237',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 9,
        color: '#59C3C3',
        top: `${this.randomizeTop()}%`,
      },
      {
        id: 10,
        color: '#F45B69',
        top: `${this.randomizeTop()}%`,
      },
    ]
}
