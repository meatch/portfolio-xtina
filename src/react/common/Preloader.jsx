import React from 'react';
import ReactSVG from 'react-svg';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="inner">
                <ReactSVG src='/assets/img/preloader.svg' />
            </div>
        </div>
    );
}

export default Preloader;