import React from 'react';
import './graph.css';

const Graph = ({custom, category1, category2, category3, category4}) => {

    const categories = ['Custom', 'Category1', 'Category2', 'Category3', 'Category4']
    const values = [custom, category1, category2, category3, category4]

    const maxValue = Math.max(...values);

  return (
    <div className='graph-container'>
        <div>&#8377;</div>
        <div className='bar-container'>
            {values.map((value, index) => (
                <div key={index} className='category'>
                <div className='graph' style={{ height: `${(value / maxValue) * 100}%` }}></div>
                <div className='name'>{categories[index]}</div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Graph