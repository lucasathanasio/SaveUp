const AuthLayout = ({ children, mirror = false }) => {
  const clipPath = mirror
    ? "polygon(0% 0%, 0% 100%, 50% 100%)"
    : "polygon(100% 0%, 100% 100%, 50% 100%)";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-light-background">
      <div className="absolute inset-0 bg-dark-blue" style={{ clipPath }} />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
