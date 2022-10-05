import React from 'react';
import s from './dropdown.module.css';
import {DropdownElementPropsType} from "../../types/componentsPropsType";
import {fetchCategory} from "../../redux/chartSlice";
import {useAppDispatch} from "../../redux/store";


const DropdownElement: React.FC<DropdownElementPropsType> = ({
                                                                 title,
                                                                 icon
                                                             }) => {
    const dispatch = useAppDispatch()

    return (
        <div
            className={s.dropElemContainer}
            onClick={()=>dispatch(fetchCategory(title))}
        >
            <span>{title}</span>
            <div>{icon}</div>
        </div>
    );
};

export default DropdownElement;