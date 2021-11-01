import img1 from '../assets/panneaux/danger/A1a.png';
import img2 from '../assets/panneaux/danger/A1b.png';
import img3 from '../assets/panneaux/danger/A1c.png';
import img4 from '../assets/panneaux/danger/A1d.png';

import img5 from '../assets/panneaux/danger/A2a.png';
import img6 from '../assets/panneaux/danger/A2b.png';
import img7 from '../assets/panneaux/danger/A3.png';
import img8 from '../assets/panneaux/danger/A3a.png';

import img9 from '../assets/panneaux/danger/A3b.png';
import img10 from '../assets/panneaux/danger/A4.png';
import img11 from '../assets/panneaux/danger/A6.png';
import img12 from '../assets/panneaux/danger/A7.png';

import img13 from '../assets/panneaux/danger/A8.png';
import img14 from '../assets/panneaux/danger/A9.png';
import img15 from '../assets/panneaux/danger/A13a.png';
import img16 from '../assets/panneaux/danger/A13b.png';

import img17 from '../assets/panneaux/danger/A14.png';
import img18 from '../assets/panneaux/danger/A15a1.png';
import img19 from '../assets/panneaux/danger/A15a2.png';
import img20 from '../assets/panneaux/danger/A15b.png';

import img21 from '../assets/panneaux/danger/A15c.png';
import img22 from '../assets/panneaux/danger/A16.png';
import img23 from '../assets/panneaux/danger/A17.png';
import img24 from '../assets/panneaux/danger/A18.png';

import img25 from '../assets/panneaux/danger/A19.png';
import img26 from '../assets/panneaux/danger/A20.png';
import img27 from '../assets/panneaux/danger/A21a.png';
import img28 from '../assets/panneaux/danger/A23.png';

import img29 from '../assets/panneaux/danger/A24.png';

