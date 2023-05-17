import React from 'react';
import FAQCards from '../Cards/FAQCards/FAQCards';

const faqsList = [
    {
        q: "Fast & Secure Payment System To Ensure your Security?",
        a: "We always care about our consumers and there security that's why to ensure security about payment details we use secure payment gatway system..."
    },
    {
        q: "Truste?",
        a: "It's really hard to trust someone at this hard time but we are a trusted and well reputed organization. We are giving service in this field for last 10 years. For more detais take a look to our customers reviews..."
    },
    {
        q: "Why we are better then other ?",
        a: "We are giving service in this sectior for last 10 years and we always gave some extra and valuable complementary things to our travelers. We always try to give you the most budget friendly deal..."
    },
    {
        q: "What about our special service?",
        a: "Only for you we started a special service after login we took you a page where we ask some questions from about you and your mentality to give you the best deal. After that we suggest you the best deals we have for you ..."
    },
    {
        q: "What are some random questions to ask?",
        a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends."
    },
    {
        q: "What do you wish you had more talent doing?",
        a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    },
]

const FAQ = () => {

    return (
        <section className="leading-relaxed w-[85vw] shadow-xl my-20 mx-auto p-6 md:px-8 ">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Why We Are The Best
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-7 px-4 gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <FAQCards
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default FAQ;