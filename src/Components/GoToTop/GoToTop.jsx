import React from 'react';
import GoTopIcon from "../../assets/Icons/up-arrow.png";

const GoToTop = () => {

    const goToTop = () => {
        window.scrollTo({ top: "0", right: "0", behavior: "smooth" })
    }

    return (
        <div>
            <div className="flex items-end justify-end fixed bottom-10 right-10 mb-4 mr-4 z-10">
                <div>
                    <a
                        onClick={goToTop} title="Buy me a beer" className="block bg-white w-10 h-10 p-2 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-[360%]">
                        <img className="object-cover object-center w-full h-full rounded-full" src={GoTopIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GoToTop;