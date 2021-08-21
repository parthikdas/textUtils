import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        lower =  lower.charAt(0).toUpperCase() + lower.slice(1);
        return lower;
    }
    return (
        // as in app.js props.alert was initially null so if they are not null then only put the alert
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
