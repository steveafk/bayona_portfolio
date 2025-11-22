 
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-white h-screen w-full flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
        <Image
          src="/pdiddy.jpg"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-black text-[40px] font-bold mt-4">
        BAYONA BAYONA BAYONA BAYONA
      </h2>
    </div>
  );
};

export default HomePage;
