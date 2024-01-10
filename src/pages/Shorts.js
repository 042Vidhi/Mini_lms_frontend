import React from 'react';
import Navbar from '../components/Navbar';
import ShortList from '../utils/ShortsList';

const Shorts = () => {
  return (
    <div>
      <Navbar />
      <p className='text-center text-bold text-3xl p-4'>Watch educational Shorts</p>
      <section className="shorts flex justify-evenly flex-wrap">
        {ShortList.map((short) => (
          <div key={short}
           className='shorts-container rounded-lg'
          >
            <iframe
              width="300"
              height="500"
              src={short}
              title={short}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
              className='shorts-iframe rounded-lg'
            ></iframe>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shorts;
