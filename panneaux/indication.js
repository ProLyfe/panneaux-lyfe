import img1 from '../assets/panneaux/indication/C1a.png';
import img2 from '../assets/panneaux/indication/C1b.png';
import img3 from '../assets/panneaux/indication/C1c.png';
import img4 from '../assets/panneaux/indication/C3.png';

import img5 from '../assets/panneaux/indication/C4a_50.png';
import img6 from '../assets/panneaux/indication/C4b_50.png';
import img7 from '../assets/panneaux/indication/C5.png';
import img8 from '../assets/panneaux/indication/C6.png';

import img9 from '../assets/panneaux/indication/C8.png';
import img10 from '../assets/panneaux/indication/C12.png';
import img11 from '../assets/panneaux/indication/C13a.png';
import img12 from '../assets/panneaux/indication/C13b.png';

import img13 from '../assets/panneaux/indication/C14_1.png';
import img14 from '../assets/panneaux/indication/C14_2.png';
import img15 from '../assets/panneaux/indication/C18.png';
import img16 from '../assets/panneaux/indication/C20a.png';

import img17 from '../assets/panneaux/indication/C20c.png';
import img18 from '../assets/panneaux/indication/C23.png';
import img19 from '../assets/panneaux/indication/C24a_1.png';
import img20 from '../assets/panneaux/indication/C24a_4.png';

import img21 from '../assets/panneaux/indication/C24b_1.png';
import img22 from '../assets/panneaux/indication/C24b_2.png';
import img23 from '../assets/panneaux/indication/C24c_1.png';
import img24 from '../assets/panneaux/indication/C24c_2.png';

import img25 from '../assets/panneaux/indication/C25a.png';
import img26 from '../assets/panneaux/indication/C25b.png';
import img27 from '../assets/panneaux/indication/C26a.png';
import img28 from '../assets/panneaux/indication/C26b.png';

import img29 from '../assets/panneaux/indication/C27.png';
import img30 from '../assets/panneaux/indication/C28_1.png';
import img31 from '../assets/panneaux/indication/C28_3.png';
import img32 from '../assets/panneaux/indication/C29a.png';

import img33 from '../assets/panneaux/indication/C29b.png';
import img34 from '../assets/panneaux/indication/C30.png';
import img35 from '../assets/panneaux/indication/C50.png';
import img36 from '../assets/panneaux/indication/C62.png';

import img37 from '../assets/panneaux/indication/C64a.png';
import img38 from '../assets/panneaux/indication/C64b.png';
import img39 from '../assets/panneaux/indication/C64c.png';
import img40 from '../assets/panneaux/indication/C64d_1.png';

import img41 from '../assets/panneaux/indication/C64d_2.png';
import img42 from '../assets/panneaux/indication/C107.png';
import img43 from '../assets/panneaux/indication/C108.png';
import img44 from '../assets/panneaux/indication/C111.png';

import img45 from '../assets/panneaux/indication/C112.png';
import img46 from '../assets/panneaux/indication/C113.png';
import img47 from '../assets/panneaux/indication/C114.png';
import img48 from '../assets/panneaux/indication/C115.png';

import img49 from '../assets/panneaux/indication/C116.png';
import img50 from '../assets/panneaux/indication/C207.png';
import img51 from '../assets/panneaux/indication/C208.png';

