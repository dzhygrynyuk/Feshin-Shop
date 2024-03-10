'use client'
import { $quickViewModal, closeQuickViewModal } from "@/context/modals";
import Layout from "./Layout";
import { useUnit } from "effector-react";
import { removeOverflowHiddenFromBody } from "@/libs/utils/common";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
    const showQuickViewModal = useUnit($quickViewModal);

    const handleCloseQuickViewModal = () => {
        removeOverflowHiddenFromBody();
        closeQuickViewModal();
    };

    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
                <div 
                    className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`} 
                    onClick={handleCloseQuickViewModal}
                />
            </body>
        </html>
    );
};

export default PagesLayout;