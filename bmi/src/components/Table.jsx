import React from 'react';


function Table(){

    const DATA = [
        { category: "Severe Thinness", range: "<16" },
        { category: "Moderate Thinness", range: "16-17"},
        { category: "Mild Thinness", range: "17 - 18.5"},
        { category: "Normal", range: "18.5 - 25 "},
        { category: "Overweight", range: "25 - 30"},
          
    ];

    return (
      <div class = "col-4 mx-auto">
        <table class="table table-bordered">
        <thead>
         <tr>
      <th scope="col">Category</th>
      <th scope="col">Range</th>
    </tr>
  </thead>
  <tbody>
    {DATA.map( (items) => {
            return (    
                <tr>
                <td>{items.category}</td>
                <td>{items.range}</td>
              </tr>
             );}
    )}
    </tbody>
    </table>
    </div>
    );
}

export default Table;   