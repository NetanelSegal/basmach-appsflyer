import { useState } from 'react';

export default function CarForm() {
  const [data, setData] = useState({});
  const onChange = (e) => {
    const key = e.target.id;
    setData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <h3>Car form</h3>
      <div>
        <label htmlFor='name'>Name</label>
        <input onChange={onChange} id='name' type='text' />
      </div>
      <div>
        <label htmlFor='image'>Image</label>
        <input onChange={onChange} id='image' type='text' />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input onChange={onChange} id='description' type='text' />
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input onChange={onChange} id='price' type='number' />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}
