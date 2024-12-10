import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="!flex items-center gap-8 px-8 py-12 bg-gray-100">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-gray-800">
              En Kaliteli Ayakkabılar Burada!
            </h1>
            <p className="text-2xl text-gray-600 my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae facere architecto earum officiis omnis alias dolorem
              ipsam quia dignissimos excepturi ut, repudiandae tempore fuga.
            </p>
            <button className="bg-gray-800 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-gray-700">
              İncele
            </button>
          </div>
          <div className="flex-1">
            <img
              className="h-[500px] w-auto object-contain"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png"
              alt="Custom Nike Dunk"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="!flex items-center gap-8 px-8 py-12 bg-gray-100">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-gray-800">
              Şıklığı ve Konforu Bir Arada Bulun!
            </h1>
            <p className="text-2xl text-gray-600 my-6">
              Sezonun en trend ayakkabılarını kaçırmayın. Her adımınızda
              kaliteyi hissedin. Sınırlı stok, hemen inceleyin!
            </p>
            <button className="bg-gray-800 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-gray-700">
              Keşfet
            </button>
          </div>
          <div className="flex-1">
            <img
              className="h-[500px] w-auto object-contain"
              src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png"
              alt="Nike Dunk Low Retro"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;
