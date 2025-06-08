import ButtonCounter from './ButtonCounter';

export default function CarCard({ car, index }) {
  return (
    <div className='car-card'>
      <span>{index}</span>
      <img src={car.image} alt='' />
      <h4>{car.name}</h4>
      <p>{car.description}</p>
      <button className='btn'>Add to cart ${car.price}</button>
      <ButtonCounter />
    </div>
  );
}
