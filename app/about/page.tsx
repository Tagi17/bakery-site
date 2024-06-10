import Image from 'next/image'
import rome from "../rome.jpg"

const About = () => {
  return(
  <div className="">
      <div className="bg-cream p-10">
        <h1 className="text-4xl text-center font-bold text-soft-pink mb-6 mt-20">About</h1>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-3xl text-mint-green mb-4">
            I always loved baking growing up and making desserts for my family and friends to eat because seeing them happy and enjoying is always worth it to me.
          </p>
          <p className="text-3xl text-mint-green mb-4">
            I founded this company to share my desserts globally, allowing everyone to enjoy high-quality treats, because everyone deserves a little sweetness in life.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={rome} width={500} height={500} alt="me" />
        </div>
      </div>
      <div className="bg-light-beige p-10">
        <h2 className="text-3xl font-bold text-pastel-yellow mb-6">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <Image src="/team/member1.jpg" alt="Team Member 1" width={300} height={300} className="rounded-full mb-4" /> */}
              <h3 className="text-2xl font-semibold text-lavender mb-2">Team Member 1</h3>
              <p className="text-lg text-soft-peach">Short bio of team member 1.</p>
            </div>
          </div>
          {/* Repeat for other team members */}
        </div>
      </div>
      <div className="bg-cream p-10">
        <h2 className="text-3xl font-bold text-soft-pink mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* <Image src="/gallery/image1.jpg" alt="Gallery Image 1" width={400} height={400} className="rounded-lg" />
          <Image src="/gallery/image2.jpg" alt="Gallery Image 2" width={400} height={400} className="rounded-lg" />
          <Image src="/gallery/image3.jpg" alt="Gallery Image 3" width={400} height={400} className="rounded-lg" /> */}
          {/* Add more images as needed */}
        </div>
      </div>  
  </div>
)}
export default About; 