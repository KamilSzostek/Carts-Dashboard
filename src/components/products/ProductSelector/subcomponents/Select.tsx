import React from 'react';
import { IProduct } from '../../../../types/IProduct';

interface ISelectProps {
    label: string,
    selectedItem: string,
    change: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    items: string[] | IProduct[]
    hasBlank: boolean,
    isDisabled?: boolean

}

const Select: React.FunctionComponent<ISelectProps> = ({ label, selectedItem, change, items, hasBlank, isDisabled }) => {

    const itemsElement = items.map((item, index) => {
        if (typeof item === 'string')
            return <option key={index} value={item}>{item}</option>
        else
            return <option key={index} value={item.title}>{item.title}</option>
    })
    const blankOption = hasBlank ? <option value=''></option> : null;
    return (
        <>
            <label className='me-5'>{label}</label>
            {isDisabled ?
                (<select className='text-capitalize' value={selectedItem} onChange={change} disabled>
                    {blankOption}
                    {itemsElement}
                </select>)
                : (<select className='text-capitalize' value={selectedItem} onChange={change}>
                    {blankOption}
                    {itemsElement}
                </select>)}

        </>
    );
};

export default Select;
