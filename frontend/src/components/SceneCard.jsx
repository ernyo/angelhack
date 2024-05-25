import React from 'react';
import icon11 from "../img/icon11.png";
import icon12 from "../img/icon12.png";
import icon13 from "../img/icon13.png";
import icon14 from "../img/icon14.png";
import icon15 from "../img/icon15.png";
import icon16 from "../img/icon16.png";
import icon17 from "../img/icon17.png";
import icon18 from "../img/icon18.png";
import icon21 from "../img/icon21.png";
import icon22 from "../img/icon22.png";
import icon23 from "../img/icon23.png";
import icon24 from "../img/icon24.png";
import icon25 from "../img/icon25.png";
import icon26 from "../img/icon26.png";
import icon27 from "../img/icon27.png";
import icon31 from "../img/icon31.png";
import icon32 from "../img/icon32.png";
import icon33 from "../img/icon33.png";
import icon34 from "../img/icon34.png";
import icon35 from "../img/icon35.png";
import icon36 from "../img/icon36.png";
import icon37 from "../img/icon37.png";
import icon38 from "../img/icon38.png";
import icon39 from "../img/icon39.png";
import icon51 from "../img/icon51.png";
import icon52 from "../img/icon52.png";
import icon61 from "../img/icon61.png";
import icon391 from "../img/icon391.png";

const iconMapping = {
    "icon11.png": icon11,
    "icon12.png": icon12,
    "icon13.png": icon13,
    "icon14.png": icon14,
    "icon15.png": icon15,
    "icon16.png": icon16,
    "icon17.png": icon17,
    "icon18.png": icon18,
    "icon21.png": icon21,
    "icon22.png": icon22,
    "icon23.png": icon23,
    "icon24.png": icon24,
    "icon25.png": icon25,
    "icon26.png": icon26,
    "icon27.png": icon27,
    "icon31.png": icon31,
    "icon32.png": icon32,
    "icon33.png": icon33,
    "icon34.png": icon34,
    "icon35.png": icon35,
    "icon36.png": icon36,
    "icon37.png": icon37,
    "icon38.png": icon38,
    "icon39.png": icon39,
    "icon51.png": icon51,
    "icon52.png": icon52,
    "icon61.png": icon61,
    "icon391.png": icon391,
};

const SceneCard = ({ icons }) => {
    return (
        <div className='flex justify-around'>
            {icons.map((icon, index) => (
                <React.Fragment key={index}>
                    <img
                        src={iconMapping[icon.icon_id]}
                        alt=""
                    />
                </React.Fragment>
            ))}
        </div>
    );
};

export default SceneCard;
