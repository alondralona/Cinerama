import React from 'react';

const Loading = () => {
    return ( 
    <div style ={{height: "100vh", display: "flex", justifyContent: "center",alignItems:"center"}}>

    <div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden"></span>
</div>
    <div className="spinner-grow text-success" role="status">
    <span className="visually-hidden"></span>
  </div>
  <div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden"></span>
</div>
  </div> );
}
 
export default Loading;