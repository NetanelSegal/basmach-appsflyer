export default function CarCard({ car }) {
  return (
    <div className='car-card'>
      <img src={car.image} alt='' />
      <h4>{car.name}</h4>
      <p>{car.description}</p>
      <button>Add to cart ${car.price}</button>
    </div>
  );
}
