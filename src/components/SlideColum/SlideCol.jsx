import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Slide1 from "../../assets/Hero/Slide-1.webp";
import Slide2 from "../../assets/Hero/Slide-2.webp";
import "./SlideCol.css";
import env from "../../env";
import PostReq from "../../hooks/PostReq";
export default function SlideCol() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [Data, setData] = useState();
  const FetchSlides = async () => {
    const result = await PostReq({
      method: "Post",
      url: "/setting/sliders",
      body: {},
    });
    setData("");
    setTimeout(() => setData(result.filter), 200);
  };
  useEffect(() => {
    FetchSlides();
  }, []);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {Data &&
          Data.map((slide) => (
            <div className="embla__slide">
              <img
                src={slide.imageUrl ? env.siteApiUrl + slide.imageUrl : ""}
                alt={slide.enTitle}
              />
            </div>
          ))}
        {/* <div className="embla__slide">
          <img src={Slide1} alt="Slide1" />
        </div>

        <div className="embla__slide">
          <img src={Slide2} alt="Slide2" />
        </div> */}
      </div>
    </div>
  );
}
