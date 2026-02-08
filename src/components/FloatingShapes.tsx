'use client';

const FloatingShapes = () => {
  const bubbles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 30,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 25 + 15,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={`bubble-${bubble.id}`}
          className="absolute rounded-full bg-gradient-to-br from-primary-200/30 to-primary-300/20 backdrop-blur-sm animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="url(#gradient)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9b317" />
                <stop offset="100%" stopColor="#1ba898" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Floating Balloons */}
      <div className="absolute left-[10%] top-[20%] animate-bounce-slow">
        <div className="relative">
          <div className="w-12 h-14 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-70" />
          <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gray-400" />
        </div>
      </div>

      <div className="absolute right-[15%] top-[30%] animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <div className="relative">
          <div className="w-10 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-70" />
          <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-gray-400" />
        </div>
      </div>

      <div className="absolute left-[80%] top-[60%] animate-bounce-slow" style={{ animationDelay: '2s' }}>
        <div className="relative">
          <div className="w-11 h-13 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-70" />
          <div className="absolute bottom-0 left-1/2 w-0.5 h-7 bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default FloatingShapes;
