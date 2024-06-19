import Image from "next/legacy/image";
import rome from "../rome.jpg";

const About = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl text-center font-bold text-soft-pink mb-6 mt-20 shadow-lg">
          About
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-3xl text-mint-green mb-4 text-center leading-relaxed">
            Hi I&apos;m Nazia,
          </p>
          <p className="text-3xl text-mint-green mb-4 text-center leading-relaxed">
            I&apos;m a 23 year old dessert enthusiast providing a range of
            baking services to businesses and customers.
          </p>
          <p className="text-3xl text-mint-green mb-4 text-center leading-relaxed">
            I&apos;ve always had a deep passion for baking since my childhood.
            In the past I wished to pursue a professional culinary education,
            however, seeing as I did not have the means to do so I decided to
            embark on my culinary journey at home.
            {/* I discovered the joy of creating desserts after seeing my family and friends happy. Seeing them enjoying my sweets is always worth it to me. */}
          </p>
          <hr className="my-4 border-t border-soft-pink" />
          <p className="text-3xl text-mint-green mb-4 text-center leading-relaxed">
            I founded this company to share my desserts globally, allowing
            everyone to enjoy high-quality treats, because everyone deserves a
            little sweetness in life.
          </p>
          <div className="flex justify-center">
            <Image src={rome} width={400} height={300} alt="me" />
          </div>
        </div>
        <div className="flex justify-center">
          {/* Assuming you have some <Image> component here */}
        </div>
      </div>
      {/* <div className="p-10">
        <h2 className="text-3xl font-bold text-pastel-yellow mb-6 text-center">Our Team</h2>
        <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-[#fcf7e8] p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-lavender mb-2">Team Member 1</h3>
                    <p className="text-lg text-soft-peach">Short bio of team member 1.</p>
                </div>
            </div>
   
        </div>
    </div>
    <div className="bg-cream p-10">
        <h2 className="text-3xl font-bold text-soft-pink mb-6 text-center">Our Gallery</h2>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             
            </div>
        </div>
    </div> */}
    </div>
  );
};
export default About;
