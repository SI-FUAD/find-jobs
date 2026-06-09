export default function StatCard({
  title,
  value,
  color = "blue",
}) {
  const colors = {
    blue: "text-blue-600",
    orange: "text-orange-600",
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
  };

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-200
        shadow-sm
        hover:shadow-md
        transition-all duration-300

        w-full
        min-h-27.5
        h-full

        flex flex-col justify-center items-center
        text-center

        p-4 md:p-6
      "
    >
      <p className="text-xs md:text-sm text-slate-500 mb-2">
        {title}
      </p>

      <h2
        className={`
          text-2xl md:text-4xl
          font-black
          ${colors[color]}
        `}
      >
        {value ?? 0}
      </h2>
    </div>
  );
}