import MenuItem from '@/components/menu/menu-item'

const MENU_ITEMS = [
  { name: 'Topics', to: '/articles' },
  { name: 'Contact', to: '/contact' },
  { name: 'About Us', to: '/about' },
  { name: "FAQ's", to: '/faqs' },
  { name: 'Sup', to: '/support' },
]

function HeaderMenu({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {MENU_ITEMS.map((link) => (
        <MenuItem key={link.name} to={link.to} name={link.name} />
      ))}
    </ul>
  )
}


export default HeaderMenu
