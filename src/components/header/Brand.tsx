import { FunctionComponent } from "react";

interface BrandProps {
  
}

const Brand: FunctionComponent<BrandProps> = () => {
  return (
    <h1 className='navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3'>
      <a href="#">
        Logo
      </a>
    </h1>
  );
}

export default Brand;
