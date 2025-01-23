const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -inset-[10px] opacity-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}rem`,
              height: `${Math.random() * 6 + 1}rem`,
              animation: `scaleIn ${Math.random() * 4 + 2}s infinite alternate ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundAnimation

