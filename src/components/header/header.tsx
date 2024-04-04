import { Link } from 'react-router-dom'
import HeaderMenu from '@/components/menu/header_menu'
import { SiAmazonecs } from 'react-icons/si'
import styled from 'styled-components'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #F5ECE5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
`



const HeaderMenuContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const HeaderText = styled.span`
    color: var(--shuttle-gray);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
`

const HeaderButton = styled(Link)`
    color: var(--shuttle-gray);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-s);
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    border: 1px solid var(--waterloo-);
    padding: 8px 16px;
    border-radius: 4px;
`
const MainContent = styled.div`
    margin-top: 70px; /* Высота вашей шапки + немного отступа */
`;

function Header({ title }: { title?: string }) {
  return (
    <StyledHeader className="relative py-6">
      <div className="mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SiAmazonecs />
          <Link to="/" className="no-underline">
            <HeaderText className="text-xl font-bold uppercase leading-none">{title}</HeaderText>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <HeaderMenuContainer>
            <HeaderMenu className="flex gap-4" />
          </HeaderMenuContainer>
          <HeaderButton to="/login">Get Started Now</HeaderButton>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header

function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return <MainContent>{children}</MainContent>;
}

export { MainContentWrapper };
