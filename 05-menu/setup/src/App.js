import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';
const allCategories = [ 'all', ...new Set(data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(data);
  const filterItems = (category) => {
    if(category === 'all'){
      setItems(data);
    }
    else{
      const newItems = data.filter((item) => item.category === category);
      setItems(newItems);
    }
  }
  return (
      <main>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={allCategories}/>
        <Menu items={items}/>
      </main>
  );
}

export default App;
