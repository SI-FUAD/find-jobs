import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function DashboardSidebar({
  title,
  subtitle,
  headerIcon,
  links,
  open,
  setOpen,
  logout,
  colorClasses,
}) {
  return (
    <aside
      className={`
  fixed
  top-20
  left-0
  z-50
  w-72
  h-[calc(100vh-5rem)]
  ${colorClasses.sidebarBg}
  border-r
  ${colorClasses.sidebarBorder}
  overflow-y-auto
  transition-transform
  duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0
`}
    >
      <div className={`p-6 border-b ${colorClasses.sidebarBorder}`}>
  <div className="flex items-center gap-3">
    {headerIcon}

    <h1
      className={`text-2xl font-black ${colorClasses.text}`}
    >
      {title}
    </h1>
  </div>

  <p
    className={`text-sm mt-2 ${
      colorClasses.subtitle || "text-slate-400"
    }`}
  >
    {subtitle}
  </p>
</div>

      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                transition-all
                duration-300
                font-medium
                ${
                  isActive
  ? colorClasses.active
  : `${colorClasses.navText} ${colorClasses.hover}`
                }
              `
            }
          >
            <link.icon size={18} />
            {link.label}
          </NavLink>
        ))}

        <div
  className={`my-4 border-t ${colorClasses.sidebarBorder}`}
/>
        
        <button
          onClick={logout}
          className="
            mt-6
            w-full
            flex
            items-center
            justify-center
            gap-2
            py-3
            rounded-2xl
            border
            border-red-500/20
            text-red-400
            hover:bg-red-500/10
            transition-all
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}