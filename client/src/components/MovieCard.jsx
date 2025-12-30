import React from 'react'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const goToMovie = () => {
    navigate(`/movies/${movie._id}`)
    window.scrollTo(0, 0)
  }

  return (
    <div
      className='bg-[#1f2937] rounded-2xl p-3 w-64
                 shadow-xl hover:-translate-y-2 transition duration-300
                 cursor-pointer'
      onClick={goToMovie}
    >
      {/* Poster Image */}
      <img
        src={movie.poster_path || movie.backdrop_path}
        alt={movie.title}
        className='rounded-xl h-72 w-full object-cover'
      />

      {/* Movie Title */}
      <h3 className='mt-3 font-semibold text-sm truncate'>
        {movie.title}
      </h3>

      {/* Movie Info */}
      <p className='text-xs text-gray-400 mt-1'>
        {movie.release_date
          ? new Date(movie.release_date).getFullYear()
          : 'N/A'}{' '}
        • {movie.genres?.slice(0, 1).map(g => g.name)} •{' '}
        {timeFormat(movie.runtime ?? '—')}
      </p>

      {/* Footer */}
      <div className='flex items-center justify-between mt-4'>
        <button
          className='bg-rose-500 hover:bg-rose-600
                     text-xs px-4 py-2 rounded-full font-medium'
        >
          Buy Tickets
        </button>

        <div className='flex items-center text-sm text-gray-300'>
          <Star className='w-4 h-4 text-red-500 mr-1' />
          {movie.vote_average?.toFixed(1) ?? 'N/A'}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
