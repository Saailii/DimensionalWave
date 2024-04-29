const HeroBanner = () => {
  return (
    <div className="w-full h-4/5  flex justify-center items-start flex-col px-7 md:px-16 lg:px-28 xl:px-52">
      <h1 className="text-5xl font-sans uppercase font-bold">Aesthetic</h1>
      <p className="text-xl py-4 ">
        Plongez dans l'élégance intemporelle avec nos pièces de luxe.
      </p>
      <button className="bg-blue-500 w-24 h-9 rounded-lg text-blue-50 hover:bg-blue-700 max-md:hidden  ">
        MORE
      </button>
    </div>
  );
};

export default HeroBanner;