const panneauxDanger = [
    {
        id: 1,
        image: img1,
        description: "Virage à droite",
        questions: [
            {
                questionId: 1,
                proposition: "Chaussée rétrécie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Chaussée rétrécie par la droite",
                status: false
            },
            {
                questionId: 3,
                proposition: "Virage à droite",
                status: true
            },
            {
                questionId: 4,
                proposition: "Intersection où vous êtes prioritaire",
                status: false
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Virage à gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Virage à droite",
                status: false
            },
            {
                questionId: 2,
                proposition: "Virage à gauche",
                status: true
            },
            {
                questionId: 3,
                proposition: "Intersection où vous êtes prioritaire",
                status: false
            },
            {
                questionId: 4,
                proposition: "Obligation de tourner à gauche avant le panneau",
                status: false
            },
        ],
    },
    {
        id: 3,
        image: img3,
        description: "Succession de virages dont le premier est à droite",
        questions: [
            {
                questionId: 1,
                proposition: "Succession de virages dont le premier est à gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Virage à gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Succession de virages dont le premier est à droite",
                status: true
            },
            {
                questionId: 4,
                proposition: "Virage à droite",
                status: false
            },
        ],
    },
    {
        id: 4,
        image: img4,
        description: "Succession de virages dont le premier est à gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Virage à gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Virage à droite",
                status: false
            },
            {
                questionId: 3,
                proposition: "Succession de virages dont le premier est à droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Succession de virages dont le premier est à gauche",
                status: true
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Cassis ou dos-d'âne",
        questions: [
            {
                questionId: 1,
                proposition: "Cassis ou dos-d'âne",
                status: true
            },
            {
                questionId: 2,
                proposition: "Ralentisseur",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation dans les deux sens",
                status: false
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Ralentisseur",
        questions: [
            {
                questionId: 1,
                proposition: "Annonce feux tricolores",
                status: false
            },
            {
                questionId: 2,
                proposition: "Ralentisseur",
                status: true
            },
            {
                questionId: 3,
                proposition: "Cassis ou dos-d'âne",
                status: false
            },
            {
                questionId: 4,
                proposition: "Descente dangereuse",
                status: false
            },
        ],
    },
    {
        id: 7,
        image: img7,
        description: "Chaussée rétrécie",
        questions: [
            {
                questionId: 1,
                proposition: "Chaussée rétrécie par la gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Pont mobile",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chaussée rétrécie",
                status: true
            },
            {
                questionId: 4,
                proposition: "Chaussée rétrécie par la droite",
                status: false
            },
        ],
    },
    {
        id: 8,
        image: img8,
        description: "Chaussée rétrécie par la droite",
        questions: [
            {
                questionId: 1,
                proposition: "Chaussée rétrécie par la droite",
                status: true
            },
            {
                questionId: 2,
                proposition: "Chaussée rétrécie par la gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chaussée particulièrement glissante",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chaussée rétrécie",
                status: false
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Chaussée rétrécie par la gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Chaussée rétrécie par la gauche",
                status: true
            },
            {
                questionId: 2,
                proposition: "Chaussée particulièrement glissante",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chaussée rétrécie par la droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Traversée de voies de tramways",
                status: false
            },
        ],
    },
    {
        id: 10,
        image: img10,
        description: "Chaussée particulièrement glissante",
        questions: [
            {
                questionId: 1,
                proposition: "Pont mobile",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de circuler sans maintenir l'intervalle indiqué",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdiction de faire demi-tour",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chaussée particulièrement glissante",
                status: true
            },
        ],
    },
    {
        id: 11,
        image: img11,
        description: "Pont mobile",
        questions: [
            {
                questionId: 1,
                proposition: "Risque de chute de pierres",
                status: false
            },
            {
                questionId: 2,
                proposition: "Débouché sur un quai ou une berge",
                status: false
            },
            {
                questionId: 3,
                proposition: "Pont mobile",
                status: true
            },
            {
                questionId: 4,
                proposition: "Signalisation par voie",
                status: false
            },
        ],
    },
    {
        id: 12,
        image: img12,
        description: "Barrières à fonctionnement manuel",
        questions: [
            {
                questionId: 1,
                proposition: "Pont mobile",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage à niveau sans barrière ni demi-barrière",
                status: false
            },
            {
                questionId: 3,
                proposition: "Traversée de voies de tramways",
                status: false
            },
            {
                questionId: 4,
                proposition: "Barrières à fonctionnement manuel",
                status: true
            },
        ],
    },
    {
        id: 13,
        image: img13,
        description: "Passage à niveau sans barrière ni demi-barrière",
        questions: [
            {
                questionId: 1,
                proposition: "Passage à niveau sans barrière ni demi-barrière",
                status: true
            },
            {
                questionId: 2,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Barrières à fonctionnement manuel",
                status: false
            },
            {
                questionId: 4,
                proposition: "Traversée de voies de tramways",
                status: false
            },
        ],
    },
    {
        id: 14,
        image: img14,
        description: "Traversée de voies de tramways",
        questions: [
            {
                questionId: 1,
                proposition: "Danger pouvant être précisé ou non par un panonceau",
                status: false
            },
            {
                questionId: 2,
                proposition: "Barrières à fonctionnement manuel",
                status: false
            },
            {
                questionId: 3,
                proposition: "Traversée de voies de tramways",
                status: true
            },
            {
                questionId: 4,
                proposition: "Endroit fréquenté par des enfants",
                status: false
            },
        ],
    },
    {
        id: 15,
        image: img15,
        description: "Endroit fréquenté par des enfants",
        questions: [
            {
                questionId: 1,
                proposition: "Endroit fréquenté par des enfants",
                status: true
            },
            {
                questionId: 2,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Accès interdit aux piétons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Stationnement interdit",
                status: false
            },
        ],
    },
    {
        id: 16,
        image: img16,
        description: "Passage pour piétons",
        questions: [
            {
                questionId: 1,
                proposition: "Accès interdit aux piétons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage pour piétons",
                status: true
            },
            {
                questionId: 3,
                proposition: "Endroit fréquenté par des enfants",
                status: false
            },
            {
                questionId: 4,
                proposition: "Passage de cavaliers",
                status: false
            },
        ],
    },
    {
        id: 17,
        image: img17,
        description: "Danger pouvant être précisé ou non par un panonceau",
        questions: [
            {
                questionId: 1,
                proposition: "Passage d'animaux domestiques",
                status: false
            },
            {
                questionId: 2,
                proposition: "Débouché sur un quai ou une berge",
                status: false
            },
            {
                questionId: 3,
                proposition: "Danger pouvant être précisé ou non par un panonceau",
                status: true
            },
            {
                questionId: 4,
                proposition: "Circulation dans les deux sens",
                status: false
            },
        ],
    },
    {
        id: 18,
        image: img18,
        description: "Passage d'animaux domestiques",
        questions: [
            {
                questionId: 1,
                proposition: "Risque de chute de pierres",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage de cavaliers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage d'animaux sauvages",
                status: false
            },
            {
                questionId: 4,
                proposition: "Passage d'animaux domestiques",
                status: true
            },
        ],
    },
    {
        id: 19,
        image: img19,
        description: "Passage d'animaux domestiques",
        questions: [
            {
                questionId: 1,
                proposition: "Passage d'animaux domestiques",
                status: true
            },
            {
                questionId: 2,
                proposition: "Passage d'animaux sauvages",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage de cavaliers",
                status: false
            },
            {
                questionId: 4,
                proposition: "Annonce feux tricolores",
                status: false
            },
        ],
    },
    {
        id: 20,
        image: img20,
        description: "Passage d'animaux sauvages",
        questions: [
            {
                questionId: 1,
                proposition: "Passage de cavaliers",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage d'animaux domestiques",
                status: false
            },
            {
                questionId: 3,
                proposition: "Débouché de cyclistes venant de droite ou de gauche",
                status: false
            },
            {
                questionId: 4,
                proposition: "Passage d'animaux sauvages",
                status: true
            },
        ],
    },
    {
        id: 21,
        image: img21,
        description: "Passage de cavaliers",
        questions: [
            {
                questionId: 1,
                proposition: "Descente dangereuse",
                status: false
            },
            {
                questionId: 2,
                proposition: "Débouché de cyclistes venant de droite ou de gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage d'animaux sauvages",
                status: false
            },
            {
                questionId: 4,
                proposition: "Passage de cavaliers",
                status: true
            },
        ],
    },
    {
        id: 22,
        image: img22,
        description: "Descente dangereuse",
        questions: [
            {
                questionId: 1,
                proposition: "Descente dangereuse",
                status: true
            },
            {
                questionId: 2,
                proposition: "Risque de chute de pierres",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chaussée rétrécie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation dans les deux sens",
                status: false
            },
        ],
    },
    {
        id: 23,
        image: img23,
        description: "Annonce feux tricolores",
        questions: [
            {
                questionId: 1,
                proposition: "Point de détente",
                status: false
            },
            {
                questionId: 2,
                proposition: "Annonce feux tricolores",
                status: true
            },
            {
                questionId: 3,
                proposition: "Chemin obligatoire pour piétons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Voie reservée aux tramways",
                status: false
            },
        ],
    },
    {
        id: 24,
        image: img24,
        description: "Circulation dans les deux sens",
        questions: [
            {
                questionId: 1,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 2,
                proposition: "Accès interdit aux piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Débouché sur un quai ou une berge",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation dans les deux sens",
                status: true
            },
        ],
    },
    {
        id: 25,
        image: img25,
        description: "Risque de chute de pierres",
        questions: [
            {
                questionId: 1,
                proposition: "Risque de chute de pierres",
                status: true
            },
            {
                questionId: 2,
                proposition: "Débouché sur un quai ou une berge",
                status: false
            },
            {
                questionId: 3,
                proposition: "Traversée d'une aire de danger aérien",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de route prioritaire",
                status: false
            },
        ],
    },
    {
        id: 26,
        image: img26,
        description: "Débouché sur un quai ou une berge",
        questions: [
            {
                questionId: 1,
                proposition: "Traversée d'une aire de danger aérien",
                status: false
            },
            {
                questionId: 2,
                proposition: "Risque de chute de pierres",
                status: false
            },
            {
                questionId: 3,
                proposition: "Débouché sur un quai ou une berge",
                status: true
            },
            {
                questionId: 4,
                proposition: "Risque de fort vent latéral",
                status: false
            },
        ],
    },
    {
        id: 27,
        image: img27,
        description: "Débouché de cyclistes venant de droite ou de gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Débouché de cyclistes venant de droite ou de gauche",
                status: true
            },
            {
                questionId: 2,
                proposition: "Débouché sur un quai ou une berge",
                status: false
            },
            {
                questionId: 3,
                proposition: "Traversée d'une aire de danger aérien",
                status: false
            },
            {
                questionId: 4,
                proposition: "Risque de fort vent latéral",
                status: false
            },
        ],
    },
    {
        id: 28,
        image: img28,
        description: "Traversée d'une aire de danger aérien",
        questions: [
            {
                questionId: 1,
                proposition: "Débouché sur un quai ou une berge",
                status: false
            },
            {
                questionId: 2,
                proposition: "Circulation dans les deux sens",
                status: false
            },
            {
                questionId: 3,
                proposition: "Risque de fort vent latéral",
                status: false
            },
            {
                questionId: 4,
                proposition: "Traversée d'une aire de danger aérien",
                status: true
            },
        ],
    },
    {
        id: 29,
        image: img29,
        description: "Risque de fort vent latéral",
        questions: [
            {
                questionId: 1,
                proposition: "Circulation dans les deux sens",
                status: false
            },
            {
                questionId: 2,
                proposition: "Risque de fort vent latéral",
                status: true
            },
            {
                questionId: 3,
                proposition: "Traversée d'une aire de danger aérien",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chaussée particulièrement glissante",
                status: false
            },
        ],
    },
];

export default panneauxDanger;