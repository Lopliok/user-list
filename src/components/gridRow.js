import React, { Component } from 'react';

const style = {
	border: "1px solid lightblue",
}

const GridRow = ({ column, left, right }) => {

	return (
		<div className="row">
			{Object.values(column).map((col, idx) => <span className="col-sm-6 col-md-3 col-lg-2" key={idx} style={style}>{col}</span>
			)}
			<span className="col-2" style={{ paddingLeft: "10px", display: "flex", justifyContent: "flex-start" }}>
					{left}
					{right}				
			</span>
		</div>
	);
}

export default GridRow;


