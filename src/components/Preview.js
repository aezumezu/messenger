import React from 'react'

const Preview = (props) =>
  <div style={{ display: 'inline-block', width: '45%', marginLeft: '30px' }}>
    <h3 style={{ textAlign: 'center' }}>Generated Numbers Preview</h3>
    <div style={{ display: 'inline-block', overflowY: 'auto', height: '80vh' }}>
      {props.numbers.map((number, index) => <div style={{padding: '5px', display: 'inline-block'}} key={index}>{number}</div>)}
    </div>
  </div>;

export default Preview;