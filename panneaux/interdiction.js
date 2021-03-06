import img1 from '../assets/panneaux/interdiction/B0.png';
import img2 from '../assets/panneaux/interdiction/B1.png';
import img3 from '../assets/panneaux/interdiction/B2a.png';
import img4 from '../assets/panneaux/interdiction/B2b.png';

import img5 from '../assets/panneaux/interdiction/B2c.png';
import img6 from '../assets/panneaux/interdiction/B3.png';
import img7 from '../assets/panneaux/interdiction/B3a.png';
import img8 from '../assets/panneaux/interdiction/B4.png';

import img9 from '../assets/panneaux/interdiction/B5a.png';
import img10 from '../assets/panneaux/interdiction/B5b.png';
import img11 from '../assets/panneaux/interdiction/B5c.png';
import img12 from '../assets/panneaux/interdiction/B6a1.png';

import img13 from '../assets/panneaux/interdiction/B6a2.png';
import img14 from '../assets/panneaux/interdiction/B6a3.png';
import img15 from '../assets/panneaux/interdiction/B6d.png';
import img16 from '../assets/panneaux/interdiction/B7a.png';

import img17 from '../assets/panneaux/interdiction/B7b.png';
import img18 from '../assets/panneaux/interdiction/B8.png';
import img19 from '../assets/panneaux/interdiction/B9a.png';
import img20 from '../assets/panneaux/interdiction/B9b.png';

import img21 from '../assets/panneaux/interdiction/B9c.png';
import img22 from '../assets/panneaux/interdiction/B9d.png';
import img23 from '../assets/panneaux/interdiction/B9e.png';
import img24 from '../assets/panneaux/interdiction/B9f.png';

import img25 from '../assets/panneaux/interdiction/B9g.png';
import img26 from '../assets/panneaux/interdiction/B9h.png';
import img27 from '../assets/panneaux/interdiction/B9i.png';
import img28 from '../assets/panneaux/interdiction/B10a.png';

import img29 from '../assets/panneaux/interdiction/B11.png';
import img30 from '../assets/panneaux/interdiction/B12.png';
import img31 from '../assets/panneaux/interdiction/B13.png';
import img32 from '../assets/panneaux/interdiction/B13a.png';

import img33 from '../assets/panneaux/interdiction/B14_15.png';
import img34 from '../assets/panneaux/interdiction/B14_30.png';
import img35 from '../assets/panneaux/interdiction/B14_50.png';
import img36 from '../assets/panneaux/interdiction/B14_70.png';

import img37 from '../assets/panneaux/interdiction/B14_90.png';
import img38 from '../assets/panneaux/interdiction/B14_110.png';
import img39 from '../assets/panneaux/interdiction/B14_130.png';
import img40 from '../assets/panneaux/interdiction/B15.png';

import img41 from '../assets/panneaux/interdiction/B16.png';
import img42 from '../assets/panneaux/interdiction/B17.png';
import img43 from '../assets/panneaux/interdiction/B18a.png';
import img44 from '../assets/panneaux/interdiction/B18b.png';

import img45 from '../assets/panneaux/interdiction/B18c.png';
import img46 from '../assets/panneaux/interdiction/B19.png';
import img47 from '../assets/panneaux/interdiction/B31.png';
import img48 from '../assets/panneaux/interdiction/B33_15.png';

import img49 from '../assets/panneaux/interdiction/B33_30.png';
import img50 from '../assets/panneaux/interdiction/B33_50.png';
import img51 from '../assets/panneaux/interdiction/B33_70.png';
import img52 from '../assets/panneaux/interdiction/B33_90.png';

import img53 from '../assets/panneaux/interdiction/B33_110.png';
import img54 from '../assets/panneaux/interdiction/B33_130.png';
import img55 from '../assets/panneaux/interdiction/B34.png';
import img56 from '../assets/panneaux/interdiction/B34a.png';

import img57 from '../assets/panneaux/interdiction/B35.png';
import img58 from '../assets/panneaux/interdiction/B39.png';

