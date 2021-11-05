import img1 from '../assets/panneaux/services/CE1.png';
import img2 from '../assets/panneaux/services/CE2a.png';
import img3 from '../assets/panneaux/services/CE2b.png';
import img4 from '../assets/panneaux/services/CE3a.png';

import img5 from '../assets/panneaux/services/CE4a.png';
import img6 from '../assets/panneaux/services/CE4b.png';
import img7 from '../assets/panneaux/services/CE4c.png';
import img8 from '../assets/panneaux/services/CE5a.png';

import img9 from '../assets/panneaux/services/CE5b.png';
import img10 from '../assets/panneaux/services/CE6a.png';
import img11 from '../assets/panneaux/services/CE6b.png';
import img12 from '../assets/panneaux/services/CE7.png';

import img13 from '../assets/panneaux/services/CE8.png';
import img14 from '../assets/panneaux/services/CE9.png';
import img15 from '../assets/panneaux/services/CE10.png';
import img16 from '../assets/panneaux/services/CE12.png';

import img17 from '../assets/panneaux/services/CE14.png';
import img18 from '../assets/panneaux/services/CE15a.png';
import img19 from '../assets/panneaux/services/CE15c.png';
import img20 from '../assets/panneaux/services/CE16.png';

import img21 from '../assets/panneaux/services/CE17.png';
import img22 from '../assets/panneaux/services/CE18.png';
import img23 from '../assets/panneaux/services/CE19.png';
import img24 from '../assets/panneaux/services/CE20a.png';

import img25 from '../assets/panneaux/services/CE20b.png';
import img26 from '../assets/panneaux/services/CE21.png';
import img27 from '../assets/panneaux/services/CE22.png';
import img28 from '../assets/panneaux/services/CE23.png';

import img29 from '../assets/panneaux/services/CE24.png';
import img30 from '../assets/panneaux/services/CE25.png';
import img31 from '../assets/panneaux/services/CE26.png';
import img32 from '../assets/panneaux/services/CE27.png';

import img33 from '../assets/panneaux/services/CE28.png';
import img34 from '../assets/panneaux/services/CE29.png';
import img35 from '../assets/panneaux/services/CE30a.png';
import img36 from '../assets/panneaux/services/CE30b.png';

import img37 from '../assets/panneaux/services/CE50.png';

