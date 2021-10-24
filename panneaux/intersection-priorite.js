import img1 from '../assets/panneaux/intersection-priorite/AB1.png';
import img2 from '../assets/panneaux/intersection-priorite/AB2.png';
import img3 from '../assets/panneaux/intersection-priorite/AB3a.png';
import img4 from '../assets/panneaux/intersection-priorite/AB3b.png';

import img5 from '../assets/panneaux/intersection-priorite/AB4.png';
import img6 from '../assets/panneaux/intersection-priorite/AB5.png';
import img7 from '../assets/panneaux/intersection-priorite/AB6.png';
import img8 from '../assets/panneaux/intersection-priorite/AB7.png';

import img9 from '../assets/panneaux/intersection-priorite/AB25.png';


const panneauxIntersectionEtPriorite = [
    {
        id: 1,
        image: img1,
        description: "Cédez le passage aux véhicules arrivant à votre droite",
        questions: [
            {
                questionId: 1,
                proposition: 'Cédez le passage aux véhicules arrivant à votre droite',
                status: true
            },
            {
                questionId: 2,
                proposition: 'Intersection où vous êtes prioritaire',
                status: false
            },
            {
                questionId: 3,
                proposition: "Cédez le passage à l'intersection à 150m",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Danger pouvant être précisé ou non par un panonceau',
                status: false
            },
        ],
    },
    {
        id: 2,
        image: img2,
        description: "Intersection où vous êtes prioritaire",
        questions: [
            {
                questionId: 1,
                proposition: 'Cédez le passage aux véhicules arrivant à votre droite',
                status: false
            },
            {
                questionId: 2,
                proposition: 'Intersections où vous êtes prioritaire',
                status: true
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Danger pouvant être précisé ou non par un panonceau',
                status: false
            },
        ],
    },
    {
        id: 3,
        image: img3,
        description: "Cédez le passage à l'intersection",
        questions: [
            {
                questionId: 1,
                proposition: 'Cédez le passage aux véhicules arrivant à votre droite',
                status: false
            },
            {
                questionId: 2,
                proposition: "Cédez le passage à l'intersection",
                status: true
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Danger pouvant être précisé ou non par un panonceau',
                status: false
            },
        ],
    },
    {
        id: 4,
        image: img4,
        description: "Cédez le passage à l'intersection à 150m",
        questions: [
            {
                questionId: 1,
                proposition: 'Route prioritaire',
                status: false
            },
            {
                questionId: 2,
                proposition: "Cédez le passage à l'intersection à 150m",
                status: true
            },
            {
                questionId: 3,
                proposition: "Danger dans 150m",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Parking dans 150m',
                status: false
            },
        ],
    },
    {
        id: 5,
        image: img5,
        description: "Arrêt à l'intersection",
        questions: [
            {
                questionId: 1,
                proposition: 'Route prioritaire',
                status: false
            },
            {
                questionId: 2,
                proposition: "Arrêt à l'intersection",
                status: true
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Circulation interdite dans les deux sens',
                status: false
            },
        ],
    },
    {
        id: 6,
        image: img6,
        description: "Arrêt à l'intersection à 150m",
        questions: [
            {
                questionId: 1,
                proposition: 'Route prioritaire',
                status: false
            },
            {
                questionId: 2,
                proposition: "Arrêt à l'intersection à 150m",
                status: true
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Fin de route prioritaire',
                status: false
            },
        ],
    },
    {
        id: 7,
        image: img7,
        description: "Route prioritaire",
        questions: [
            {
                questionId: 1,
                proposition: 'Intersection où vous êtes prioritaire',
                status: false
            },
            {
                questionId: 2,
                proposition: "Route prioritaire",
                status: true
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Fin de route prioritaire',
                status: false
            },
        ],
    },
    {
        id: 8,
        image: img8,
        description: "Fin de route prioritaire",
        questions: [
            {
                questionId: 1,
                proposition: "Arrêt à l'intersection",
                status: false
            },
            {
                questionId: 2,
                proposition: "Fin de route prioritaire",
                status: true
            },
            {
                questionId: 3,
                proposition: "Sens interdit",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Route prioritaire',
                status: false
            },
        ],
    },
    {
        id: 9,
        image: img9,
        description: "Carrefour à sens giratoire avec priorité aux usagers circulant sur l'anneau",
        questions: [
            {
                questionId: 1,
                proposition: "Arrêt à l'intersection",
                status: false
            },
            {
                questionId: 2,
                proposition: "Carrefour à sens giratoire avec priorité aux usagers circulant sur l'anneau",
                status: true
            },
            {
                questionId: 3,
                proposition: "Cédez le passage aux véhicules arrivant à votre droite",
                status: false
            },
            {
                questionId: 4,
                proposition: 'Route prioritaire',
                status: false
            },
        ],
    },
];

export default panneauxIntersectionEtPriorite;