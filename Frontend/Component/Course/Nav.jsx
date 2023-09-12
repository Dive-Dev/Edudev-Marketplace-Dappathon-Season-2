import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <div className='HeaderNavWrapper'>
      <Link passHref href={'/'}><div className="HeaderNavLinks"  active={Router.pathname == "/" ? true : false} >
        HOME
      </div></Link>
      <Link passHref href={'/sellnft'}><div active={Router.pathname == "/sellnft" ? true : false} >
        SELL COURSE
      </div></Link>
      <Link passHref href={'/mynft'}><div className="HeaderNavLinks"  active={Router.pathname == "/" ? true : false} >
        My Course
      </div></Link>
      <Link passHref href={'/dashboard'}><div active={Router.pathname == "/" ? true : false} >
        Dashboard
      </div></Link>
      <Link passHref href={'/Review'}><div active={Router.pathname == "/sellnft" ? true : false} >
        REVIEW COURSE
      </div></Link>
      
    </div>
  )
}

const style ={
    HeaderNavWrapper:`

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
  `,
    HeaderNavLinks:`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`
}
export default HeaderNav