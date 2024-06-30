import Sidebar from "./Sidebar";
import Header from "./Header";

function Members() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header />
            </div>
        </div>
    );
}

export default Members;