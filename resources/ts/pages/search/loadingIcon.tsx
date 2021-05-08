import React from 'react';
import ReactLoading from 'react-loading';
 
export const loadingIcon = () => {
    return (
        <div>
            <ReactLoading type="spin" color="black" height={100} width={100} />
        </div>
    )
}
  
export default loadingIcon