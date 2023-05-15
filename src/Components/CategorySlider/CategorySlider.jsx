import React from "react";
import CategoryCard from "../Cards/CategoryCard/CategoryCard";
import { useGetCategoriesQuery } from "../../Features/categoryApi/categoryApi";



const CategorySlider = () => {

	const { data, isLoading, isError } = useGetCategoriesQuery()

	return (
		<div className='relative my-10 mx-auto w-[90%]'>
			{/* Card Slider */}
			<div id="category-content" className='flex flex-wrap justify-around align-center gap-6'>
				{
					data?.map(( category ) => (
						<div key={category._id}>
							<CategoryCard 
								category={category} />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default CategorySlider;
