import React, {useState} from 'react';
import ModalAlert from "../Components/ModalAlert/ModalAlert";
import ShowBtn from "../Components/UI/Button/ShowBtn";
import Alerts from "./Alerts";


const Modal = () => {
    const [purchasing, setPurchasing] = useState(false);

    const purchaseHandler = () => {
        setPurchasing(true);
    };

    const cancelPurchaseHandler = () => {
        setPurchasing(false);
    };

    const continuePurchaseHandler = () => {
        alert('pressed continue');
    };

    return (
        <div>
                <ShowBtn onClickBtn={purchaseHandler} />
                <ModalAlert
                    show={purchasing}
                    title={"Some kinda modal title"}
                    text={"This is modal content"}
                    close={cancelPurchaseHandler}
                    onCancel={cancelPurchaseHandler}
                    onContinue={continuePurchaseHandler}
                    config={[
                        { type: 'Success', label: 'Continue', clicked: continuePurchaseHandler },
                        { type: 'Danger', label: 'Close', clicked: cancelPurchaseHandler }
                    ]}
                />

            <Alerts/>

        </div>

    );
};

export default Modal;