const interdiction = [
    {
        id: 1,
        image: img1,
        description: "Circulation interdite ?? tout v??hicule dans les deux sens",
        questions: [
            {
                questionId: 1,
                proposition: "Arr??t et stationnement interdits",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement interdit",
                status: false
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation interdite ?? tout v??hicule dans les deux sens",
                status: true
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Sens interdit",
        questions: [
            {
                questionId: 1,
                proposition: "Arr??t et stationnement interdits",
                status: false
            },
            {
                questionId: 2,
                proposition: "Sens interdit",
                status: true
            },
            {
                questionId: 3,
                proposition: "Arr??t ?? l'intersection",
                status: false
            },
            {
                questionId: 4,
                proposition: "Circulation interdite dans les deux sens",
                status: false
            },
        ],
    },
    {
        id: 3,
        image: img3,
        description: "Interdiction de tourner ?? gauche ?? la prochaine intersection",
        questions: [
            {
                questionId: 1,
                proposition: "C??dez le passage ?? la circulation venant en sens inverse",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de faire demi-tour",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdiction de tourner ?? droite ?? la prochaine intersection",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction de tourner ?? gauche ?? la prochaine intersection",
                status: true
            },
        ],
    },
    {
        id: 4,
        image: img4,
        description: "Interdiction de tourner ?? droite ?? la prochaine intersection",
        questions: [
            {
                questionId: 1,
                proposition: "d",
                status: true
            },
            {
                questionId: 2,
                proposition: "Interdiction de tourner ?? gauche ?? la prochaine intersection",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdiction de faire demi-tour",
                status: false
            },
            {
                questionId: 4,
                proposition: "Intersection o?? vous ??tes prioritaire",
                status: false
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Interdiction de faire demi-tour",
        questions: [
            {
                questionId: 1,
                proposition: "Interdiction de tourner ?? gauche ?? la prochaine intersection",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de faire demi-tour",
                status: true
            },
            {
                questionId: 3,
                proposition: "Interdiction de tourner ?? droite ?? la prochaine intersection",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction de d??passer tout v??hicule ?? moteur sauf deux roues",
                status: false
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Interdiction de d??passer tout v??hicule ?? moteur sauf deux roues",
        questions: [
            {
                questionId: 1,
                proposition: "Signaux sonores interdits",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de circuler sans maintenir l'intervalle indiqu??",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules ?? moteur",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction de d??passer tout v??hicule ?? moteur sauf deux roues",
                status: true
            },
        ],
    },
    {
        id: 7,
        image: img7,
        description: "Interdiction de d??passer pour les transports de marchandises > ?? 3.5t",
        questions: [
            {
                questionId: 1,
                proposition: "Interdiction de d??passer tout v??hicule ?? moteur sauf deux roues",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de d??passer pour les transports de marchandises > ?? 3.5t",
                status: true
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules ?? moteur",
                status: false
            },
            {
                questionId: 4,
                proposition: "Stationnement interdit du c??t?? du panneau du 1er au 15 du mois",
                status: false
            },
        ],
    },
    {
        id: 8,
        image: img8,
        description: "Arr??t obligatoire au poste de douane",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Arr??t obligatoire au barrage de police",
                status: false
            },
            {
                questionId: 3,
                proposition: "Arr??t obligatoire au barrage de gendarmerie",
                status: false
            },
            {
                questionId: 4,
                proposition: "Arr??t obligatoire au poste de douane",
                status: true
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Arr??t obligatoire au barrage de gendarmerie",
        questions: [
            {
                questionId: 1,
                proposition: "Stationnement interdit",
                status: false
            },
            {
                questionId: 2,
                proposition: "Arr??t obligatoire au poste de douane",
                status: false
            },
            {
                questionId: 3,
                proposition: "Arr??t obligatoire au barrage de gendarmerie",
                status: true
            },
            {
                questionId: 4,
                proposition: "Arr??t obligatoire au barrage de police",
                status: false
            },
        ],
    },
    {
        id: 10,
        image: img10,
        description: "Arr??t obligatoire au barrage de police",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux voitures ?? bras",
                status: false
            },
            {
                questionId: 2,
                proposition: "Arr??t obligatoire au barrage de gendarmerie",
                status: false
            },
            {
                questionId: 3,
                proposition: "Arr??t obligatoire au barrage de police",
                status: true
            },
            {
                questionId: 4,
                proposition: "Arr??t obligatoire au poste de p??age",
                status: false
            },
        ],
    },
    {
        id: 11,
        image: img11,
        description: "Arr??t obligatoire au poste de p??age",
        questions: [
            {
                questionId: 1,
                proposition: "Arr??t obligatoire au barrage de police",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 130km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux motos et motos l??g??res",
                status: false
            },
            {
                questionId: 4,
                proposition: "Arr??t obligatoire au poste de p??age",
                status: true
            },
        ],
    },
    {
        id: 12,
        image: img12,
        description: "Stationnement interdit",
        questions: [
            {
                questionId: 1,
                proposition: "Stationnement interdit",
                status: true
            },
            {
                questionId: 2,
                proposition: "Stationnement interdit du c??t?? du panneau du 1er au 15 du mois",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules ?? moteur",
                status: false
            },
            {
                questionId: 4,
                proposition: "Arr??t et stationnement interdits",
                status: false
            },
        ],
    },
    {
        id: 13,
        image: img13,
        description: "Stationnement interdit du c??t?? du panneau du 1er au 15 du mois",
        questions: [
            {
                questionId: 1,
                proposition: "Stationnement interdit",
                status: false
            },
            {
                questionId: 2,
                proposition: "Arr??t et stationnement interdits",
                status: false
            },
            {
                questionId: 3,
                proposition: "Stationnement interdit du c??t?? du panneau du 1er au 15 du mois",
                status: true
            },
            {
                questionId: 4,
                proposition: "Stationnement interdit du c??t?? du panneau du 16 ?? la fin du mois",
                status: false
            },
        ],
    },
    {
        id: 14,
        image: img14,
        description: "Stationnement interdit du c??t?? du panneau du 16 ?? la fin du mois",
        questions: [
            {
                questionId: 1,
                proposition: "Stationnement interdit du c??t?? du panneau du 1er au 15 du mois",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement interdit du c??t?? du panneau du 16 ?? la fin du mois",
                status: true
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules ?? moteur sauf cyclomoteurs",
                status: false
            },
            {
                questionId: 4,
                proposition: "Arr??t et stationnement interdits",
                status: false
            },
        ],
    },
    {
        id: 15,
        image: img15,
        description: "Arr??t et stationnement interdits",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules ?? moteur",
                status: false
            },
            {
                questionId: 2,
                proposition: "Stationnement interdit",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules ?? moteur sauf cyclomoteurs",
                status: false
            },
            {
                questionId: 4,
                proposition: "Arr??t et stationnement interdits",
                status: true
            },
        ],
    },
    {
        id: 16,
        image: img16,
        description: "Acc??s interdit aux v??hicules ?? moteur sauf cyclomoteurs",
        questions: [
            {
                questionId: 1,
                proposition: "Arr??t et stationnement interdits",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux v??hicules de plus de 5,5t",
                status: false
            },
            {
                questionId: 3,
                proposition: "C??dez le passage ?? la circulation venant en sens inverse",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules ?? moteur sauf cyclomoteurs",
                status: true
            },
        ],
    },
    {
        id: 17,
        image: img17,
        description: "Acc??s interdit aux v??hicules ?? moteur",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux cycles",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux v??hicules ?? moteur",
                status: true
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules ?? moteur sauf cyclomoteurs",
                status: false
            },
        ],
    },
    {
        id: 18,
        image: img18,
        description: "Acc??s interdit aux v??hicules transportant des marchandises",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules de transport de marchandises explosives ou facilement inflammables",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux pi??tons",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules ?? moteur sauf cyclomoteurs",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises",
                status: true
            },
        ],
    },
    {
        id: 19,
        image: img19,
        description: "Acc??s interdit aux pi??tons",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux cycles",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux pi??tons",
                status: true
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux voitures ?? bras",
                status: false
            },
        ],
    },
    {
        id: 20,
        image: img20,
        description: "Acc??s interdit aux cycles",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux motos et motos l??g??res",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux pi??tons",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux cycles",
                status: true
            },
        ],
    },
    {
        id: 21,
        image: img21,
        description: "Acc??s interdit aux v??hicules ?? traction animale",
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
                proposition: "Acc??s interdit aux v??hicules ?? traction animale",
                status: true
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: false
            },
        ],
    },
    {
        id: 22,
        image: img22,
        description: "Acc??s interdit aux v??hicules agricoles ?? moteur",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules agricoles ?? moteur",
                status: true
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux voitures ?? bras",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules de transport en commun",
                status: false
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 30km/h",
                status: false
            },
        ],
    },
    {
        id: 23,
        image: img23,
        description: "Acc??s interdit aux voitures ?? bras",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules agricoles ?? moteur",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux motos et motos l??g??res",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux voitures ?? bras",
                status: true
            },
        ],
    },
    {
        id: 24,
        image: img24,
        description: "Acc??s interdit aux v??hicules de transport en commun",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules de transport en commun",
                status: true
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: false
            },
            {
                questionId: 3,
                proposition: "Informations relatives aux services ou activit??s touristiques",
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
        description: "Acc??s interdit aux cyclomoteurs",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules de transport en commun",
                status: false
            },
            {
                questionId: 2,
                proposition: "Arr??t ?? l'intersection",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: true
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux motos et motos l??g??res",
                status: false
            },
        ],
    },
    {
        id: 26,
        image: img26,
        description: "Acc??s interdit aux motos et motos l??g??res",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux motos et motos l??g??res",
                status: true
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux cyclomoteurs",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules de transport en commun",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules tractant une caravane ou remorque de plus de 250kg",
                status: false
            },
        ],
    },
    {
        id: 27,
        image: img27,
        description: "Acc??s interdit aux v??hicules tractant une caravane ou remorque de plus de 250kg",
        questions: [
            {
                questionId: 1,
                proposition: "Gare auto-train",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux v??hicules de transport en commun",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules tractant une caravane ou remorque de plus de 250kg",
                status: true
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules dont la longueur, chargement compris, d??passe la dimension indiqu??e",
                status: false
            },
        ],
    },
    {
        id: 28,
        image: img28,
        description: "Acc??s interdit aux v??hicules dont la longueur, chargement compris, d??passe la dimension indiqu??e",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux v??hicules dont la longueur, chargement compris, d??passe la dimension indiqu??e",
                status: true
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules dont la largeur, chargement compris, d??passe la dimension indiqu??e",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules dont la hauteur, chargement compris, d??passe la dimension indiqu??e",
                status: false
            },
        ],
    },
    {
        id: 29,
        image: img29,
        description: "Acc??s interdit aux v??hicules dont la largeur, chargement compris, d??passe la dimension indiqu??e",
        questions: [
            {
                questionId: 1,
                proposition: "Passage d'animaux domestiques",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdit aux v??hicules de plus de 5t sur un m??me essieu",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules de plus de 5,5t",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules dont la largeur, chargement compris, d??passe la dimension indiqu??e",
                status: true
            },
        ],
    },
    {
        id: 30,
        image: img30,
        description: "Acc??s interdit aux v??hicules dont la hauteur, chargement compris, d??passe la dimension indiqu??e",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules de plus de 5,5t",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux motos et motos l??g??res",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules dont la hauteur, chargement compris, d??passe la dimension indiqu??e",
                status: true
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 15km/h",
                status: false
            },
        ],
    },
    {
        id: 31,
        image: img31,
        description: "Acc??s interdit aux v??hicules de plus de 5,5t",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules de plus de 5,5t",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdit aux v??hicules de plus de 5t sur un m??me essieu",
                status: false
            },
            {
                questionId: 4,
                proposition: "Travers??e d'une aire de danger a??rien",
                status: false
            },
        ],
    },
    {
        id: 32,
        image: img32,
        description: "Interdit aux v??hicules de plus de 5t sur un m??me essieu",
        questions: [
            {
                questionId: 1,
                proposition: "Interdit aux v??hicules de plus de 5t sur un m??me essieu",
                status: true
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 30km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "D??bouch?? de cyclistes venant de droite ou de gauche",
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
        id: 33,
        image: img33,
        description: "Limitation de vitesse ?? 15km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de la limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 15km/h",
                status: true
            },
            {
                questionId: 3,
                proposition: "Fin d'interdiction de l'emploi des avertisseurs sonores",
                status: false
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 30km/h",
                status: false
            },
        ],
    },
    {
        id: 34,
        image: img34,
        description: "Limitation de vitesse ?? 30km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 110km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Limitation de vitesse ?? 30km/h",
                status: true
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 70km/h",
                status: false
            },
        ],
    },
    {
        id: 35,
        image: img35,
        description: "Limitation de vitesse ?? 50km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: true
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 110km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 50km/h",
                status: false
            },
        ],
    },
    {
        id: 36,
        image: img36,
        description: "Limitation de vitesse ?? 70km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de la limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Limitation de vitesse ?? 70km/h",
                status: true
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 70km/h",
                status: false
            },
        ],
    },
    {
        id: 37,
        image: img37,
        description: "Limitation de vitesse ?? 90km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 90km/h",
                status: true
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 70km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 90km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "D??bouch?? sur un quai ou une berge",
                status: false
            },
        ],
    },
    {
        id: 38,
        image: img38,
        description: "Limitation de vitesse ?? 110km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 110km/h",
                status: true
            },
            {
                questionId: 3,
                proposition: "Limitation de vitesse ?? 130km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 110km/h",
                status: false
            },
        ],
    },
    {
        id: 39,
        image: img39,
        description: "Limitation de vitesse ?? 130km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de la limitation de vitesse ?? 130km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Limitation de vitesse ?? 110km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 130km/h",
                status: true
            },
        ],
    },
    {
        id: 40,
        image: img40,
        description: "C??dez le passage ?? la circulation venant en sens inverse",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de cr??neau de d??passement",
                status: false
            },
            {
                questionId: 2,
                proposition: "Route ?? acc??s r??glement??",
                status: false
            },
            {
                questionId: 3,
                proposition: "Interdiction de circuler sans maintenir l'intervalle indiqu??",
                status: false
            },
            {
                questionId: 4,
                proposition: "C??dez le passage ?? la circulation venant en sens inverse",
                status: true
            },
        ],
    },
    {
        id: 41,
        image: img41,
        description: "Signaux sonores interdits",
        questions: [
            {
                questionId: 1,
                proposition: "Ralentisseur",
                status: false
            },
            {
                questionId: 2,
                proposition: "Voie de d??tresse",
                status: false
            },
            {
                questionId: 3,
                proposition: "Signaux sonores interdits",
                status: true
            },
            {
                questionId: 4,
                proposition: "Rappel des limites de vitesse sur autoroute",
                status: false
            },
        ],
    },
    {
        id: 42,
        image: img42,
        description: "Interdiction de circuler sans maintenir l'intervalle indiqu??",
        questions: [
            {
                questionId: 1,
                proposition: "Voies affect??es",
                status: false
            },
            {
                questionId: 2,
                proposition: "Interdiction de circuler sans maintenir l'intervalle indiqu??",
                status: true
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises polluant l'eau",
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
        id: 43,
        image: img43,
        description: "Acc??s interdit aux v??hicules de transport de marchandises explosives ou facilement inflammables",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises dangereuses",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules de transport de marchandises explosives ou facilement inflammables",
                status: true
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises polluant l'eau",
                status: false
            },
        ],
    },
    {
        id: 44,
        image: img44,
        description: "Acc??s interdit aux v??hicules transportant des marchandises polluant l'eau",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises polluant l'eau",
                status: true
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux v??hicules de transport de marchandises explosives ou facilement inflammables",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises dangereuses",
                status: false
            },
            {
                questionId: 4,
                proposition: "Pr??signalisation d'une impasse",
                status: false
            },
        ],
    },
    {
        id: 45,
        image: img45,
        description: "Acc??s interdit aux v??hicules transportant des marchandises dangereuses",
        questions: [
            {
                questionId: 1,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises polluant l'eau",
                status: false
            },
            {
                questionId: 2,
                proposition: "Acc??s interdit aux v??hicules de transport de marchandises explosives ou facilement inflammables",
                status: false
            },
            {
                questionId: 3,
                proposition: "Acc??s interdit aux v??hicules transportant des marchandises dangereuses",
                status: true
            },
            {
                questionId: 4,
                proposition: "Interdiction dont la nature est mentionn??e par une inscription sur le panneau",
                status: false
            },
        ],
    },
    {
        id: 46,
        image: img46,
        description: "Interdiction dont la nature est mentionn??e par une inscription sur le panneau",
        questions: [
            {
                questionId: 1,
                proposition: "Station de taxis",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse ?? 15km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de toutes les interdictions pr??c??demment signal??es et impos??es aux v??hicules en mouvement",
                status: false
            },
            {
                questionId: 4,
                proposition: "Interdiction dont la nature est mentionn??e par une inscription sur le panneau",
                status: true
            },
        ],
    },
    {
        id: 47,
        image: img47,
        description: "Fin de toutes les interdictions pr??c??demment signal??es et impos??es aux v??hicules en mouvement",
        questions: [
            {
                questionId: 1,
                proposition: "Interdiction dont la nature est mentionn??e par une inscription sur le panneau",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de toutes les interdictions pr??c??demment signal??es et impos??es aux v??hicules en mouvement",
                status: true
            },
            {
                questionId: 3,
                proposition: "Fin d'obligation d'allumage des feux",
                status: false
            },
            {
                questionId: 4,
                proposition: "Chemin obligatoire pour cavaliers",
                status: false
            },
        ],
    },
    {
        id: 48,
        image: img48,
        description: "Fin de la limitation de vitesse ?? 15km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Interdiction dont la nature est mentionn??e par une inscription sur le panneau",
                status: false
            },
            {
                questionId: 2,
                proposition: "Chemin obligatoire pour cavaliers",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 15km/h",
                status: true
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 30km/h",
                status: false
            },
        ],
    },
    {
        id: 49,
        image: img49,
        description: "Fin de la limitation de vitesse ?? 30km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de la limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse ?? 30km/h",
                status: true
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 70km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 90km/h",
                status: false
            },
        ],
    },
    {
        id: 50,
        image: img50,
        description: "Fin de la limitation de vitesse ?? 50km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 100km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 100km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 50km/h",
                status: true
            },
        ],
    },
    {
        id: 51,
        image: img51,
        description: "Fin de la limitation de vitesse ?? 70km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 100km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 70km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 70km/h",
                status: true
            },
        ],
    },
    {
        id: 52,
        image: img52,
        description: "Fin de la limitation de vitesse ?? 90km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 100km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 100km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 90km/h",
                status: true
            },
        ],
    },
    {
        id: 53,
        image: img53,
        description: "Fin de la limitation de vitesse ?? 110km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Fin de la limitation de vitesse ?? 90km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de la limitation de vitesse ?? 110km/h",
                status: true
            },
            {
                questionId: 3,
                proposition: "Fin d'interdiction de d??passer",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin de la limitation de vitesse ?? 130km/h",
                status: false
            },
        ],
    },
    {
        id: 54,
        image: img54,
        description: "Fin de la limitation de vitesse ?? 130km/h",
        questions: [
            {
                questionId: 1,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 130km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin de la limitation de vitesse ?? 130km/h",
                status: true
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 100km/h",
                status: false
            },
        ],
    },
    {
        id: 55,
        image: img55,
        description: "Fin d'interdiction de d??passer",
        questions: [
            {
                questionId: 1,
                proposition: "Fin d'interdiction de d??passer",
                status: true
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 100km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Limitation de vitesse ?? 50km/h",
                status: false
            },
            {
                questionId: 4,
                proposition: "Limitation de vitesse ?? 110km/h",
                status: false
            },
        ],
    },
    {
        id: 56,
        image: img56,
        description: "Fin d'interdiction de d??passer pour les v??hicules de transport de marchandises de plus de 3,5t",
        questions: [
            {
                questionId: 1,
                proposition: "Fin d'interdiction de d??passer pour les v??hicules de transport de marchandises de plus de 3,5t",
                status: true
            },
            {
                questionId: 2,
                proposition: "Limitation de vitesse ?? 110km/h",
                status: false
            },
            {
                questionId: 3,
                proposition: "Fin d'interdiction de l'emploi des avertisseurs sonores",
                status: false
            },
            {
                questionId: 4,
                proposition: "Acc??s interdit aux v??hicules de plus de 5,5t",
                status: false
            },
        ],
    },
    {
        id: 57,
        image: img57,
        description: "Fin d'interdiction de l'emploi des avertisseurs sonores",
        questions: [
            {
                questionId: 1,
                proposition: "Fin d'interdiction dont la nature est mentionn??e sur le panneau",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin d'interdiction de l'emploi des avertisseurs sonores",
                status: true
            },
            {
                questionId: 3,
                proposition: "Fin de piste ou bande cyclable conseill??e et r??serv??e aux cycles ?? 2 ou 3 roues",
                status: false
            },
            {
                questionId: 4,
                proposition: "Fin d'une section d'autoroute",
                status: false
            },
        ],
    },
    {
        id: 58,
        image: img58,
        description: "Fin d'interdiction dont la nature est mentionn??e sur le panneau",
        questions: [
            {
                questionId: 1,
                proposition: "Fin d'interdiction dont la nature est mentionn??e sur le panneau",
                status: true
            },
            {
                questionId: 2,
                proposition: "Fin d'une section d'autoroute",
                status: false
            },
            {
                questionId: 3,
                proposition: "Intersection o?? vous ??tes prioritaire",
                status: false
            },
            {
                questionId: 4,
                proposition: "Risque de fort vent lat??ral",
                status: false
            },
        ],
    },
];

export default interdiction;