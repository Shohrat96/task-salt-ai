import React from 'react';

export const RocketAnimation: React.FC = () => {
    return (
        <div className="rocket-container">
            <div className="rocket">
                <img src="/rocket.png" alt="Rocket" />
                <div className="flame"></div>
            </div>
        </div>
    );
};
