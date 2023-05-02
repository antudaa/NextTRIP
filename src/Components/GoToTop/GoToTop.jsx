import React from 'react';

const GoToTop = () => {

    const goToTop = () => {
        window.scrollTo({ top: "0", right: "0", behavior: "smooth" })
    }

    return (
        <div>
            <button
                onClick={goToTop}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="fixed bottom-16 right-16 bg-skyblue inline-block rounded-full p-2 uppercase leading-normal text-skyblue transition duration-150 ease-in-out hover:bg-cyan-400 0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-cyan-500 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                        clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default GoToTop;