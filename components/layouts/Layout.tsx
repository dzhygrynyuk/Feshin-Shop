'use client'
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Header from "../modules/Header/Header";
import MobileNavbar from "../modules/MobileNavbar/MobileNavbar";
import { AnimatePresence, motion } from "framer-motion";
import SearchModal from "../modules/Header/SearchModal";
import { $quickViewModal, $searchModaIsOpen, $showSizeTable } from "@/context/modals";
import { useUnit } from "effector-react";
import { handleCloseSearchModal } from "@/libs/utils/common";
import Footer from "../modules/Footer/Footer";
import QuickViewModal from "../modules/QuickViewModal/QuickViewModal";
import SizeTable from "../modules/SizeTable/SizeTable";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const searchModaIsOpen = useUnit($searchModaIsOpen);
    const showQuickViewModal = useUnit($quickViewModal);
    const showSizaTable = useUnit($showSizeTable);
    const isMedia800 = useMediaQuery(800);

    return (
        <>
            <Header />
            {children}
            {isMedia800 && <MobileNavbar />}
            <AnimatePresence>
                {searchModaIsOpen && (
                    <motion.div
                        initial={{ opacity: 0, zIndex: 102 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <SearchModal />
                    </motion.div>
                )}
                {showSizaTable && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <SizeTable />
                    </motion.div>
                )}
            </AnimatePresence>
            {!isMedia800 && (
                <AnimatePresence>
                    {showQuickViewModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <QuickViewModal />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
            <div
                className={`header__search-overlay ${searchModaIsOpen ? 'overlay-active' : ''}`}
                onClick={handleCloseSearchModal}
            >
            </div>
            <Footer />
        </>
    );
};

export default Layout;