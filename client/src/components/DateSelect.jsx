import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const onBookHandler = () => {
    if (!selected) {
      toast.error('Please select a date to proceed')
      return
    }
    navigate(`/movies/${id}/${selected}`)
    window.scrollTo(0, 0)
  }

  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10
        relative p-8 bg-primary/10 border border-primary/20 rounded-lg">

        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        {/* Date Selector */}
        <div>
          <p className="text-lg font-semibold">Choose Date</p>

          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon
              width={28}
              className="cursor-pointer opacity-70 hover:opacity-100"
            />

            <div className="grid grid-cols-3 md:flex flex-wrap gap-4 max-w-lg">
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date}
                  onClick={() => setSelected(date)}
                  className={`flex flex-col items-center justify-center
                    h-14 w-14 rounded-md border
                    transition-all duration-200 cursor-pointer
                    ${
                      selected === date
                        ? 'bg-primary text-white border-primary'
                        : 'border-primary/50 hover:bg-primary hover:text-white'
                    }`}
                >
                  <span className="font-medium">
                    {new Date(date).getDate()}
                  </span>
                  <span className="text-xs">
                    {new Date(date).toLocaleDateString('en-IN', {
                      month: 'short',
                    })}
                  </span>
                </button>
              ))}
            </div>

            <ChevronRightIcon
              width={28}
              className="cursor-pointer opacity-70 hover:opacity-100"
            />
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={onBookHandler}
          className="bg-primary text-white px-8 py-2 mt-6 md:mt-0 rounded-md
          hover:bg-primary/90 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

export default DateSelect

