import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'

const links = [
  { to: '/', label: 'Trang chủ' },
  { to: '/about', label: 'Giới thiệu' },
  { to: '/services', label: 'Dịch vụ' },
  { to: '/courses', label: 'Đào tạo' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Liên hệ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-lg font-semibold text-slate-900"
          onClick={() => setOpen(false)}
        >
          CETA Academy
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 bg-white px-4 py-2 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 text-sm font-medium ${
                    isActive ? 'text-blue-700' : 'text-slate-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
