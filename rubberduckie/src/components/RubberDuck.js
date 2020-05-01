import React from 'react';
import "./RubberDuck.scss";
import "./BuyMeACoffe";
import BuyMeACoffe from './BuyMeACoffe';

const RubberDuck = () => {
    return (
        <div className="rubber-duckie">
            <div className="rubber-duckie__container">
                <div>Rubber Duckie</div>
            </div>
            <div className="rubber-duckie__cta">
                <BuyMeACoffe/>
            </div>
        </div>
    );
};

export default RubberDuck;