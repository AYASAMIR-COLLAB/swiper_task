import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {}
      <Swiper
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={3}
        navigation       
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
         <SwiperSlide>
   <img src="/images/1.jpeg" alt="Slide 1" style={{ width: "90%", borderRadius: "10px" }} />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/2.jpeg" alt="Slide 2" style={{ width: "90%", borderRadius: "10px" }} />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/3.jpeg" alt="Slide 3" style={{ width: "90%", borderRadius: "10px" }} />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/4.jpeg" alt="Slide 4" style={{ width: "90%", borderRadius: "10px" }} />
  </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
