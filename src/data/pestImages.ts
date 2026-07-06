import antColony from '../../assets/imgs/ant-colony.jpg';
import cockroachInfestation from '../../assets/imgs/cockroach-infestation-optimized.webp';
import flyInfestation from '../../assets/imgs/fly-infestation.avif';
import fleasAndTicks from '../../assets/imgs/gettyimages-1565369103-1-2-69738f307a8c7.avif';
import termiteDamage from '../../assets/imgs/images.jpg';
import rodentInfestation from '../../assets/imgs/Rat-infestation-at-business-premises.jpg';

export const PEST_IMAGES = {
  ants: antColony,
  bedbugs: fleasAndTicks,
  cockroaches: cockroachInfestation,
  fleas: fleasAndTicks,
  flies: flyInfestation,
  notSure: antColony,
  rodents: rodentInfestation,
  termites: termiteDamage,
} as const;
