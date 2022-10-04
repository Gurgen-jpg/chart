import React from 'react';
import s from './dropdown.module.css';
import ChartIcon from "../Icons/ChartIcon";
import SmartPhoneIcon from "../Icons/SmartPhoneIcon";
import TableIpadIcon from "../Icons/TableIpadIcon";
import DropdownElement from "./DropdownElement";

const Dropdown = () => {
    return (
        <div
            className={s.dropdownContainer}
        >
            <button
                className={s.dropBtn}
            >
                Сравнение
                <ChartIcon
                    size="24px"
                    color="black"
                />
            </button>
            <div className={s.dropdownContent}>
                <DropdownElement
                    title={"Смартфоны"}
                    icon={<SmartPhoneIcon size="24px"/>}
                />
                <DropdownElement
                    title={"Планшеты"}
                    icon={<TableIpadIcon size="24px"/>}
                />
            </div>

        </div>
    );
};

export default Dropdown;