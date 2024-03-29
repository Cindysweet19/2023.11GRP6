import React, { useState, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { CategoriesData } from '../Data/CategoriesData';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function CategoriesSlides() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [data, setData] = useState([]);
  const classNames =
    'hover:bg-subMain transitions hover:text-white rounded text-xs w-8 h-8 flex-colo bg-main text-white shadow-xl';

  async function fetchData() {
    try {
      const result = await CategoriesData();
      console.log(result)
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sm:mt-10 mt-5">
      <Swiper
        slidesPerView={11}
        spaceBetween={7}
        navigation={{ prevEl, nextEl }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          350: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 6,
          },
          1280: {
            slidesPerView: 11,
            spaceBetween: 7,
          },
        }}
      >
        {data.map((f) => (
          f.subCategorias.map((e, index) => (
          <SwiperSlide key={f._id} className="hover:scale-90 transitions">
            <Link
              to={`/category/${f.nombreCategoria}`}
              className="p-2 bg-deepGray rounded-md flex-colo font-semibold text-xs gap-2"
            >
              <div className="p-2 shadow-md w-12 h-12 rounded-full bg-white">
                <img
                  alt={f.title}
                  src={`/images/categories/${e.imagenNombre}`}
                  className="w-full h-full"
                />
              </div>
              <p>{e.nombreSubCategoria}</p>
            </Link>
          </SwiperSlide>
          ))
        ))}
        <div className="w-full z-50 absolute top-1/4 justify-between flex">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default CategoriesSlides;
