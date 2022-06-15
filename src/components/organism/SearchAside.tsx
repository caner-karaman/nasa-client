import React from 'react';
import Logo from "../../assets/images/nasa-logo.svg";

const SearchAside = () => {
  return(
    <aside className='bg-slate-900 h-screen w-72'>
      <div className='py-8 flex justify-center'>
        <img src={Logo} alt="nasa logo" />
      </div>
      <form>
        
      </form>
    </aside>
  )
}

export default SearchAside;
