import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes= data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Hero;
      })
    });
  }

  create(hero: Hero): void{
    this.heroService.createHero(hero)
  }

  delete(id: string): void {
    this.heroService.deleteHero(id);
  }
  update(hero: Hero): void {
    this.heroService.updateHero(hero);
  }
}
}
