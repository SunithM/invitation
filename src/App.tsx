import React, { useState, useEffect } from 'react'
import { Heart, MapPin, Clock, Calendar, ChevronDown } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import pic1 from './images/suni-sush-1.jpg'
import pic2 from './images/suni-sush-2.jpg'
import pic3 from './images/suni-sush-3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const photos = [pic1, pic2, pic3]

  useEffect(() => {
    const target = new Date('2025-05-01T12:15:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Swiper
            modules={[EffectFade, Autoplay, Navigation]}
            effect="fade"
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative text-center text-white z-10 px-4">
          <div className="bg-purple-800 text-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-7xl font-serif mb-6 font-dancing text-white font-bold">
              Sunith & Sushmitha
            </h1>
          </div>
          <p className="text-2xl mb-12 font-light tracking-wide text-amber-50 moving-text">
            Request the pleasure of your company at their wedding
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-6 w-24 sm:w-28 border border-amber-200/20">
              <div className="text-4xl font-light text-amber-200">{days}</div>
              <div className="text-sm uppercase tracking-wider mt-1 text-amber-50">
                Days
              </div>
            </div>
            <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-6 w-24 sm:w-28 border border-amber-200/20">
              <div className="text-4xl font-light text-amber-200">{hours}</div>
              <div className="text-sm uppercase tracking-wider mt-1 text-amber-50">
                Hours
              </div>
            </div>
            <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-6 w-24 sm:w-28 border border-amber-200/20">
              <div className="text-4xl font-light text-amber-200">
                {minutes}
              </div>
              <div className="text-sm uppercase tracking-wider mt-1 text-amber-50">
                Minutes
              </div>
            </div>
            <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-6 w-24 sm:w-28 border border-amber-200/20">
              <div className="text-4xl font-light text-amber-200">
                {seconds}
              </div>
              <div className="text-sm uppercase tracking-wider mt-1 text-amber-50">
                Seconds
              </div>
            </div>
          </div>
          <ChevronDown
            className="mx-auto mt-16 animate-bounce text-amber-200"
            size={36}
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto py-24 px-4">
        <div className="text-center mb-20">
          <Heart className="mx-auto mb-6 text-amber-200" size={48} />
          <h2 className="text-4xl font-serif mb-6 text-amber-200">
            Join Us in Celebration
          </h2>
          <p className="text-lg text-amber-50">
            As we begin our new journey together, we would be honored to have
            you by our side.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={`gallery-${index}`}>
                  <img
                    src={photo}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[450px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="space-y-8 bg-purple-900/50 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-amber-200/20">
            <div className="flex items-center space-x-6">
              <Calendar className="text-amber-200 flex-shrink-0" size={32} />
              <div>
                <span className="font-medium text-lg text-amber-200 block mb-1">
                  Date
                </span>
                <p className="text-amber-50">May 1st, 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Clock className="text-amber-200 flex-shrink-0" size={32} />
              <div>
                <span className="font-medium text-lg text-amber-200 block mb-1">
                  Time
                </span>
                <p className="text-amber-50">Muhurtham at 12:15 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <MapPin className="text-amber-200 flex-shrink-0" size={32} />
              <div>
                <span className="font-medium text-lg text-amber-200 block mb-1">
                  Venue
                </span>
                <p className="text-amber-50">Mangalyam Kalyan Mantapa</p>
                <p className="text-amber-50">Chirumbha bhagvathi Ulal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={`grid-${index}`}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-200/20"
            >
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-950 to-purple-900 text-white py-16 text-center border-t border-amber-200/20">
        <p className="text-4xl font-serif mb-6 text-amber-200">
          Sunith & Sushmitha
        </p>
        <p className="text-lg font-light tracking-wide text-amber-50">
          Looking forward to celebrating with you!
        </p>
      </footer>
    </div>
  )
}

export default App
