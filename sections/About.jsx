'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| A propos" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Le Métaverse</span> est l'avenir de la technologie. Il offre une expérience immersive qui va au-delà de tout ce que nous avons connu jusqu'à présent. Les utilisateurs pourront naviguer&nbsp;

        <span className="font-extrabold text-white">
          dans un monde virtuel
        </span>{' '}
        qui sera plus vrai que nature, où ils pourront interagir avec d'autres personnes, créer des objets, jouer à des jeux et même travailler. Les entreprises pourront se connecter avec leurs clients de manière plus personnelle et {' '}
        <span className="font-extrabold text-white">immersive.</span> Le métaverse est l'avenir de la technologie, il va changer notre façon de vivre, de jouer et de travailler. Il est temps de se préparer à l'arrivée de cette{' '}
        <span className="font-extrabold text-white">révolution technologique</span> Descend en bas de la page pour en découvrir davantage.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
