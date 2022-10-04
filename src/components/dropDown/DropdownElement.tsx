import React from 'react';
import s from './dropdown.module.css';
import {DropdownElementPropsType} from "../../types/componentsPropsType";


const DropdownElement: React.FC<DropdownElementPropsType> = ({
                                                                 title,
                                                                 icon
                                                             }) => {
    return (
        <div className={s.dropElemContainer}>
            <span>{title}</span>
            <div>{icon}</div>
        </div>
    );
};

export default DropdownElement;