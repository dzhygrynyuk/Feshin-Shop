import { closeQuickViewModal } from "@/context/modals";
import { useCartAction } from "@/hooks/useCartAction";
import { useProductImages } from "@/hooks/useProductImages";
import { removeOverflowHiddenFromBody } from "@/libs/utils/common";
import QuickViewModalSlider from "./QuickViewModalSlider";

import styles from "@/styles/quick-view-modal/index.module.scss";

const QuickViewModal = () => {
    const { product } = useCartAction();
    const images = useProductImages(product);
    const handleCloseModal = () => {
        removeOverflowHiddenFromBody();
        closeQuickViewModal();
    };

    return (
        <div className={styles.modal}>
            <button className={`btn-reset ${styles.modal__close}`} onClick={handleCloseModal} />
            <div className={styles.modal__left}>
                <QuickViewModalSlider images={images} />
            </div>
            <div className={styles.modal__right}>Test</div>
        </div>
    );
};

export default QuickViewModal;