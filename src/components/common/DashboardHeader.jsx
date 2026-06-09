export default function DashboardHeader({
  title,
  subtitle,
  color = "blue",
}) {
  const gradients = {
    blue: "from-blue-600 to-blue-500",
    orange: "from-orange-500 to-orange-400",
    green: "from-emerald-600 to-emerald-500",
  };

  return (
    <div
      className={`
        bg-linear-to-r
        ${gradients[color]}
        rounded-3xl
        p-6 md:p-8
        shadow-xl
      `}
    >
      <h1 className="text-3xl md:text-4xl font-black text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm md:text-base text-white/80 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}