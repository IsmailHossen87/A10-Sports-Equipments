import { Fade, Zoom } from "react-awesome-reveal";
import CategoriesHook from "../Hooks/CategoriesHook";

const CategorySection = () => {
  const [data] = CategoriesHook();

  return (
    <div className="mt-4 md:mt-8 my-4">
      <div className="text-center mb-8">
        <h3 className="md:text-4xl text-3xl font-extrabold ">
          Explore Categories
        </h3>
        <p className="text-lg ">
          Find your favorite sports equipment by category
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {data?.map((card) => (
          <Fade key={card._id} direction="bottom" delay={200}>
            <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white p-4">
              <Zoom>
                <div className="relative flex justify-center items-center">
                  <img
                    className="h-28 w-28 rounded-full border-2 border-gray-200 object-cover"
                    src={card.photo}
                    alt={card.category}
                  />
                </div>
              </Zoom>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {card.category}
                </h4>
                <p className=" text-sm">
                  Perfect for all your sports needs
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
