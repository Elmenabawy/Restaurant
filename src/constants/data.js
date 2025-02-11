import images from './images';
 
const juices = [
  {
    title: 'Orange Juice',
    price: '$5',
    tags: 'Freshly squeezed | 250 ml',
  },
  {
    title: 'Apple Juice',
    price: '$6',
    tags: 'Organic | 250 ml',
  },
  {
    title: 'Carrot Juice',
    price: '$7',
    tags: 'Fresh | 250 ml',
  },
  {
    title: 'Mango Juice',
    price: '$8',
    tags: 'Tropical | 300 ml',
  },
  {
    title: 'Pineapple Juice',
    price: '$6',
    tags: 'Cold-pressed | 250 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];


const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { juices, cocktails, awards };
