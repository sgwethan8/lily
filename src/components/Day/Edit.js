import React from 'react';

const Edit = (props) => {

    const onCancelEditHandler = () => {
        props.onAddOrCancelEdit();
    }

    return(
        <div>
            <div>
                <p> edit content will go here </p>
            </div>
            <button onClick={onCancelEditHandler}>Cancel</button>
            <button>Save</button>
        </div>
    )
}
export default Edit;