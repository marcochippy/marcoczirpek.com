export const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;

  const buttonValues =
    'pointer-events-auto p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200';

  return (
    <div className="carousel-button-group flex justify-between items-center absolute inset-0 z-10 pointer-events-none">
      <button
        className={`${buttonValues} -ml-15 ${
          currentSlide === 0 ? 'opacity-0' : 'hover:scale-110 hover:cursor-pointer'
        }`}
        onClick={() => previous()}
        disabled={currentSlide === 0}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className={`${buttonValues} -mr-15 ${
          currentSlide >= totalItems - 1 ? 'opacity-0' : 'hover:scale-110 hover:cursor-pointer'
        }`}
        onClick={() => next()}
        disabled={currentSlide >= totalItems - 1}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
