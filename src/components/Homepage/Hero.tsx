import Image from "next/image";
import bannerImg from "@/assets/Image/booksBanner.png"

const Hero = () => {
    return (
       <section className=" py-20">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-300 rounded p-8">
  
  {/* Content */}
  <div className="font-bold text-center md:text-left px-6">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      Books to freshen up <br className="hidden sm:block" />
      your bookshelf
    </h2>

    <button className="btn bg-green-600 text-amber-50 py-3 my-6">
      View The List
    </button>
  </div>

  {/* Image */}
  <div className="flex justify-center md:justify-end">
    <Image
      src={bannerImg}
      alt="Banner"
      className="w-full max-w-sm sm:max-w-md  h-auto"
    />
  </div>

</div>
       </section>
    )
}
export default Hero; 