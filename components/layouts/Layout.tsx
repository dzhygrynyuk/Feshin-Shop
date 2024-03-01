import Header from "../modules/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <div className="footer" />
        </>
    );
};

export default Layout;