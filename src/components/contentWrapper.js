import React from 'react';

const wrapperStyle = {
	width: "80%",
	paddingTop: "35px",
}

const ContentWrapper = (props) => {
    return (
      <div className="container-fluid" style={wrapperStyle} >
        {props.children}
      </div>
    );
}

export default ContentWrapper;