const panneauxIndication = [
    {
        id: 1,
        image: img1,
        description: "Lieu aménagé pour le stationnement parking",
        questions: [
            {
                questionId: 1,
                proposition: "Emplacement d'arrêt d'urgence",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement payant",
                status: false
            },
            {
                questionId: 3,
                proposition: "Lieu aménagé pour le stationnement parking",
                status: true
            },
            {
                questionId: 4,
                proposition: "Lieu aménagé pour le stationnement gratuit à durée limitée avec contrôle par disque",
                status: false
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Lieu aménagé pour le stationnement gratuit à durée limitée avec contrôle par disque",
        questions: [
            {
                questionId: 1,
                proposition: "Lieu aménagé pour le stationnement parking",
                status: false
            },
            {
                questionId: 2,
                proposition: "Risque d'incendie",
                status: false
            },
            {
                questionId: 3,
                proposition: "Stationnement payant",
                status: false
            },
            {
                questionId: 4,
                proposition: "Lieu aménagé pour le stationnement gratuit à durée limitée avec contrôle par disque",
                status: true
            },
        ],
    },
    {
        id: 3,
        image: img3,
        description: "Stationnement payant",
        questions: [
            {
                questionId: 1,
                proposition: "Lieu aménagé pour le stationnement gratuit à durée limitée avec contrôle par disque",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement payant",
                status: true
            },
            {
                questionId: 3,
                proposition: "Lieu aménagé pour le stationnement parking",
                status: false
            },
            {
                questionId: 4,
                proposition: "Paiement auprès d'un péagiste",
                status: false
            },
        ],
    },
    {
        id: 4,
        image: img4,
        description: "Risque d'incendie",
        questions: [
            {
                questionId: 1,
                proposition: "Risque d'incendie",
                status: true
            },
            {
                questionId: 2,
                proposition: "Vitesse conseillée",
                status: false
            },
            {
                questionId: 3,
                proposition: "Indication aux frontières rappelant les limites de vitesse sur le territoire français",
                status: false
            },
            {
                questionId: 4,
                proposition: "Début de voie verte",
                status: false
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Vitesse conseillée",
        questions: [
            {
                questionId: 1,
                proposition: "Vitesse minimale obligatoire",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse à 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de vitesse conseillée",
                status: false
            },
            {
                questionId: 4,
                proposition: "Vitesse conseillée",
                status: true
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Fin de vitesse conseillée",
        questions: [
            {
                questionId: 1,
                proposition: "Circulation à sens unique",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse à 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de vitesse conseillée",
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
        id: 7,
        image: img7,
        description: "Station de taxis",
        questions: [
            {
                questionId: 1,
                proposition: "Traversée de voie de tramways",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Emplacement d'arrêt d'urgence",
                status: false
            },
            {
                questionId: 4,
                proposition: "Station de taxis",
                status: true
            },
        ],
    },
    {
        id: 8,
        image: img8,
        description: "Station d'arrêt d'autobus",
        questions: [
            {
                questionId: 1,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Station d'arrêt d'autobus",
                status: true
            },
            {
                questionId: 3,
                proposition: "Paiement auprès d'un péagiste",
                status: false
            },
            {
                questionId: 4,
                proposition: "Emplacement d'arrêt d'urgence",
                status: false
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Emplacement d'arrêt d'urgence",
        questions: [
            {
                questionId: 1,
                proposition: "Route fermée. Section ouverte jusqu'au lieu indiqué",
                status: false
            },
            {
                questionId: 2,
                proposition: "Voies affectées",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de détresse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Emplacement d'arrêt d'urgence",
                status: true
            },
        ],
    },
    {
        id: 10,
        image: img10,
        description: "Circulation à sens unique",
        questions: [
            {
                questionId: 1,
                proposition: "Réduction du nombre de voies",
                status: false
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire à la prochaine intersection : tout droit",
                status: false
            },
            {
                questionId: 3,
                proposition: "Priorité par rapport à la circulation venant en sens inverse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation à sens unique",
                status: true
            },
        ],
    },
    {
        id: 11,
        image: img11,
        description: "Impasse ou rue sans issue",
        questions: [
            {
                questionId: 1,
                proposition: "Impasse ou rue sans issue",
                status: true
            },
            {
                questionId: 2,
                proposition: "Présignalisation d'une impasse",
                status: false
            },
            {
                questionId: 3,
                proposition: "Route fermée. Section ouverte jusqu'au lieu indiqué",
                status: false
            },
            {
                questionId: 4,
                proposition: "Signalistation par voie",
                status: false
            },
        ],
    },
    {
        id: 12,
        image: img12,
        description: "Présignalisation d'une impasse",
        questions: [
            {
                questionId: 1,
                proposition: "Impasse ou rue sans issue",
                status: false
            },
            {
                questionId: 2,
                proposition: "Présignalisation d'une impasse",
                status: true
            },
            {
                questionId: 3,
                proposition: "Emplacement d'arrêt d'urgence",
                status: false
            },
            {
                questionId: 4,
                proposition: "Voie de detresse",
                status: false
            },
        ],
    },
    {
        id: 13,
        image: img13,
        description: "Route fermée. Section ouverte jusqu'au lieu indiqué",
        questions: [
            {
                questionId: 1,
                proposition: "La voie de circulation en sens inverse est réservée aux cyclistes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Entrée d'un tunnel",
                status: false
            },
            {
                questionId: 3,
                proposition: "Route fermée. Section ouverte jusqu'au lieu indiqué",
                status: true
            },
            {
                questionId: 4,
                proposition: "Présignalisation de la praticabilité d'une route et son équipement obligatoire",
                status: false
            },
        ],
    },
    {
        id: 14,
        image: img14,
        description: "Présignalisation de la praticabilité d'une route et son équipement obligatoire",
        questions: [
            {
                questionId: 1,
                proposition: "Présignalisation de la praticabilité d'une route et son équipement obligatoire",
                status: true
            },
            {
                questionId: 2,
                proposition: "Début d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Début de voie verte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chaussée à double sens. Sens opposé réservé aux bus",
                status: false
            },
        ],
    },
    {
        id: 15,
        image: img15,
        description: "Priorité par rapport à la circulation venant en sens inverse",
        questions: [
            {
                questionId: 1,
                proposition: "Priorité par rapport à la circulation venant en sens inverse",
                status: true
            },
            {
                questionId: 2,
                proposition: "Circulation à sens unique",
                status: false
            },
            {
                questionId: 3,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Créneau de dépassement aux section de route à trois voies",
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
                proposition: "Voies affectées",
                status: false
            },
            {
                questionId: 2,
                proposition: "Chemin obligatoire pour piétons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Accès interdit aux piétons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Passage pour piétons",
                status: true
            },
        ],
    },
    {
        id: 17,
        image: img17,
        description: "Traversée de voie de tramways",
        questions: [
            {
                questionId: 1,
                proposition: "Voie reservée aux tramways",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage de cavaliers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Traversée de voie de tramways",
                status: true
            },
            {
                questionId: 4,
                proposition: "Lieu aménagé pour le stationnement parking",
                status: false
            },
        ],
    },
    {
        id: 18,
        image: img18,
        description: "Stationnement réglementé pour les caravanes et les autocaravanes",
        questions: [
            {
                questionId: 1,
                proposition: "Gare de téléphérique",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement réglementé pour les caravanes et les autocaravanes",
                status: true
            },
            {
                questionId: 3,
                proposition: "Station de vidange pour caravanes, auto-caravanes et car",
                status: false
            },
            {
                questionId: 4,
                proposition: "Atelier d'entretien de véhicules",
                status: false
            },
        ],
    },
    {
        id: 19,
        image: img19,
        description: "Condition particulières de circulation sur la voie centrale",
        questions: [
            {
                questionId: 1,
                proposition: "Condition particulières de circulation sur la voie centrale",
                status: true
            },
            {
                questionId: 2,
                proposition: "Chaussée à double sens. Sens opposé réservé aux bus",
                status: false
            },
            {
                questionId: 3,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Voies affectées",
                status: false
            },
        ],
    },
    {
        id: 20,
        image: img20,
        description: "Chaussée à double sens. Sens opposé réservé aux bus",
        questions: [
            {
                questionId: 1,
                proposition: "La voie de circulation en sens inverse est réservée aux cyclistes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Conditions particulières de circulation sur la route ou la voie embranchée",
                status: false
            },
            {
                questionId: 3,
                proposition: "Condition particulières de circulation sur la voie centrale",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chaussée à double sens. Sens opposé réservé aux bus",
                status: true
            },
        ],
    },
    {
        id: 21,
        image: img21,
        description: "Signalistation par voie",
        questions: [
            {
                questionId: 1,
                proposition: "Condition particulières de circulation sur la voie centrale",
                status: false
            },
            {
                questionId: 2,
                proposition: "Conditions particulières de circulation sur la route ou la voie embranchée",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voies affectées",
                status: false
            },
            {
                questionId: 4,
                proposition: "Signalistation par voie",
                status: true
            },
        ],
    },
    {
        id: 22,
        image: img22,
        description: "Voies affectées",
        questions: [
            {
                questionId: 1,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 2,
                proposition: "La voie de circulation en sens inverse est réservée aux cyclistes",
                status: false
            },
            {
                questionId: 3,
                proposition: "Conditions particulières de circulation sur la route ou la voie embranchée",
                status: false
            },
            {
                questionId: 4,
                proposition: "Voies affectées",
                status: true
            },
        ],
    },
    {
        id: 23,
        image: img23,
        description: "Conditions particulières de circulation sur la route ou la voie embranchée",
        questions: [
            {
                questionId: 1,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Voies affectées",
                status: false
            },
            {
                questionId: 3,
                proposition: "La voie de circulation en sens inverse est réservée aux cyclistes",
                status: false
            },
            {
                questionId: 4,
                proposition: "Conditions particulières de circulation sur la route ou la voie embranchée",
                status: true
            },
        ],
    },
    {
        id: 24,
        image: img24,
        description: "La voie de circulation en sens inverse est réservée aux cyclistes",
        questions: [
            {
                questionId: 1,
                proposition: "La voie de circulation en sens inverse est réservée aux cyclistes",
                status: true
            },
            {
                questionId: 2,
                proposition: "Débouché de cyclistes venant de droite ou de gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Risque de fort vent latéral",
                status: false
            },
            {
                questionId: 4,
                proposition: "Réduction du nombre de voies",
                status: false
            },
        ],
    },
    {
        id: 25,
        image: img25,
        description: "Indication aux frontières rappelant les limites de vitesse sur le territoire français",
        questions: [
            {
                questionId: 1,
                proposition: "Station de vidange pour caravanes, auto-caravanes et car",
                status: false
            },
            {
                questionId: 2,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Rappel des limites de vitesse sur autoroute",
                status: false
            },
            {
                questionId: 4,
                proposition: "Indication aux frontières rappelant les limites de vitesse sur le territoire français",
                status: true
            },
        ],
    },
    {
        id: 26,
        image: img26,
        description: "Rappel des limites de vitesse sur autoroute",
        questions: [
            {
                questionId: 1,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Début d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de détresse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Rappel des limites de vitesse sur autoroute",
                status: true
            },
        ],
    },
    {
        id: 27,
        image: img27,
        description: "Voie de détresse",
        questions: [
            {
                questionId: 1,
                proposition: "Route fermée. Section ouverte jusqu'au lieu indiqué",
                status: false
            },
            {
                questionId: 2,
                proposition: "Impasse ou rue sans issue",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de détresse",
                status: true
            },
            {
                questionId: 4,
                proposition: "Réduction du nombre de voies",
                status: false
            },
        ],
    },
    {
        id: 28,
        image: img28,
        description: "Voie de détresse",
        questions: [
            {
                questionId: 1,
                proposition: "Route fermée. Section ouverte jusqu'au lieu indiqué",
                status: false
            },
            {
                questionId: 2,
                proposition: "Réduction du nombre de voies",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de détresse",
                status: true
            },
            {
                questionId: 4,
                proposition: "Impasse ou rue sans issue",
                status: false
            },
        ],
    },
    {
        id: 29,
        image: img29,
        description: "Ralentisseur",
        questions: [
            {
                questionId: 1,
                proposition: "Passage pour piétons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de créneau de dépassement",
                status: false
            },
            {
                questionId: 3,
                proposition: "Cassis ou dos-d'âne",
                status: false
            },
            {
                questionId: 4,
                proposition: "Ralentisseur",
                status: true
            },
        ],
    },
    {
        id: 30,
        image: img30,
        description: "Réduction du nombre de voies",
        questions: [
            {
                questionId: 1,
                proposition: "Route à accès réglementé",
                status: false
            },
            {
                questionId: 2,
                proposition: "Réduction du nombre de voies",
                status: true
            },
            {
                questionId: 3,
                proposition: "Annonce d'un créneau de dépassement ou d'une route 2x2 voies",
                status: false
            },
            {
                questionId: 4,
                proposition: "Créneau de dépassement aux section de route à trois voies",
                status: false
            },
        ],
    },
    {
        id: 31,
        image: img31,
        description: "Réduction du nombre de voies",
        questions: [
            {
                questionId: 1,
                proposition: "Réduction du nombre de voies",
                status: true
            },
            {
                questionId: 2,
                proposition: "Présignalisation d'une borne de retrait de ticket de péage",
                status: false
            },
            {
                questionId: 3,
                proposition: "Créneau de dépassement aux section de route à trois voies",
                status: false
            },
            {
                questionId: 4,
                proposition: "Annonce d'un créneau de dépassement ou d'une route 2x2 voies",
                status: false
            },
        ],
    },
    {
        id: 32,
        image: img32,
        description: "Annonce d'un créneau de dépassement ou d'une route 2x2 voies",
        questions: [
            {
                questionId: 1,
                proposition: "Créneau de dépassement aux section de route à trois voies",
                status: false
            },
            {
                questionId: 2,
                proposition: "Annonce d'un créneau de dépassement ou d'une route 2x2 voies",
                status: true
            },
            {
                questionId: 3,
                proposition: "Présignalisation d'une borne de retrait de ticket de péage",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de créneau de dépassement",
                status: false
            },
        ],
    },
    {
        id: 33,
        image: img33,
        description: "Créneau de dépassement aux section de route à trois voies",
        questions: [
            {
                questionId: 1,
                proposition: "Réduction du nombre de voies",
                status: false
            },
            {
                questionId: 2,
                proposition: "Annonce d'un créneau de dépassement ou d'une route 2x2 voies",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de créneau de dépassement",
                status: false
            },
            {
                questionId: 4,
                proposition: "Créneau de dépassement aux section de route à trois voies",
                status: true
            },
        ],
    },
    {
        id: 34,
        image: img34,
        description: "Fin de créneau de dépassement",
        questions: [
            {
                questionId: 1,
                proposition: "Présignalisation d'une borne de retrait de ticket de péage",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de créneau de dépassement",
                status: true
            },
            {
                questionId: 3,
                proposition: "Créneau de dépassement aux section de route à trois voies",
                status: false
            },
            {
                questionId: 4,
                proposition: "Réduction du nombre de voies",
                status: false
            },
        ],
    },
    {
        id: 35,
        image: img35,
        description: "Indications diverses",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse à 15km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement par carte bancaire ou accréditive",
                status: false
            },
            {
                questionId: 3,
                proposition: "Paiement auprès d'un péagiste",
                status: false
            },
            {
                questionId: 4,
                proposition: "Indications diverses",
                status: true
            },
        ],
    },
    {
        id: 36,
        image: img36,
        description: "Présignalisation d'une borne de retrait de ticket de péage",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement automatique par pièces de monnaie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement par carte bancaire ou accréditive",
                status: false
            },
            {
                questionId: 3,
                proposition: "Présignalisation d'une borne de retrait de ticket de péage",
                status: true
            },
            {
                questionId: 4,
                proposition: "Paiement auprès d'un péagiste",
                status: false
            },
        ],
    },
    {
        id: 37,
        image: img37,
        description: "Paiement auprès d'un péagiste",
        questions: [
            {
                questionId: 1,
                proposition: "Présignalisation d'une borne de retrait de ticket de péage",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement auprès d'un péagiste",
                status: true
            },
            {
                questionId: 3,
                proposition: "Paiement par carte bancaire ou accréditive",
                status: false
            },
            {
                questionId: 4,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
        ],
    },
    {
        id: 38,
        image: img38,
        description: "Paiement par carte bancaire ou accréditive",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement par carte bancaire ou accréditive",
                status: true
            },
            {
                questionId: 2,
                proposition: "Paiement automatique par pièces de monnaie",
                status: false
            },
            {
                questionId: 3,
                proposition: "Paiement auprès d'un péagiste",
                status: false
            },
            {
                questionId: 4,
                proposition: "Début de voie verte",
                status: false
            },
        ],
    },
    {
        id: 39,
        image: img39,
        description: "Paiement automatique par pièces de monnaie",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement automatique par pièces de monnaie",
                status: true
            },
            {
                questionId: 2,
                proposition: "Paiement par abonnement. La voie est réservée aux usagers abonnés",
                status: false
            },
            {
                questionId: 3,
                proposition: "Présignalisation d'une borne de retrait de ticket de péage",
                status: false
            },
            {
                questionId: 4,
                proposition: "Route à accès réglementé",
                status: false
            },
        ],
    },
    {
        id: 40,
        image: img40,
        description: "Paiement par abonnement. La voie est réservée aux usagers abonnés",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement automatique par pièces de monnaie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement par carte bancaire ou accréditive",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage d'animaux domestiques",
                status: false
            },
            {
                questionId: 4,
                proposition: "Paiement par abonnement. La voie est réservée aux usagers abonnés",
                status: true
            },
        ],
    },
    {
        id: 41,
        image: img41,
        description: "Paiement par abonnement. La voie est réservée aux usagers abonnés",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement par abonnement. La voie est réservée aux usagers abonnés",
                status: true
            },
            {
                questionId: 2,
                proposition: "Paiement par abonnement. La voie est réservée aux usagers abonnés",
                status: false
            },
            {
                questionId: 3,
                proposition: "Paiement automatique par pièces de monnaie",
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
        id: 42,
        image: img42,
        description: "Route à accès réglementé",
        questions: [
            {
                questionId: 1,
                proposition: "Route à accès réglementé",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin de route à accès réglementé",
                status: false
            },
            {
                questionId: 3,
                proposition: "Début d'une section d'autoroute",
                status: false
            },
            {
                questionId: 4,
                proposition: "Entrée d'un tunnel",
                status: false
            },
        ],
    },
    {
        id: 43,
        image: img43,
        description: "Fin de route à accès réglementé",
        questions: [
            {
                questionId: 1,
                proposition: "Route à accès réglementé",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de route à accès réglementé",
                status: true
            },
            {
                questionId: 3,
                proposition: "Entrée d'un tunnel",
                status: false
            },
            {
                questionId: 4,
                proposition: "Début d'une section d'autoroute",
                status: false
            },
        ],
    },
    {
        id: 44,
        image: img44,
        description: "Entrée d'un tunnel",
        questions: [
            {
                questionId: 1,
                proposition: "Traversée d'une aire de danger aérien",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "Sortie de tunnel",
                status: false
            },
            {
                questionId: 4,
                proposition: "Entrée d'un tunnel",
                status: true
            },
        ],
    },
    {
        id: 45,
        image: img45,
        description: "Sortie de tunnel",
        questions: [
            {
                questionId: 1,
                proposition: "Début de voie verte",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Entrée d'un tunnel",
                status: false
            },
            {
                questionId: 4,
                proposition: "Sortie de tunnel",
                status: true
            },
        ],
    },
    {
        id: 46,
        image: img46,
        description: "Piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de chemin obligatoire pour piétons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: true
            },
            {
                questionId: 3,
                proposition: "Début de voie verte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Cafétéria ouvert 7j/7",
                status: false
            },
        ],
    },
    {
        id: 47,
        image: img47,
        description: "Fin de piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse à 70km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: true
            },
            {
                questionId: 4,
                proposition: "Début de voie verte",
                status: false
            },
        ],
    },
    {
        id: 48,
        image: img48,
        description: "Début de voie verte",
        questions: [
            {
                questionId: 1,
                proposition: "Terrain de camping pour tentes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseillée et réservée aux cycles à 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "Début de voie verte",
                status: true
            },
            {
                questionId: 4,
                proposition: "Fin de voie verte",
                status: false
            },
        ],
    },
    {
        id: 49,
        image: img49,
        description: "Fin de voie verte",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de voie verte",
                status: true
            },
            {
                questionId: 2,
                proposition: "Début d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Auberge de jeunesse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chambre d'hôtes ou gîte",
                status: false
            },
        ],
    },
    {
        id: 50,
        image: img50,
        description: "Début d'une section d'autoroute",
        questions: [
            {
                questionId: 1,
                proposition: "Début d'une section d'autoroute",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Arrêt obligatoire au poste de douane",
                status: false
            },
            {
                questionId: 4,
                proposition: "Signaux sonores interdits",
                status: false
            },
        ],
    },
    {
        id: 51,
        image: img51,
        description: "Fin d'une section d'autoroute",
        questions: [
            {
                questionId: 1,
                proposition: "Début d'une section d'autoroute",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: true
            },
            {
                questionId: 3,
                proposition: "Route à accès réglementé",
                status: false
            },
            {
                questionId: 4,
                proposition: "Entrée d'un tunnel",
                status: false
            },
        ],
    },
];

export default panneauxIndication;