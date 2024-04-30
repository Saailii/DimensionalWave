const HeroBanner = () => {
  return (
    <div className="flex h-4/5  w-full flex-col items-start justify-center px-7 md:px-16 lg:px-28 xl:px-52">
      <h1 className="font-sans text-5xl font-bold uppercase">Aesthetic</h1>
      <p className="py-4 text-xl ">
        Plongez dans l'élégance intemporelle avec nos pieces de luxe.
      </p>
      <button className="h-9 w-24 rounded-lg bg-blue-500 text-blue-50 hover:bg-blue-700 max-md:hidden  ">
        MORE
      </button>
    </div>
  );
};

export default HeroBanner;
