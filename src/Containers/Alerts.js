import React, {useState} from 'react';
import ShowAlert from "../Components/UI/Button/ShowAlert";
import Alert from "../Components/UI/Alert/Alert";

const Alerts = () => {
        const [purchasing, setPurchasing] = useState(false);

        const purchaseHandler = () => {
            setPurchasing(true);
        };

        const cancelPurchaseHandler = () => {
            setPurchasing(false);
        };


    return (
        <div>
            <ShowAlert onClickAlert={purchaseHandler} />
            <Alert
                show={purchasing}
                type='warning'
                dismiss={cancelPurchaseHandler}
            />
        </div>
    );
};

export default Alerts;