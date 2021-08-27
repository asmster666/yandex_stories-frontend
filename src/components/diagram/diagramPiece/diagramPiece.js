import React from 'react';

const DiagramPiece = ({ diagrClass }) => {
    return (
        <div className={diagrClass}>
            <div className="side_part left"></div>
            <div className="round_part"></div>
            <div className="side_part right"></div>
            <div className="color_cov"></div>
        </div>
    )
}

export default DiagramPiece;