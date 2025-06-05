export default function CarCard({ car, index }) {
  return (
    <div className='car-card'>
      <span>{index}</span>
      <img src={car.image} alt='' />
      <h4>{car.name}</h4>
      <p>{car.description}</p>
      <button>Add to cart ${car.price}</button>
    </div>
  );
}
