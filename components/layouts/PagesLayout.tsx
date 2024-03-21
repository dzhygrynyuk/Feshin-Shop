'use client'
import { useUnit } from "effector-react";
import { Toaster } from "react-hot-toast";
import { $quickViewModal, $showSizeTable, closeQuickViewModal } from "@/context/modals";
import Layout from "./Layout";
import { closeSizeTableByCheck, handleCloseAuthPopup, removeOverflowHiddenFromBody } from "@/libs/utils/common";
import { $openAuthPopup } from "@/context/auth";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
    const showQuickViewModal = useUnit($quickViewModal);
    const showSizaTable = useUnit($showSizeTable);
    const openAuthPopup = useUnit($openAuthPopup);

    const handleCloseQuickViewModal = () => {
        removeOverflowHiddenFromBody();
        closeQuickViewModal();
    };

    const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal);

    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
                <div 
                    className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`} 
                    onClick={handleCloseQuickViewModal}
                />
                <div 
                    className={`size-table-overlay ${showSizaTable ? 'overlay-active' : ''}`}
                    onClick={handleCloseSizeTable}
                />
                <div
                    className={`auth-overlay ${openAuthPopup ? 'overlay-active' : ''}`}
                    onClick={handleCloseAuthPopup}
                />
                <Toaster position='top-center' reverseOrder={false} />
            </body>
        </html>
    );
};

export default PagesLayout;