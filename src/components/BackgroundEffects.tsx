const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-[600px] gradient-fade-t opacity-60" />
      
      {/* Subtle accent glow - top right */}
      <div 
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(175 84% 52%) 0%, transparent 70%)' }}
      />
      
      {/* Subtle warm glow - bottom left */}
      <div 
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, hsl(35 90% 55%) 0%, transparent 70%)' }}
      />
    </div>
  );
};

export default BackgroundEffects;
