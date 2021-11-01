import img1 from '../assets/panneaux/obligation/B21-1.png';
import img2 from '../assets/panneaux/obligation/B21-2.png';
import img3 from '../assets/panneaux/obligation/B21a1.png';
import img4 from '../assets/panneaux/obligation/B21a2.png';

import img5 from '../assets/panneaux/obligation/B21b.png';
import img6 from '../assets/panneaux/obligation/B21c1.png';
import img7 from '../assets/panneaux/obligation/B21c2.png';
import img8 from '../assets/panneaux/obligation/B21d1.png';

import img9 from '../assets/panneaux/obligation/B21d2.png';
import img10 from '../assets/panneaux/obligation/B21e.png';
import img11 from '../assets/panneaux/obligation/B22a.png';
import img12 from '../assets/panneaux/obligation/B22b.png';

import img13 from '../assets/panneaux/obligation/B22c.png';
import img14 from '../assets/panneaux/obligation/B25.png';
import img15 from '../assets/panneaux/obligation/B26.png';
import img16 from '../assets/panneaux/obligation/B27a.png';

import img17 from '../assets/panneaux/obligation/B27b.png';
import img18 from '../assets/panneaux/obligation/B29.png';
import img19 from '../assets/panneaux/obligation/B40.png';
import img20 from '../assets/panneaux/obligation/B41.png';

import img21 from '../assets/panneaux/obligation/B42.png';
import img22 from '../assets/panneaux/obligation/B43.png';
import img23 from '../assets/panneaux/obligation/B44.png';
import img24 from '../assets/panneaux/obligation/B45a.png';

import img25 from '../assets/panneaux/obligation/B49.png';


