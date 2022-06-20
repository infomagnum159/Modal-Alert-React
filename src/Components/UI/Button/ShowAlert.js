import React from 'react';

const ShowAlert = props => (!props.show ?
    <button className="showAlert" onClick={props.onClickAlert}>Show alert</button> : null);

export default ShowAlert;