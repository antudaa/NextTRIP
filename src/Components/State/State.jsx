import React from "react";
import CountUp from "react-countup";

const State = () => {
	return (
		<div className="px-4 py-16 z-40 mx-auto w-[90%] md:px-24 text-sky-500 lg:px-8 lg:py-16 shadow-xl shadow-cyan-200 my-16 rounded-md">
			<div className="grid grid-cols-2 row-gap-8 gap-10 md:grid-cols-4">
				<div className="text-center">
					<h6 className="text-xl md:text-4xl font-bold text-deep-purple-accent-400">

                        {/* to count up number of years */}
						<CountUp end={10} delay={0} duration={8}/>
							
						
						Years
					</h6>
					<p className="font-bold">Service</p>
				</div>
				<div className="text-center">
					<h6 className="text-xl md:text-4xl font-bold text-deep-purple-accent-400">
                        {/* count up the travellers */}
						<CountUp end={2300} duration={8} delay={0} /> +
					</h6>
					<p className="font-bold">Happy Travellers</p>
				</div>
				<div className="text-center">
					<h6 className="text-xl md:text-4xl font-bold text-deep-purple-accent-400">
                        {/* count up total reviews */}
						<CountUp end={1200} duration={8} delay={0} decimals={1}/>
						K+
					</h6>
					<p className="font-bold">Reviews</p>
				</div>
				<div className="text-center">
					<h6 className="text-xl md:text-4xl font-bold text-deep-purple-accent-400">
                        {/* count up the Subscribers */}
						<CountUp end={2000} duration={8} decimals={2} /> K+
					</h6>
					<p className="font-bold">Subscribers</p>
				</div>
			</div>
		</div>
	);
};

export default State;
