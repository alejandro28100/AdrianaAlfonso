import { Swiper, SwiperSlide } from "swiper/react"

function App() {
  const swiperSettings = {
    spaceBetween: 50,
    slidesPerView: 1,
    onSlideChange: () => console.log("Slide change"),
    onSwiper: (swiper) => console.log(swiper)
  }
  return (
    <div className="">
      <Swiper {...swiperSettings}>
        <SwiperSlide>
          1
        </SwiperSlide>
        <SwiperSlide>
          2
        </SwiperSlide>
        <SwiperSlide>
          3
        </SwiperSlide>
        <SwiperSlide>
          4
        </SwiperSlide>
      </Swiper>
      <header className="">
      </header>
    </div>
  );
}

export default App;
