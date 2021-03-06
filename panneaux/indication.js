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
        description: "Lieu am??nag?? pour le stationnement parking",
        questions: [
            {
                questionId: 1,
                proposition: "Emplacement d'arr??t d'urgence",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement payant",
                status: false
            },
            {
                questionId: 3,
                proposition: "Lieu am??nag?? pour le stationnement parking",
                status: true
            },
            {
                questionId: 4,
                proposition: "Lieu am??nag?? pour le stationnement gratuit ?? dur??e limit??e avec contr??le par disque",
                status: false
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Lieu am??nag?? pour le stationnement gratuit ?? dur??e limit??e avec contr??le par disque",
        questions: [
            {
                questionId: 1,
                proposition: "Lieu am??nag?? pour le stationnement parking",
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
                proposition: "Lieu am??nag?? pour le stationnement gratuit ?? dur??e limit??e avec contr??le par disque",
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
                proposition: "Lieu am??nag?? pour le stationnement gratuit ?? dur??e limit??e avec contr??le par disque",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement payant",
                status: true
            },
            {
                questionId: 3,
                proposition: "Lieu am??nag?? pour le stationnement parking",
                status: false
            },
            {
                questionId: 4,
                proposition: "Paiement aupr??s d'un p??agiste",
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
                proposition: "Vitesse conseill??e",
                status: false
            },
            {
                questionId: 3,
                proposition: "Indication aux fronti??res rappelant les limites de vitesse sur le territoire fran??ais",
                status: false
            },
            {
                questionId: 4,
                proposition: "D??but de voie verte",
                status: false
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Vitesse conseill??e",
        questions: [
            {
                questionId: 1,
                proposition: "Vitesse minimale obligatoire",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de vitesse conseill??e",
                status: false
            },
            {
                questionId: 4,
                proposition: "Vitesse conseill??e",
                status: true
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Fin de vitesse conseill??e",
        questions: [
            {
                questionId: 1,
                proposition: "Circulation ?? sens unique",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de vitesse conseill??e",
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
                proposition: "Travers??e de voie de tramways",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage pour pi??tons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Emplacement d'arr??t d'urgence",
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
        description: "Station d'arr??t d'autobus",
        questions: [
            {
                questionId: 1,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Station d'arr??t d'autobus",
                status: true
            },
            {
                questionId: 3,
                proposition: "Paiement aupr??s d'un p??agiste",
                status: false
            },
            {
                questionId: 4,
                proposition: "Emplacement d'arr??t d'urgence",
                status: false
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Emplacement d'arr??t d'urgence",
        questions: [
            {
                questionId: 1,
                proposition: "Route ferm??e. Section ouverte jusqu'au lieu indiqu??",
                status: false
            },
            {
                questionId: 2,
                proposition: "Voies affect??es",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de d??tresse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Emplacement d'arr??t d'urgence",
                status: true
            },
        ],
    },
    {
        id: 10,
        image: img10,
        description: "Circulation ?? sens unique",
        questions: [
            {
                questionId: 1,
                proposition: "R??duction du nombre de voies",
                status: false
            },
            {
                questionId: 2,
                proposition: "Direction obligatoire ?? la prochaine intersection : tout droit",
                status: false
            },
            {
                questionId: 3,
                proposition: "Priorit?? par rapport ?? la circulation venant en sens inverse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation ?? sens unique",
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
                proposition: "Pr??signalisation d'une impasse",
                status: false
            },
            {
                questionId: 3,
                proposition: "Route ferm??e. Section ouverte jusqu'au lieu indiqu??",
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
        description: "Pr??signalisation d'une impasse",
        questions: [
            {
                questionId: 1,
                proposition: "Impasse ou rue sans issue",
                status: false
            },
            {
                questionId: 2,
                proposition: "Pr??signalisation d'une impasse",
                status: true
            },
            {
                questionId: 3,
                proposition: "Emplacement d'arr??t d'urgence",
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
        description: "Route ferm??e. Section ouverte jusqu'au lieu indiqu??",
        questions: [
            {
                questionId: 1,
                proposition: "La voie de circulation en sens inverse est r??serv??e aux cyclistes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Entr??e d'un tunnel",
                status: false
            },
            {
                questionId: 3,
                proposition: "Route ferm??e. Section ouverte jusqu'au lieu indiqu??",
                status: true
            },
            {
                questionId: 4,
                proposition: "Pr??signalisation de la praticabilit?? d'une route et son ??quipement obligatoire",
                status: false
            },
        ],
    },
    {
        id: 14,
        image: img14,
        description: "Pr??signalisation de la praticabilit?? d'une route et son ??quipement obligatoire",
        questions: [
            {
                questionId: 1,
                proposition: "Pr??signalisation de la praticabilit?? d'une route et son ??quipement obligatoire",
                status: true
            },
            {
                questionId: 2,
                proposition: "D??but d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "D??but de voie verte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chauss??e ?? double sens. Sens oppos?? r??serv?? aux bus",
                status: false
            },
        ],
    },
    {
        id: 15,
        image: img15,
        description: "Priorit?? par rapport ?? la circulation venant en sens inverse",
        questions: [
            {
                questionId: 1,
                proposition: "Priorit?? par rapport ?? la circulation venant en sens inverse",
                status: true
            },
            {
                questionId: 2,
                proposition: "Circulation ?? sens unique",
                status: false
            },
            {
                questionId: 3,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Cr??neau de d??passement aux section de route ?? trois voies",
                status: false
            },
        ],
    },
    {
        id: 16,
        image: img16,
        description: "Passage pour pi??tons",
        questions: [
            {
                questionId: 1,
                proposition: "Voies affect??es",
                status: false
            },
            {
                questionId: 2,
                proposition: "Chemin obligatoire pour pi??tons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux pi??tons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Passage pour pi??tons",
                status: true
            },
        ],
    },
    {
        id: 17,
        image: img17,
        description: "Travers??e de voie de tramways",
        questions: [
            {
                questionId: 1,
                proposition: "Voie reserv??e aux tramways",
                status: false
            },
            {
                questionId: 2,
                proposition: "Passage de cavaliers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Travers??e de voie de tramways",
                status: true
            },
            {
                questionId: 4,
                proposition: "Lieu am??nag?? pour le stationnement parking",
                status: false
            },
        ],
    },
    {
        id: 18,
        image: img18,
        description: "Stationnement r??glement?? pour les caravanes et les autocaravanes",
        questions: [
            {
                questionId: 1,
                proposition: "Gare de t??l??ph??rique",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement r??glement?? pour les caravanes et les autocaravanes",
                status: true
            },
            {
                questionId: 3,
                proposition: "Station de vidange pour caravanes, auto-caravanes et car",
                status: false
            },
            {
                questionId: 4,
                proposition: "Atelier d'entretien de v??hicules",
                status: false
            },
        ],
    },
    {
        id: 19,
        image: img19,
        description: "Condition particuli??res de circulation sur la voie centrale",
        questions: [
            {
                questionId: 1,
                proposition: "Condition particuli??res de circulation sur la voie centrale",
                status: true
            },
            {
                questionId: 2,
                proposition: "Chauss??e ?? double sens. Sens oppos?? r??serv?? aux bus",
                status: false
            },
            {
                questionId: 3,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Voies affect??es",
                status: false
            },
        ],
    },
    {
        id: 20,
        image: img20,
        description: "Chauss??e ?? double sens. Sens oppos?? r??serv?? aux bus",
        questions: [
            {
                questionId: 1,
                proposition: "La voie de circulation en sens inverse est r??serv??e aux cyclistes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Conditions particuli??res de circulation sur la route ou la voie embranch??e",
                status: false
            },
            {
                questionId: 3,
                proposition: "Condition particuli??res de circulation sur la voie centrale",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chauss??e ?? double sens. Sens oppos?? r??serv?? aux bus",
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
                proposition: "Condition particuli??res de circulation sur la voie centrale",
                status: false
            },
            {
                questionId: 2,
                proposition: "Conditions particuli??res de circulation sur la route ou la voie embranch??e",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voies affect??es",
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
        description: "Voies affect??es",
        questions: [
            {
                questionId: 1,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 2,
                proposition: "La voie de circulation en sens inverse est r??serv??e aux cyclistes",
                status: false
            },
            {
                questionId: 3,
                proposition: "Conditions particuli??res de circulation sur la route ou la voie embranch??e",
                status: false
            },
            {
                questionId: 4,
                proposition: "Voies affect??es",
                status: true
            },
        ],
    },
    {
        id: 23,
        image: img23,
        description: "Conditions particuli??res de circulation sur la route ou la voie embranch??e",
        questions: [
            {
                questionId: 1,
                proposition: "Signalistation par voie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Voies affect??es",
                status: false
            },
            {
                questionId: 3,
                proposition: "La voie de circulation en sens inverse est r??serv??e aux cyclistes",
                status: false
            },
            {
                questionId: 4,
                proposition: "Conditions particuli??res de circulation sur la route ou la voie embranch??e",
                status: true
            },
        ],
    },
    {
        id: 24,
        image: img24,
        description: "La voie de circulation en sens inverse est r??serv??e aux cyclistes",
        questions: [
            {
                questionId: 1,
                proposition: "La voie de circulation en sens inverse est r??serv??e aux cyclistes",
                status: true
            },
            {
                questionId: 2,
                proposition: "D??bouch?? de cyclistes venant de droite ou de gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Risque de fort vent lat??ral",
                status: false
            },
            {
                questionId: 4,
                proposition: "R??duction du nombre de voies",
                status: false
            },
        ],
    },
    {
        id: 25,
        image: img25,
        description: "Indication aux fronti??res rappelant les limites de vitesse sur le territoire fran??ais",
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
                proposition: "Indication aux fronti??res rappelant les limites de vitesse sur le territoire fran??ais",
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
                proposition: "Passage pour pi??tons",
                status: false
            },
            {
                questionId: 2,
                proposition: "D??but d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de d??tresse",
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
        description: "Voie de d??tresse",
        questions: [
            {
                questionId: 1,
                proposition: "Route ferm??e. Section ouverte jusqu'au lieu indiqu??",
                status: false
            },
            {
                questionId: 2,
                proposition: "Impasse ou rue sans issue",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de d??tresse",
                status: true
            },
            {
                questionId: 4,
                proposition: "R??duction du nombre de voies",
                status: false
            },
        ],
    },
    {
        id: 28,
        image: img28,
        description: "Voie de d??tresse",
        questions: [
            {
                questionId: 1,
                proposition: "Route ferm??e. Section ouverte jusqu'au lieu indiqu??",
                status: false
            },
            {
                questionId: 2,
                proposition: "R??duction du nombre de voies",
                status: false
            },
            {
                questionId: 3,
                proposition: "Voie de d??tresse",
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
                proposition: "Passage pour pi??tons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de cr??neau de d??passement",
                status: false
            },
            {
                questionId: 3,
                proposition: "Cassis ou dos-d'??ne",
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
        description: "R??duction du nombre de voies",
        questions: [
            {
                questionId: 1,
                proposition: "Route ?? acc??s r??glement??",
                status: false
            },
            {
                questionId: 2,
                proposition: "R??duction du nombre de voies",
                status: true
            },
            {
                questionId: 3,
                proposition: "Annonce d'un cr??neau de d??passement ou d'une route 2x2 voies",
                status: false
            },
            {
                questionId: 4,
                proposition: "Cr??neau de d??passement aux section de route ?? trois voies",
                status: false
            },
        ],
    },
    {
        id: 31,
        image: img31,
        description: "R??duction du nombre de voies",
        questions: [
            {
                questionId: 1,
                proposition: "R??duction du nombre de voies",
                status: true
            },
            {
                questionId: 2,
                proposition: "Pr??signalisation d'une borne de retrait de ticket de p??age",
                status: false
            },
            {
                questionId: 3,
                proposition: "Cr??neau de d??passement aux section de route ?? trois voies",
                status: false
            },
            {
                questionId: 4,
                proposition: "Annonce d'un cr??neau de d??passement ou d'une route 2x2 voies",
                status: false
            },
        ],
    },
    {
        id: 32,
        image: img32,
        description: "Annonce d'un cr??neau de d??passement ou d'une route 2x2 voies",
        questions: [
            {
                questionId: 1,
                proposition: "Cr??neau de d??passement aux section de route ?? trois voies",
                status: false
            },
            {
                questionId: 2,
                proposition: "Annonce d'un cr??neau de d??passement ou d'une route 2x2 voies",
                status: true
            },
            {
                questionId: 3,
                proposition: "Pr??signalisation d'une borne de retrait de ticket de p??age",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de cr??neau de d??passement",
                status: false
            },
        ],
    },
    {
        id: 33,
        image: img33,
        description: "Cr??neau de d??passement aux section de route ?? trois voies",
        questions: [
            {
                questionId: 1,
                proposition: "R??duction du nombre de voies",
                status: false
            },
            {
                questionId: 2,
                proposition: "Annonce d'un cr??neau de d??passement ou d'une route 2x2 voies",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de cr??neau de d??passement",
                status: false
            },
            {
                questionId: 4,
                proposition: "Cr??neau de d??passement aux section de route ?? trois voies",
                status: true
            },
        ],
    },
    {
        id: 34,
        image: img34,
        description: "Fin de cr??neau de d??passement",
        questions: [
            {
                questionId: 1,
                proposition: "Pr??signalisation d'une borne de retrait de ticket de p??age",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de cr??neau de d??passement",
                status: true
            },
            {
                questionId: 3,
                proposition: "Cr??neau de d??passement aux section de route ?? trois voies",
                status: false
            },
            {
                questionId: 4,
                proposition: "R??duction du nombre de voies",
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
                proposition: "Limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement par carte bancaire ou accr??ditive",
                status: false
            },
            {
                questionId: 3,
                proposition: "Paiement aupr??s d'un p??agiste",
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
        description: "Pr??signalisation d'une borne de retrait de ticket de p??age",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement automatique par pi??ces de monnaie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement par carte bancaire ou accr??ditive",
                status: false
            },
            {
                questionId: 3,
                proposition: "Pr??signalisation d'une borne de retrait de ticket de p??age",
                status: true
            },
            {
                questionId: 4,
                proposition: "Paiement aupr??s d'un p??agiste",
                status: false
            },
        ],
    },
    {
        id: 37,
        image: img37,
        description: "Paiement aupr??s d'un p??agiste",
        questions: [
            {
                questionId: 1,
                proposition: "Pr??signalisation d'une borne de retrait de ticket de p??age",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement aupr??s d'un p??agiste",
                status: true
            },
            {
                questionId: 3,
                proposition: "Paiement par carte bancaire ou accr??ditive",
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
        description: "Paiement par carte bancaire ou accr??ditive",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement par carte bancaire ou accr??ditive",
                status: true
            },
            {
                questionId: 2,
                proposition: "Paiement automatique par pi??ces de monnaie",
                status: false
            },
            {
                questionId: 3,
                proposition: "Paiement aupr??s d'un p??agiste",
                status: false
            },
            {
                questionId: 4,
                proposition: "D??but de voie verte",
                status: false
            },
        ],
    },
    {
        id: 39,
        image: img39,
        description: "Paiement automatique par pi??ces de monnaie",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement automatique par pi??ces de monnaie",
                status: true
            },
            {
                questionId: 2,
                proposition: "Paiement par abonnement. La voie est r??serv??e aux usagers abonn??s",
                status: false
            },
            {
                questionId: 3,
                proposition: "Pr??signalisation d'une borne de retrait de ticket de p??age",
                status: false
            },
            {
                questionId: 4,
                proposition: "Route ?? acc??s r??glement??",
                status: false
            },
        ],
    },
    {
        id: 40,
        image: img40,
        description: "Paiement par abonnement. La voie est r??serv??e aux usagers abonn??s",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement automatique par pi??ces de monnaie",
                status: false
            },
            {
                questionId: 2,
                proposition: "Paiement par carte bancaire ou accr??ditive",
                status: false
            },
            {
                questionId: 3,
                proposition: "Passage d'animaux domestiques",
                status: false
            },
            {
                questionId: 4,
                proposition: "Paiement par abonnement. La voie est r??serv??e aux usagers abonn??s",
                status: true
            },
        ],
    },
    {
        id: 41,
        image: img41,
        description: "Paiement par abonnement. La voie est r??serv??e aux usagers abonn??s",
        questions: [
            {
                questionId: 1,
                proposition: "Paiement par abonnement. La voie est r??serv??e aux usagers abonn??s",
                status: true
            },
            {
                questionId: 2,
                proposition: "Paiement par abonnement. La voie est r??serv??e aux usagers abonn??s",
                status: false
            },
            {
                questionId: 3,
                proposition: "Paiement automatique par pi??ces de monnaie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Risque de fort vent lat??ral",
                status: false
            },
        ],
    },
    {
        id: 42,
        image: img42,
        description: "Route ?? acc??s r??glement??",
        questions: [
            {
                questionId: 1,
                proposition: "Route ?? acc??s r??glement??",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin de route ?? acc??s r??glement??",
                status: false
            },
            {
                questionId: 3,
                proposition: "D??but d'une section d'autoroute",
                status: false
            },
            {
                questionId: 4,
                proposition: "Entr??e d'un tunnel",
                status: false
            },
        ],
    },
    {
        id: 43,
        image: img43,
        description: "Fin de route ?? acc??s r??glement??",
        questions: [
            {
                questionId: 1,
                proposition: "Route ?? acc??s r??glement??",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de route ?? acc??s r??glement??",
                status: true
            },
            {
                questionId: 3,
                proposition: "Entr??e d'un tunnel",
                status: false
            },
            {
                questionId: 4,
                proposition: "D??but d'une section d'autoroute",
                status: false
            },
        ],
    },
    {
        id: 44,
        image: img44,
        description: "Entr??e d'un tunnel",
        questions: [
            {
                questionId: 1,
                proposition: "Travers??e d'une aire de danger a??rien",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "Sortie de tunnel",
                status: false
            },
            {
                questionId: 4,
                proposition: "Entr??e d'un tunnel",
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
                proposition: "D??but de voie verte",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Entr??e d'un tunnel",
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
        description: "Piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de chemin obligatoire pour pi??tons",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
                status: true
            },
            {
                questionId: 3,
                proposition: "D??but de voie verte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Caf??t??ria ouvert 7j/7",
                status: false
            },
        ],
    },
    {
        id: 47,
        image: img47,
        description: "Fin de piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 70km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
                status: true
            },
            {
                questionId: 4,
                proposition: "D??but de voie verte",
                status: false
            },
        ],
    },
    {
        id: 48,
        image: img48,
        description: "D??but de voie verte",
        questions: [
            {
                questionId: 1,
                proposition: "Terrain de camping pour tentes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
                status: false
            },
            {
                questionId: 3,
                proposition: "D??but de voie verte",
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
                proposition: "D??but d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Auberge de jeunesse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chambre d'h??tes ou g??te",
                status: false
            },
        ],
    },
    {
        id: 50,
        image: img50,
        description: "D??but d'une section d'autoroute",
        questions: [
            {
                questionId: 1,
                proposition: "D??but d'une section d'autoroute",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Arr??t obligatoire au poste de douane",
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
                proposition: "D??but d'une section d'autoroute",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: true
            },
            {
                questionId: 3,
                proposition: "Route ?? acc??s r??glement??",
                status: false
            },
            {
                questionId: 4,
                proposition: "Entr??e d'un tunnel",
                status: false
            },
        ],
    },
];

export default panneauxIndication;