import React from "react";

const HeaderComponent = (props) =>{
    return( 
        <div className='App-header'>
            <p>{props.homedata}</p>
        </div> 
    );
}
export default HeaderComponent;