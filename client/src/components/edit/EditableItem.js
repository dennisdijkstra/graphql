import React, { useState, useEffect } from 'react';
import useToggle from '../../hooks/useToggle';
import s from './EditableItem.css';

const EditableItem = ({ label, initialValue }) => {
    const [value, setValue] = useState(initialValue);
    const [editorVisible, toggleEditor] = useToggle(false);

    useEffect(() => {
        console.log(value);
    });

    return (
        <div className={s.container}>
            {editorVisible ? (
                <label>
                    {label}
                    <input
                        id={label}
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </label>
            ) : (
                <span>{value}</span>
            )}
            <button className={s.button} type="button" onClick={toggleEditor}>{editorVisible ? 'Done' : 'Edit'}</button>
        </div>
    );
};

export default EditableItem;
