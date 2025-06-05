import CarCard from './CarCard';

const cars = [
  {
    name: 'Tesla Model S',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 79990,
    description:
      'An all-electric luxury sedan with high performance, long range, and cutting-edge technology.',
  },
  {
    name: 'Ford Mustang GT',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 43000,
    description:
      'A classic American muscle car with a roaring V8 engine and aggressive styling.',
  },
  {
    name: 'Chevrolet Camaro SS',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    price: 43000,
    description:
      'A sporty coupe that combines performance and bold design with a 6.2L V8 engine.',
  },
  {
    name: 'BMW M3',
    image:
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 76000,
    description:
      'A performance-focused sports sedan known for its precision handling and turbocharged power.',
  },
  {
    name: 'Audi R8',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 158000,
    description:
      'A luxury supercar with a V10 engine and quattro all-wheel drive, offering both power and elegance.',
  },
  {
    name: 'Lamborghini Huracán',
    image:
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 209000,
    description:
      'A head-turning Italian supercar with thrilling performance and exotic design.',
  },
  {
    name: 'Ferrari 488 GTB',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VwZXJjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    price: 262000,
    description:
      'A mid-engine supercar with twin-turbo V8 power and iconic Ferrari handling.',
  },
  {
    name: 'Porsche 911 Carrera',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXJjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    price: 114400,
    description:
      'A legendary sports car offering timeless design, precise engineering, and rear-engine performance.',
  },
  {
    name: 'Mercedes-AMG GT',
    image:
      'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 118600,
    description:
      'A German grand tourer blending luxury and high-performance V8 power.',
  },
  {
    name: 'Nissan GT-R',
    image:
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 113540,
    description:
      "Nicknamed 'Godzilla', the GT-R offers supercar performance with twin-turbocharged AWD grip.",
  },
];

export default function Carslist() {
  // cars - car object array

  return (
    <section className='cars-list-section'>
      <h2>Cars list</h2>
      <div className='cars-list'>
        {cars.map((car, i) => (
          <CarCard car={car} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
