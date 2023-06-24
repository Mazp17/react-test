interface NavItemProps {

}

const NavItem: FunctionComponent<NavItemProps> = () => {
  return (
    <div className='nav-item'>
      <a href="#" className="nav-link d-flex lh-1 text-reset p-0">
        <span className='avatar avatar-sm'>
        </span>
        <div className='d-none d-xl-block ps-2'>
          <div>
            Miguel Zapata
          </div>
          <div className='mt-1 small text-muted'>
            Developer
          </div>
        </div>
      </a>
    </div>
  );
}

export default NavItem;