const panneauxServices = [
    {
        id: 1,
        image: img1,
        description: "Poste de secours",
        questions: [
            {
                questionId: 1,
                proposition: "Poste de secours",
                status: true
            },
            {
                questionId: 2,
                proposition: "Moyen de lutte contre les incendies : extincteur",
                status: false
            },
            {
                questionId: 3,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
            {
                questionId: 4,
                proposition: "Poste d'appel d'urgence",
                status: false
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Poste d'appel d'urgence",
        questions: [
            {
                questionId: 1,
                proposition: "Poste de secours",
                status: false
            },
            {
                questionId: 2,
                proposition: "Poste d'appel d'urgence",
                status: true
            },
            {
                questionId: 3,
                proposition: "Poste d'appel d'urgence",
                status: false
            },
            {
                questionId: 4,
                proposition: "Terrain de camping pour tentes",
                status: false
            },
        ],
    },
    {
        id: 3,
        image: img3,
        description: "Cabine téléphonique publique",
        questions: [
            {
                questionId: 1,
                proposition: "Cabine téléphonique publique",
                status: true
            },
            {
                questionId: 2,
                proposition: "Informations relatives aux services ou activités touristiques",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chambre d'hôtes ou gîte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
        ],
    },
    {
        id: 4,
        image: img4,
        description: "Informations relatives aux services ou activités touristiques",
        questions: [
            {
                questionId: 1,
                proposition: "Moyen de lutte contre les incendies : extincteur",
                status: false
            },
            {
                questionId: 2,
                proposition: "Gare auto-train",
                status: false
            },
            {
                questionId: 3,
                proposition: "Informations relatives aux services ou activités touristiques",
                status: true
            },
            {
                questionId: 4,
                proposition: "Terrain de camping pour caravanes et auto-caravanes",
                status: false
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Terrain de camping pour tentes",
        questions: [
            {
                questionId: 1,
                proposition: "Terrain de camping pour tentes",
                status: true
            },
            {
                questionId: 2,
                proposition: "Point de départ d'itinéraire pédestre",
                status: false
            },
            {
                questionId: 3,
                proposition: "Emplacement pour pique-nique",
                status: false
            },
            {
                questionId: 4,
                proposition: "Poste de gonflage gratuit",
                status: false
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Terrain de camping pour caravanes et auto-caravanes",
        questions: [
            {
                questionId: 1,
                proposition: "Atelier d'entretien de véhicules",
                status: false
            },
            {
                questionId: 2,
                proposition: "Terrain de camping pour caravanes et auto-caravanes",
                status: true
            },
            {
                questionId: 3,
                proposition: "Embarcadère",
                status: false
            },
            {
                questionId: 4,
                proposition: "Point de départ d'itinéraire pédestre",
                status: false
            },
        ],
    },
    {
        id: 7,
        image: img7,
        description: "Terrain de camping pour tentes, caravanes et auto-caravanes",
        questions: [
            {
                questionId: 1,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
            {
                questionId: 2,
                proposition: "Auberge de jeunesse",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chambre d'hôtes ou gîte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Terrain de camping pour tentes, caravanes et auto-caravanes",
                status: true
            },
        ],
    },
    {
        id: 8,
        image: img8,
        description: "Auberge de jeunesse",
        questions: [
            {
                questionId: 1,
                proposition: "Issue de secours vers la droite",
                status: false
            },
            {
                questionId: 2,
                proposition: "Restauration ouvert 7j/7",
                status: false
            },
            {
                questionId: 3,
                proposition: "Auberge de jeunesse",
                status: true
            },
            {
                questionId: 4,
                proposition: "Point de départ d'itinéraire pédestre",
                status: false
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Chambre d'hôtes ou gîte",
        questions: [
            {
                questionId: 1,
                proposition: "Station de vidange pour caravanes, auto-caravanes et car",
                status: false
            },
            {
                questionId: 2,
                proposition: "Chambre d'hôtes ou gîte",
                status: true
            },
            {
                questionId: 3,
                proposition: "Auberge de jeunesse",
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
        id: 10,
        image: img10,
        description: "Point de départ d'itinéraire pédestre",
        questions: [
            {
                questionId: 1,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fréquence radio dédiée aux informations de circulation routière",
                status: false
            },
            {
                questionId: 3,
                proposition: "Point de départ d'itinéraire pédestre",
                status: true
            },
            {
                questionId: 4,
                proposition: "Parking sous surveillance",
                status: false
            },
        ],
    },
    {
        id: 11,
        image: img11,
        description: "Point de départ d'un circuit de ski de fond",
        questions: [
            {
                questionId: 1,
                proposition: "Poste de distribution de carburant",
                status: false
            },
            {
                questionId: 2,
                proposition: "Emplacement pour pique-nique",
                status: false
            },
            {
                questionId: 3,
                proposition: "Gare auto-train",
                status: false
            },
            {
                questionId: 4,
                proposition: "Point de départ d'un circuit de ski de fond",
                status: true
            },
        ],
    },
    {
        id: 12,
        image: img12,
        description: "Emplacement pour pique-nique",
        questions: [
            {
                questionId: 1,
                proposition: "Poste de distribution de carburant",
                status: false
            },
            {
                questionId: 2,
                proposition: "Embarcadère",
                status: false
            },
            {
                questionId: 3,
                proposition: "Emplacement pour pique-nique",
                status: true
            },
            {
                questionId: 4,
                proposition: "Parking sous surveillance",
                status: false
            },
        ],
    },
    {
        id: 13,
        image: img13,
        description: "Gare auto-train",
        questions: [
            {
                questionId: 1,
                proposition: "Gare auto-train",
                status: true
            },
            {
                questionId: 2,
                proposition: "Gare de téléphérique",
                status: false
            },
            {
                questionId: 3,
                proposition: "Poste de distribution de carburant",
                status: false
            },
            {
                questionId: 4,
                proposition: "Parking sous surveillance",
                status: false
            },
        ],
    },
    {
        id: 14,
        image: img14,
        description: "Parking sous surveillance",
        questions: [
            {
                questionId: 1,
                proposition: "Parking sous surveillance",
                status: true
            },
            {
                questionId: 2,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
            {
                questionId: 3,
                proposition: "Restauration ouvert 7j/7",
                status: false
            },
            {
                questionId: 4,
                proposition: "Jeux d'enfants",
                status: false
            },
        ],
    },
    {
        id: 15,
        image: img15,
        description: "Embarcadère",
        questions: [
            {
                questionId: 1,
                proposition: "Auberge de jeunesse",
                status: false
            },
            {
                questionId: 2,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Distributeur de billets de banque",
                status: false
            },
            {
                questionId: 4,
                proposition: "Embarcadère",
                status: true
            },
        ],
    },
    {
        id: 16,
        image: img16,
        description: "Toilettes ouvertes au public",
        questions: [
            {
                questionId: 1,
                proposition: "Poste de distribution de carburant assurant le ravitaillement GPL",
                status: false
            },
            {
                questionId: 2,
                proposition: "Point de vue",
                status: false
            },
            {
                questionId: 3,
                proposition: "Terrain de camping pour tentes",
                status: false
            },
            {
                questionId: 4,
                proposition: "Toilettes ouvertes au public",
                status: true
            },
        ],
    },
    {
        id: 17,
        image: img17,
        description: "Installations accessibles aux personnes à mobilité réduite",
        questions: [
            {
                questionId: 1,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
            {
                questionId: 2,
                proposition: "Installations accessibles aux personnes à mobilité réduite",
                status: true
            },
            {
                questionId: 3,
                proposition: "Poste de distribution de carburant",
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
        id: 18,
        image: img18,
        description: "Poste de distribution de carburant",
        questions: [
            {
                questionId: 1,
                proposition: "Atelier d'entretien de véhicules",
                status: false
            },
            {
                questionId: 2,
                proposition: "Jeux d'enfants",
                status: false
            },
            {
                questionId: 3,
                proposition: "Installations accessibles aux personnes à mobilité réduite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Poste de distribution de carburant",
                status: true
            },
        ],
    },
    {
        id: 19,
        image: img19,
        description: "Poste de distribution de carburant assurant le ravitaillement GPL",
        questions: [
            {
                questionId: 1,
                proposition: "Gare de téléphérique",
                status: false
            },
            {
                questionId: 2,
                proposition: "Poste de distribution de carburant assurant le ravitaillement GPL",
                status: true
            },
            {
                questionId: 3,
                proposition: "Point de détente",
                status: false
            },
            {
                questionId: 4,
                proposition: "Poste d'appel d'urgence",
                status: false
            },
        ],
    },
    {
        id: 20,
        image: img20,
        description: "Restauration ouvert 7j/7",
        questions: [
            {
                questionId: 1,
                proposition: "Emplacement de mise à l'eau d'embarcations légères",
                status: false
            },
            {
                questionId: 2,
                proposition: "Cafétéria ouvert 7j/7",
                status: false
            },
            {
                questionId: 3,
                proposition: "Hôtel ou motel ouvert 7j/7",
                status: false
            },
            {
                questionId: 4,
                proposition: "Restauration ouvert 7j/7",
                status: true
            },
        ],
    },
    {
        id: 21,
        image: img21,
        description: "Hôtel ou motel ouvert 7j/7",
        questions: [
            {
                questionId: 1,
                proposition: "Hôtel ou motel ouvert 7j/7",
                status: true
            },
            {
                questionId: 2,
                proposition: "Restauration ouvert 7j/7",
                status: false
            },
            {
                questionId: 3,
                proposition: "Cafétéria ouvert 7j/7",
                status: false
            },
            {
                questionId: 4,
                proposition: "Gare de téléphérique",
                status: false
            },
        ],
    },
    {
        id: 22,
        image: img22,
        description: "Cafétéria ouvert 7j/7",
        questions: [
            {
                questionId: 1,
                proposition: "Hôtel ou motel ouvert 7j/7",
                status: false
            },
            {
                questionId: 2,
                proposition: "Issue de secours vers la droite",
                status: false
            },
            {
                questionId: 3,
                proposition: "Cafétéria ouvert 7j/7",
                status: true
            },
            {
                questionId: 4,
                proposition: "Restauration ouvert 7j/7",
                status: false
            },
        ],
    },
    {
        id: 23,
        image: img23,
        description: "Emplacement de mise à l'eau d'embarcations légères",
        questions: [
            {
                questionId: 1,
                proposition: "Restauration ouvert 7j/7",
                status: false
            },
            {
                questionId: 2,
                proposition: "Point de vue",
                status: false
            },
            {
                questionId: 3,
                proposition: "Emplacement de mise à l'eau d'embarcations légères",
                status: true
            },
            {
                questionId: 4,
                proposition: "Terrain de camping pour tentes, caravanes et auto-caravanes",
                status: false
            },
        ],
    },
    {
        id: 24,
        image: img24,
        description: "Gare de téléphérique",
        questions: [
            {
                questionId: 1,
                proposition: "Station de vidange pour caravanes, auto-caravanes et car",
                status: false
            },
            {
                questionId: 2,
                proposition: "Point de départ d'un télésiège ou d'une télécabine",
                status: false
            },
            {
                questionId: 3,
                proposition: "Point de vue",
                status: false
            },
            {
                questionId: 4,
                proposition: "Gare de téléphérique",
                status: true
            },
        ],
    },
    {
        id: 25,
        image: img25,
        description: "Point de départ d'un télésiège ou d'une télécabine",
        questions: [
            {
                questionId: 1,
                proposition: "Point de vue",
                status: false
            },
            {
                questionId: 2,
                proposition: "Jeux d'enfants",
                status: false
            },
            {
                questionId: 3,
                proposition: "Issue de secours vers la droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Point de départ d'un télésiège ou d'une télécabine",
                status: true
            },
        ],
    },
    {
        id: 26,
        image: img26,
        description: "Point de vue",
        questions: [
            {
                questionId: 1,
                proposition: "Point de vue",
                status: true
            },
            {
                questionId: 2,
                proposition: "Terrain de camping pour tentes",
                status: false
            },
            {
                questionId: 3,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fréquence radio dédiée aux informations de circulation routière",
                status: false
            },
        ],
    },
    {
        id: 27,
        image: img27,
        description: "Fréquence radio dédiée aux informations de circulation routière",
        questions: [
            {
                questionId: 1,
                proposition: "Fréquence radio dédiée aux informations de circulation routière",
                status: true
            },
            {
                questionId: 2,
                proposition: "Distributeur de billets de banque",
                status: false
            },
            {
                questionId: 3,
                proposition: "Installations ou services divers",
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
        id: 28,
        image: img28,
        description: "Jeux d'enfants",
        questions: [
            {
                questionId: 1,
                proposition: "Terrain de camping pour tentes, caravanes et auto-caravanes",
                status: false
            },
            {
                questionId: 2,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Point de détente",
                status: false
            },
            {
                questionId: 4,
                proposition: "Jeux d'enfants",
                status: true
            },
        ],
    },
    {
        id: 29,
        image: img29,
        description: "Station de vidange pour caravanes, auto-caravanes et car",
        questions: [
            {
                questionId: 1,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
            {
                questionId: 2,
                proposition: "Point de détente",
                status: false
            },
            {
                questionId: 3,
                proposition: "Station de vidange pour caravanes, auto-caravanes et car",
                status: true
            },
            {
                questionId: 4,
                proposition: "Poste de gonflage gratuit",
                status: false
            },
        ],
    },
    {
        id: 30,
        image: img30,
        description: "Distributeur de billets de banque",
        questions: [
            {
                questionId: 1,
                proposition: "Distributeur de billets de banque",
                status: true
            },
            {
                questionId: 2,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
            {
                questionId: 3,
                proposition: "Chambre d'hôtes ou gîte",
                status: false
            },
            {
                questionId: 4,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
        ],
    },
    {
        id: 31,
        image: img31,
        description: "Poste de gonflage gratuit",
        questions: [
            {
                questionId: 1,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 2,
                proposition: "Poste de gonflage gratuit",
                status: true
            },
            {
                questionId: 3,
                proposition: "Atelier d'entretien de véhicules",
                status: false
            },
            {
                questionId: 4,
                proposition: "Point de détente",
                status: false
            },
        ],
    },
    {
        id: 32,
        image: img32,
        description: "Point de détente",
        questions: [
            {
                questionId: 1,
                proposition: "Embarcadère",
                status: false
            },
            {
                questionId: 2,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Issue de secours vers la droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Point de détente",
                status: true
            },
        ],
    },
    {
        id: 33,
        image: img33,
        description: "Atelier d'entretien de véhicules",
        questions: [
            {
                questionId: 1,
                proposition: "Restauration ouvert 7j/7",
                status: false
            },
            {
                questionId: 2,
                proposition: "Atelier d'entretien de véhicules",
                status: true
            },
            {
                questionId: 3,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
            {
                questionId: 4,
                proposition: "Jeux d'enfants",
                status: false
            },
        ],
    },
    {
        id: 34,
        image: img34,
        description: "Moyen de lutte contre les incendies : extincteur",
        questions: [
            {
                questionId: 1,
                proposition: "Point de détente",
                status: false
            },
            {
                questionId: 2,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Moyen de lutte contre les incendies : extincteur",
                status: true
            },
            {
                questionId: 4,
                proposition: "Issue de secours vers la droite",
                status: false
            },
        ],
    },
    {
        id: 35,
        image: img35,
        description: "Issue de secours vers la droite",
        questions: [
            {
                questionId: 1,
                proposition: "Toilettes ouvertes au public",
                status: false
            },
            {
                questionId: 2,
                proposition: "Issue de secours vers la droite",
                status: true
            },
            {
                questionId: 3,
                proposition: "Issue de secours vers la gauche",
                status: false
            },
            {
                questionId: 4,
                proposition: "Installations ou services divers",
                status: false
            },
        ],
    },
    {
        id: 36,
        image: img36,
        description: "Issue de secours vers la gauche",
        questions: [
            {
                questionId: 1,
                proposition: "Issue de secours vers la gauche",
                status: true
            },
            {
                questionId: 2,
                proposition: "Installations ou services divers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Issue de secours vers la droite",
                status: false
            },
            {
                questionId: 4,
                proposition: "Emplacement pour pique-nique",
                status: false
            },
        ],
    },
    {
        id: 37,
        image: img37,
        description: "Installations ou services divers",
        questions: [
            {
                questionId: 1,
                proposition: "Installations ou services divers",
                status: true
            },
            {
                questionId: 2,
                proposition: "Emplacement pour pique-nique",
                status: false
            },
            {
                questionId: 3,
                proposition: "Point de départ d'un circuit de ski de fond",
                status: false
            },
            {
                questionId: 4,
                proposition: "Auberge de jeunesse",
                status: false
            },
        ],
    },
];

export default panneauxServices;