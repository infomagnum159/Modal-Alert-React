import React from 'react';
import './ModalAlert.css';
import Backdrop from "../UI/Backdrop/Backdrop";
import Button from "../UI/Button/Button";

const ModalAlert = (props) => {
    return (
        <>
            <Backdrop show={props.show} onClick={props.close} />
            <div className='Modal'
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0',
                 }}
            >
                <div className="modalTitle">{props.title}</div>
                <div className="modalText">{props.text}</div>
                <div className="btnDiv">
                    {props.config.map((item, id) => {
                        return <Button onClick={item.clicked} key={id} type={item.type} label={item.label}
                                       show={props.show} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ModalAlert;