import HomeLayout from "../Layout/HomeLayout";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality education</h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide quality education to all students,
              regardless of their financial situation. We believe that every
              student deserves.
            </p>
          </section>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
