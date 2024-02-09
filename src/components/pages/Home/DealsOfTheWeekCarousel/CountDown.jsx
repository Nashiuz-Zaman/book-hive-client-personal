import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
      // Random component
      const Completionist = () => <span>Offer has been closed</span>;

      // Calculate the total milliseconds for the countdown duration
      const durationInMillis = (90 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (21 * 60 * 1000) + (49 * 1000);

      // Renderer callback with condition
      const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                  // Render a complete state
                  return <Completionist />;
            } else {
                  // Render a countdown
                  return (
                        <div className="grid grid-cols-1 md:grid-cols-4  divide-x gap-2  items-center justify-center ">
                              <div className="bg-[#FFFFFF] ">
                                    <h1 className="text-base text-left font-semibold">
                                    {days} <span className="text-sm text-[#373739]">Days</span>
                                    </h1>
                              </div>
                              <div className="bg-[#FFFFFF] p-2">
                                    <h1 className="text-base ml-2 text-center font-semibold">
                                    {hours}<span className="text-sm text-[#373739]">Hours</span>
                                    </h1>
                              </div>
                              <div className="bg-[#FFFFFF] p-2">
                                    <h1 className="text-base ml-2 text-center font-semibold">
                                    {minutes} <span className="text-sm text-[#373739]">Mins</span>
                                    </h1>
                              </div>
                              <div className="bg-[#FFFFFF] p-2">
                                    <h1 className="text-base ml-2 text-center font-semibold">
                                    {seconds} <span className="text-sm text-[#373739]">Secs</span>
                                    </h1>
                              </div>
                        </div>
                  );
            }
      };
      return (
            <div className="">
                  <Countdown date={Date.now() + durationInMillis} renderer={renderer} />
            </div>
      );
};

export default CountDown;