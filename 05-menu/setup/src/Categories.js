import React from 'react';

const Categories = (props) => {
  return (
    <div className='btn-container'>
      {props.categories.map((category, id) => {
        return <button type="button" key={id} className='filter-btn' onClick={() => props.filterItems(category)}>{category}</button>
      })}
    </div>
  );
};

export default Categories;
