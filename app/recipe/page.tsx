const Recipe = () => {
  return (
    <div className="">
      <div className=" p-5">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2">
            {/* Assuming you have an image here. Replace the src with your image path */}
            {/* <img src="/path-to-your-strawberry-floating-island-image.jpg" alt="Île Flottante aux Fraises" className="rounded-lg shadow-lg"/> */}
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0 md:ml-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Île Flottante aux Fraises
            </h2>
            <div className="border-t-2 border-gray-200 w-24"></div>
            <p className="text-lg text-gray-500 mt-3">
              Made with premium ingredients for the perfect dessert experience
            </p>
          </div>
        </div>
        {/* <p className="text-gray-500 text-center mt-5">
          MAKES 6 DESSERTS FOR 6 PEOPLE
        </p> */}
      </div>
      <div className="max-w-[900px] mx-auto p-5 sm:p-2.5">
        <div className="text-center mb-5">
          <h1 className="text-3xl text-[#482307]">Recipe</h1>
        </div>
        <div>
          <div className="mb-8 p-6 border border-gray-200 shadow-sm">
            {/* <h2 className="text-2xl text-center text-[#482307] mb-4">
              Île Flottante aux Fraises
            </h2> */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div>
                <h3 className="text-xl text-[#482307] mb-4">
                  Strawberry Meringues
                </h3>
                <p className="text-lg text-[#666]">2 Egg whites</p>
                <p className="text-lg text-[#666]">100g Sugar</p>
                <p className="text-lg text-[#666]">1 tsp Strawberry powder</p>
                <p className="text-lg text-[#666]">¼ tsp Vanilla</p>
              </div>
              <div className="pl-4 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-gray-300">
                <p className="text-lg text-[#666]">
                  Mix the eggs and sugar without beating too much. Bring the
                  cream and milk to a boil and combine the two mixtures...
                </p>
              </div>
            </div>
          </div>

          <div className=" mb-8 p-6 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 gap-4 relative">
              <div>
                <h3 className="text-xl text-[#482307] mb-4">Crème Anglaise</h3>
                <p className="text-lg text-[#666]">200ml Milk</p>
                <p className="text-lg text-[#666]">2 Egg yolks</p>
                <p className="text-lg text-[#666]">40g Sugar</p>
                <p className="text-lg text-[#666]">1/2 tsp Vanilla</p>
              </div>
              <div className="pl-4 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-gray-300">
                <p className="text-lg text-[#666]">
                  Heat the milk to 183°F (84°C) and slowly pour over the mixed
                  egg yolks and sugar, whisking constantly. Return the mixture
                  to the heat and stir until it thickens...
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8  p-6 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 gap-4 relative">
              <div>
                <h3 className="text-xl text-[#482307] mb-4">
                  Sugar Caramel Strands
                </h3>
                <p className="text-lg text-[#666]">100g Sugar</p>
                <p className="text-lg text-[#666]">30ml Water</p>
              </div>
              <div className="pl-4 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-gray-300">
                <p className="text-lg text-[#666]">
                  Heat the sugar and water until caramelized. Carefully pour
                  onto a silicone mat and let harden...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
