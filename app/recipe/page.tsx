const Recipe = () => {
  return (
    <div className="">
      <div className="max-w-[900px] mx-auto p-5 sm:p-2.5">
        <div className="text-center mb-5">
          <h1 className="text-3xl text-[#482307]">Recipe</h1>
        </div>
        <div className="">
          <div className="mb-8 p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl text-center text-[#482307] mb-4">
              Île Flottante aux Fraises
            </h2>
            <div className="text-lg text-[#666]">
              <h3 className="text-xl text-[#482307] mb-4">
                Strawberry Meringues
              </h3>
              <div className="text-lg text-[#666]">
                <p>2 Egg whites</p>
                <p>100g Sugar</p>
                <p>1 tsp Strawberry powder</p>
                <p>¼ tsp Vanilla</p>
                <p className="mt-4">
                  Mix the eggs and sugar without beating too much. Bring the
                  cream and milk to a boil and combine the two mixtures...
                </p>
              </div>

              <h3 className="text-xl text-[#482307] mb-4">Crème Anglaise</h3>
              <div className=" mb-2.5 pb-2.5 border-b border-[#e1e1e1]">
                <div className="text-lg text-[#666]">
                  <p>200ml Milk</p>
                  <p>2 Egg yolks</p>
                  <p>40g Sugar</p>
                  <p>1/2 tsp Vanilla</p>
                </div>
              </div>
              <p className="mt-4">
                Mix the eggs and sugar without beating too much. Bring the cream
                and milk to a boil and combine the two mixtures...
              </p>
              <h2>FIN</h2>
            </div>
          </div>

          <div className="mt-8 p-6  border border-gray-200 shadow-sm">
            <h3 className="text-xl text-[#482307] mb-4">
              Sugar Caramel Strands
            </h3>
            <div className="text-lg text-[#666]">
              <p>100g Sugar</p>
              <p>30ml Water</p>
              <p className="mt-4">
                Mix the eggs and sugar without beating too much. Bring the cream
                and milk to a boil and combine the two mixtures...
              </p>
            </div>
          </div>
          <div className="mb-5 border border-[#e1e1e1] shadow-md p-5">
            <h2 className="text-lg text-[#482307] mb-2.5">
              INTENSE KOMUNTU 80% CRÈMEUX
            </h2>
            <div className=" mb-2.5 pb-2.5 border-b border-[#e1e1e1]">
              <p className="text-lg text-[#666]">
                285 g Egg-based crème anglaise
              </p>
              <p className="text-lg text-[#666]">115 g KOMUNTU 80%</p>
            </div>
            <div className="text-lg text-[#666]">
              <p>
                Heat the crème anglaise and mix with an immersion blender, then
                gradually combine with the partially melted chocolate...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
