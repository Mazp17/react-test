import Brand from "./Brand"
import NavItem from "./NavItem";

export const Header = () => {
  return (
    <header className="navbar navbar-expand-sm navbar-light d-print-none">
      <div className="container-xl">
        <Brand></Brand>

        <div className='navbar-nav flex-row order-md-last'>
          <NavItem></NavItem>
        </div>
      </div>
    </header>
  );
}
