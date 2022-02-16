import React from 'react';

const Edit = (props) => {

    const onCancelEditHandler = () => {
        props.onSaveOrCancelEdit();
    }

    const onSaveEditHandler = () => {
        props.onSaveEdits({
            "edit": "tbc"
        });
        props.onSaveOrCancelEdit();
    }

    

    return(
        <div>
            <div>
                <p> edit content will go here </p>
            </div>
            <button onClick={onCancelEditHandler} >Cancel</button>
            <button onClick={onSaveEditHandler} >Save</button>
        </div>
    )
}
export default Edit;