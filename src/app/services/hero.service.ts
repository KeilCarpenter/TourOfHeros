import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../components/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
