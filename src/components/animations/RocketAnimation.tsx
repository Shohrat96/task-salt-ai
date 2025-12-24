import React from 'react';

export const RocketAnimation: React.FC = () => {
    return (
        <div className="rocket-container">
            <div className="rocket">
                <img src={`${import.meta.env.BASE_URL}rocket.png`} alt="Rocket" />
                <div className="flame"></div>
            </div>
        </div>
    );
};