const panneauxObligation = [
    {
        id: 1,
        image: img1,
        description: "Obligation de tourner à droite avant le panneau",
        questions: [
            {
                questionId: 1,
                proposition: "Interdiction de tourner à droite à la prochaine intersection",
                status: false
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à droite",
                status: false
            },
            {
                questionId: 3,
                proposition: "Direction obligatoire à la prochaine intersection : à droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Obligation de tourner à droite avant le panneau",
                status: true
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Obligation de tourner à gauche avant le panneau",
        questions: [
            {
                questionId: 1,
                proposition: "Obligation de tourner à gauche avant le panneau",
                status: true
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : à gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Obligation de tourner à droite avant le panneau",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction de tourner à gauche à la prochaine intersection",
                status: false
            },
        ],
    },
    {
        id: 3,
        image: img3,
        description: "Contournement obligatoire de l'obstacle par la droite",
        questions: [
            {
                questionId: 1,
                proposition: "Contournement obligatoire de l'obstacle par la gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Contournement obligatoire de l'obstacle par la droite",
                status: true
            },
            {
                questionId: 3,
                proposition: "Obligation de tourner à droite avant le panneau",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction de tourner à droite à la prochaine intersection",
                status: false
            },
        ],
    },
    {
        id: 4,
        image: img4,
        description: "Contournement obligatoire de l'obstacle par la gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Contournement obligatoire de l'obstacle par la droite",
                status: false
            },
            {
                questionId: 3,
                proposition: "Contournement obligatoire de l'obstacle par la gauche",
                status: true
            },
            {
                questionId: 4,
                proposition: "Fin de l'obligation de l'usage des chaînes à neige",
                status: false
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Direction obligatoire à la prochaine intersection : tout droit",
        questions: [
            {
                questionId: 1,
                proposition: "Direction obligatoire à la prochaine intersection : tout gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit",
                status: true
            },
            {
                questionId: 3,
                proposition: "Vitesse minimale obligatoire",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chemin obligatoire pour piétons",
                status: false
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Direction obligatoire à la prochaine intersection : à droite",
        questions: [
            {
                questionId: 1,
                proposition: "Voie reservée aux tramways",
                status: false
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : à gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Direction obligatoire à la prochaine intersection : à gauche ou à droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Direction obligatoire à la prochaine intersection : à droite",
                status: true
            },
        ],
    },
    {
        id: 7,
        image: img7,
        description: "Direction obligatoire à la prochaine intersection : à gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Direction obligatoire à la prochaine intersection : à gauche",
                status: true
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Piste ou bande obligatoire aux cycles sans side-car à 2 ou 3 roues",
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
        id: 8,
        image: img8,
        description: "Direction obligatoire à la prochaine intersection : tout droit ou à droite",
        questions: [
            {
                questionId: 1,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à droite",
                status: true
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdiction de faire demi-tour",
                status: false
            },
            {
                questionId: 4,
                proposition: "Vitesse minimale obligatoire",
                status: false
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Direction obligatoire à la prochaine intersection : tout droit ou à gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à droite",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande obligatoire aux cycles sans side-car à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à gauche",
                status: true
            },
            {
                questionId: 4,
                proposition: "Direction obligatoire à la prochaine intersection : à gauche ou à droite",
                status: false
            },
        ],
    },
    {
        id: 10,
        image: img10,
        description: "Direction obligatoire à la prochaine intersection : à gauche ou à droite",
        questions: [
            {
                questionId: 1,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de tourner à droite à la prochaine intersection",
                status: false
            },
            {
                questionId: 3,
                proposition: "Piste ou bande obligatoire aux cycles sans side-car à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 4,
                proposition: "Direction obligatoire à la prochaine intersection : à gauche ou à droite",
                status: true
            },
        ],
    },
    {
        id: 11,
        image: img11,
        description: "Piste ou bande obligatoire aux cycles sans side-car à 2 ou 3 roues",
        questions: [
            {
                questionId: 1,
                proposition: "Piste ou bande obligatoire aux cycles sans side-car à 2 ou 3 roues",
                status: true
            },
            {
                questionId: 2,
                proposition: "Chemin obligatoire pour piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdiction de dépasser pour les transports de marchandises > à 3.5t",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction de dépasser tout véhicule à moteur sauf deux roues",
                status: false
            },
        ],
    },
    {
        id: 12,
        image: img12,
        description: "Chemin obligatoire pour piétons",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de chemin obligatoire pour piétons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Accès interdit aux piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chemin obligatoire pour piétons",
                status: true
            },
        ],
    },
    {
        id: 13,
        image: img13,
        description: "Chemin obligatoire pour cavaliers",
        questions: [
            {
                questionId: 1,
                proposition: "Voie reservée aux tramways",
                status: false
            },
            {
                questionId: 2,
                proposition: "Chemin obligatoire pour cavaliers",
                status: true
            },
            {
                questionId: 3,
                proposition: "Vitesse minimale obligatoire",
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
        id: 14,
        image: img14,
        description: "Vitesse minimale obligatoire",
        questions: [
            {
                questionId: 1,
                proposition: "Vitesse minimale obligatoire",
                status: true
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse à 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Ralentisseur",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de vitesse minimale obligatoire",
                status: false
            },
        ],
    },
    {
        id: 15,
        image: img15,
        description: "Chaînes à neige obligatoire sur au moins 2 roues motrices",
        questions: [
            {
                questionId: 1,
                proposition: "Ralentisseur",
                status: false
            },
            {
                questionId: 2,
                proposition: "Obligation dont la nature est mentionnée sur le panneau",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie reservée aux véhicules des services réguliers de transport en commun",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chaînes à neige obligatoire sur au moins 2 roues motrices",
                status: true
            },
        ],
    },
    {
        id: 16,
        image: img16,
        description: "Voie reservée aux véhicules des services réguliers de transport en commun",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de piste ou de bande cyclable",
                status: false
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit ou à droite",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie reservée aux véhicules des services réguliers de transport en commun",
                status: true
            },
            {
                questionId: 4,
                proposition: "Chaînes à neige obligatoire sur au moins 2 roues motrices",
                status: false
            },
        ],
    },
    {
        id: 17,
        image: img17,
        description: "Voie reservée aux tramways",
        questions: [
            {
                questionId: 1,
                proposition: "Voie reservée aux tramways",
                status: true
            },
            {
                questionId: 2,
                proposition: "Traversée de voie de tramways",
                status: false
            },
            {
                questionId: 3,
                proposition: "Accès interdit aux cycles",
                status: false
            },
            {
                questionId: 4,
                proposition: "Accès interdit aux véhicules transportant des marchandises",
                status: false
            },
        ],
    },
    {
        id: 18,
        image: img18,
        description: "Obligation dont la nature est mentionnée sur le panneau",
        questions: [
            {
                questionId: 1,
                proposition: "Poste de gonflage gratuit",
                status: false
            },
            {
                questionId: 2,
                proposition: "Traversée de voie de tramways",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de chemin obligatoire pour piétons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Obligation dont la nature est mentionnée sur le panneau",
                status: true
            },
        ],
    },
    {
        id: 19,
        image: img19,
        description: "Fin de piste ou de bande cyclable",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de piste ou de bande cyclable",
                status: true
            },
            {
                questionId: 3,
                proposition: "Piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de vitesse minimale obligatoire",
                status: false
            },
        ],
    },
    {
        id: 20,
        image: img20,
        description: "Fin de chemin obligatoire pour piétons",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de chemin obligatoire pour piétons",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin de vitesse minimale obligatoire",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de chemin obligatoire pour cavaliers",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de piste ou de bande cyclable",
                status: false
            },
        ],
    },
    {
        id: 21,
        image: img21,
        description: "Fin de chemin obligatoire pour cavaliers",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de voie réservée aux véhicules des services réguliers de transport en commun",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de l'obligation de l'usage des chaînes à neige",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de chemin obligatoire pour cavaliers",
                status: true
            },
            {
                questionId: 4,
                proposition: "Fin de vitesse minimale obligatoire",
                status: false
            },
        ],
    },
    {
        id: 22,
        image: img22,
        description: "Fin de vitesse minimale obligatoire",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de vitesse minimale obligatoire",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin de l'obligation de l'usage des chaînes à neige",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de voie réservée aux véhicules des services réguliers de transport en commun",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin d'obligation d'allumage des feux",
                status: false
            },
        ],
    },
    {
        id: 23,
        image: img23,
        description: "Fin de l'obligation de l'usage des chaînes à neige",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de vitesse minimale obligatoire",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin d'obligation d'allumage des feux",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de voie réservée aux véhicules des services réguliers de transport en commun",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de l'obligation de l'usage des chaînes à neige",
                status: true
            },
        ],
    },
    {
        id: 24,
        image: img24,
        description: "Fin de voie réservée aux véhicules des services réguliers de transport en commun",
        questions: [
            {
                questionId: 1,
                proposition: "Contournement obligatoire de l'obstacle par la gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de voie réservée aux véhicules des services réguliers de transport en commun",
                status: true
            },
            {
                questionId: 3,
                proposition: "Accès interdit aux véhicules de transport en commun",
                status: false
            },
            {
                questionId: 4,
                proposition: "Gare auto-train",
                status: false
            },
        ],
    },
    {
        id: 25,
        image: img25,
        description: "Fin d'obligation d'allumage des feux",
        questions: [
            {
                questionId: 1,
                proposition: "Fin d'obligation d'allumage des feux",
                status: true
            },
            {
                questionId: 2,
                proposition: "Installations ou services diver",
                status: false
            },
            {
                questionId: 3,
                proposition: "Poste de gonflage gratuit",
                status: false
            },
            {
                questionId: 4,
                proposition: "Point de détente",
                status: false
            },
        ],
    },
];

export default panneauxObligation;