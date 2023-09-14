import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hamradio',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Um hobby incrível que eu recomendo para todos! Muito bom para aprender com a curiosidade de uma criança e com muitas coisas interessantes dos melhores cientistas.
      </>
    ),
  },
  {
    title: 'Biblioteca',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Decidi criar uma biblioteca de tudo que eu descubro. Minha memória já não está eficiente por conta de tantos detalhes. Espero que a tecnologia me ajude! (Risos)
      </>
    ),
  },
  {
    title: 'Dart & Flutter',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Um universo incrível de desenvolvimento. Para quem gosta de gastar tempo escrevendo aplicativos é um prato cheio.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
