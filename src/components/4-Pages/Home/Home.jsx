import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { useApp } from '../../../hooks';

import './Home.scss';

export default function Home() {
  const { language } = useApp();

  return (
    <div className="Home fade-in">
      {language === 'ES' ? (
        <div className="Home__content Home__content--ES">
          <p>
            El abecedario desarchitectes es bajo la forma de un abecedario, un
            zoom sobre los objetos urbanos. Artículo tras artículo, se
            desarrolla una cierta perspectiva. Artículos escritos subjetivamente
            según los conocimientos, los deseos y la perspectiva del autor,
            acompañan las fotos publicadas en instagram en la cuenta de
            desarchitectes.
          </p>
          <p>
            A través de los objetos urbanos presentes en nuestra vida
            arquitectónica cotidiana, este abecedario pretende mostrar otros
            sectores intelectuales que resaltan estos mismos elementos. Hablar
            de objetos que a veces hemos hecho invisibles a nuestros ojos por su
            presencia constante, hablar de arquitectura en otros lugares,
            mostrar una cierta curiosidad es el objetivo de este proyecto.
          </p>
          <p>
            Para enriquecer y ampliar este proyecto, cada artículo existe en
            edición bilingüe, escrito tanto en francés como en español.
          </p>
          <p>
            En línea o descargable para ser impreso en casa, cada artículo es de
            libre acceso.
          </p>
        </div>
      ) : (
        <div className="Home__content Home__content--FR">
          <p>
            L’abécédaire desarchitectes est sous forme d’abécédaire un zoom sur
            des objets urbains. Article après article, un certain regard est
            développé. Articles écrits subjectivement selon les connaissances,
            les envies et le regard de l’auteur, ils accompagnent les photos
            publiées sur instagram depuis le compte desarchitectes.
          </p>
          <p>
            À travers des objets urbains présents dans notre quotidien
            architecturé, cet abécédaire tente de montrer d’autres secteurs
            intellectuels qui mettent en scène ces mêmes éléments. Parler
            d’objets que nous avons rendu parfois invisible à nos yeux par leur
            présence constante, parler d’architecture ailleurs, expliciter une
            certaine curiosité est l’objectif de ce projet.
          </p>
          <p>
            Pour enrichir ce projet ainsi que pour le rendre davantage expansif,
            chaque article est en édition bilingue, écrit en français ainsi
            qu’en espagnol.
          </p>
          <p>
            En ligne ou téléchargeable et à imprimer chez vous, chaque article
            est librement accessible.
          </p>
        </div>
      )}

      <div className="Home__socials">
        <a
          href="https://www.instagram.com/desarchitectes/"
          title={
            language === 'ES'
              ? 'desarchitectes en Instagram'
              : 'desarchitectes sur Instagram'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="mailto:abcdesarchitectes@gmail.com"
          title={language === 'ES' ? 'Contacto' : 'Contact'}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}
