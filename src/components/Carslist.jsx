import CarCard from './CarCard';

const cars = [
  {
    name: 'Tesla Model S',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_Model_S_Plaid_IMG_0159.jpg',
    price: 79990,
    description:
      'An all-electric luxury sedan with high performance, long range, and cutting-edge technology.',
  },
  {
    name: 'Ford Mustang GT',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/2018_Ford_Mustang_GT_5.0.jpg',
    price: 43000,
    description:
      'A classic American muscle car with a roaring V8 engine and aggressive styling.',
  },
  {
    name: 'Chevrolet Camaro SS',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Chevrolet_Camaro_SS_6.2L.jpg',
    price: 43000,
    description:
      'A sporty coupe that combines performance and bold design with a 6.2L V8 engine.',
  },
  {
    name: 'BMW M3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/BMW_M3_Competition_Pack.jpg',
    price: 76000,
    description:
      'A performance-focused sports sedan known for its precision handling and turbocharged power.',
  },
  {
    name: 'Audi R8',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/03/Audi_R8_V10.jpg',
    price: 158000,
    description:
      'A luxury supercar with a V10 engine and quattro all-wheel drive, offering both power and elegance.',
  },
  {
    name: 'Lamborghini Huracán',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/Lamborghini_Huracan_LP610-4.jpg',
    price: 209000,
    description:
      'A head-turning Italian supercar with thrilling performance and exotic design.',
  },
  {
    name: 'Ferrari 488 GTB',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Ferrari_488_GTB_Genf_2015.jpg',
    price: 262000,
    description:
      'A mid-engine supercar with twin-turbo V8 power and iconic Ferrari handling.',
  },
  {
    name: 'Porsche 911 Carrera',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e5/Porsche_911_Carrera_4S_%28992%29_IMG_4265.jpg',
    price: 114400,
    description:
      'A legendary sports car offering timeless design, precise engineering, and rear-engine performance.',
  },
  {
    name: 'Mercedes-AMG GT',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Mercedes-AMG_GT_Coupe_IMG_0276.jpg',
    price: 118600,
    description:
      'A German grand tourer blending luxury and high-performance V8 power.',
  },
  {
    name: 'Nissan GT-R',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/2017_Nissan_GT-R_Premium_in_Super_Silver%2C_front_left.jpg',
    price: 113540,
    description:
      "Nicknamed 'Godzilla', the GT-R offers supercar performance with twin-turbocharged AWD grip.",
  },
];

export default function Carslist() {
  return (
    <section>
      <h2>Cars list</h2>
      <div className='cars-list'>
        <CarCard car={cars[0]} />
        <CarCard car={cars[1]} />
        <CarCard car={cars[2]} />
      </div>
    </section>
  );
}
