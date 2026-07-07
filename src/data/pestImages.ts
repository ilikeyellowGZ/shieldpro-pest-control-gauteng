import antColony from '../../assets/imgs/ant-colony.jpg';
import cockroachInfestation from '../../assets/imgs/cockroach-infestation-optimized.webp';
import flyInfestation from '../../assets/imgs/fly-infestation.avif';
import bedbugInfestation from '../../assets/imgs/gettyimages-1565369103-1-2-69738f307a8c7.avif';
import fleasAndTicks from '../../assets/imgs/close-up-ticks-crawling-animal-fur-illustrating-parasite-infestation-pet-health-risks-close-up-ticks-crawling-356204476.webp';
import termiteDamage from '../../assets/imgs/images.jpg';
import rodentInfestation from '../../assets/imgs/Rat-infestation-at-business-premises.jpg';
import randomInfestation from '../../assets/imgs/random-infestation-v0-5p7fdxsh9l4f1.webp';

export const PEST_IMAGES = {
  ants: antColony,
  bedbugs: bedbugInfestation,
  cockroaches: cockroachInfestation,
  fleas: fleasAndTicks,
  flies: flyInfestation,
  notSure: randomInfestation,
  rodents: rodentInfestation,
  termites: termiteDamage,
} as const;
