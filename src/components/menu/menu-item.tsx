import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const HeaderMenuItem = styled(NavLink)`
    color: var(--shuttle-gray);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-s);
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
`;

function MenuItem({ name, to }: { name: string; to: string }) {
  return (
    <li>
      <HeaderMenuItem
        className={({ isActive }) =>
          isActive ? 'border-b text-white' : 'text-black hover:border-b'
        }
        to={to}
      >
        {name}
      </HeaderMenuItem>
    </li>
  )
}

export default MenuItem
