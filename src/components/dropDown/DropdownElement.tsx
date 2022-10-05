import React from 'react';
import s from './dropdown.module.css';
import {DropdownElementPropsType} from "../../types/componentsPropsType";
import {addTitle, fetchCategory} from "../../redux/chartSlice";
import {useAppDispatch} from "../../redux/store";


const DropdownElement: React.FC<DropdownElementPropsType> = ({
                                                                 title,
                                                                 icon
                                                             }) => {
    const dispatch = useAppDispatch()

    const onClickHelper = () => {
        dispatch(addTitle(title))
        dispatch(fetchCategory(title))
    }

    return (
        <div
            className={s.dropElemContainer}
            onClick={onClickHelper}
        >
            <span>{title}</span>
            <div>{icon}</div>
        </div>
    );
};

export default DropdownElement;