import React from 'react';
import { IconPropsType } from '../../types/componentsPropsType';



const ChartIcon: React.FC<IconPropsType> = ({
                                                size,
                                                color
                                            }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 48 48`}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                marginLeft: "4px",
                fill: "none",
                stroke: color,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px"
            }
            }
        >
            <title/>
            <polyline points="1 1 1 47 47 47"/>
            <rect height="22" width="7" x="5" y="21"/>
            <rect height="16" width="7" x="16" y="27"/>
            <rect height="28" width="7" x="27" y="15"/>
            <rect height="21" width="7" x="38" y="22"/>
        </svg>
    );
};

export default ChartIcon;