import { $quickViewModal, $showSizeTable } from "@/context/modals";
import { closeAuthPopupWhenSomeModalOpen } from "@/libs/utils/common";
import { useUnit } from "effector-react";

const AuthPopupClose = () => {
    const showQuickViewModal = useUnit($quickViewModal);
    const showSizeTable = useUnit($showSizeTable);

    const closePopup = () => {
        closeAuthPopupWhenSomeModalOpen(showQuickViewModal, showSizeTable);
    };

    return <button className='btn-reset auth-popup__close' onClick={closePopup} />;
};

export default AuthPopupClose;