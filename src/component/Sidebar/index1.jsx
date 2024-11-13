import React, { useState } from 'react'
// import logo from '../../assets/download.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
// import { CiSettings } from "react-icons/ci";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
// import { RiArrowDropRightLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
// import Hr from '../Sidebar/hr'
// import { DashboardBox } from '../../pages/Dashboard/DashboardBox';
export const SideBar = () => {
  const[activeTab,setActiveTab]=useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu]=useState(false);


  const isOpenSubmenu =(index)=>{
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu)
  }
  return (
   <>
<div className='sidebar fixed top-0 left-0 z-[100] w-[17%] '>

{/* <div className='logoWrapper py-3 px-4'>
  <img src={logo} className='w-100' />
  </div> */}
<div className='py-4 px-3'></div>
<div className="sidebarTabs  px-2   mt-4">
  <ul className='flex gap-3 flex-col'>
    <li > 
    <Link to ='/'>
      <Button className={`w-100${activeTab==0? 'active':''}`} onClick={() =>isOpenSubmenu(0)}>
      <span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md'><MdDashboardCustomize /></span> 
      Dashboard
      </Button>
      </Link>
      </li>
    <li >
      <Link to ="">
      {/* <Button className={`w-100 ${activeTab==1? 'active':''}`} onClick={()=>isOpenSubmenu(1)}></Button> */}
   <Button className={`w-100${activeTab==1? 'active':''}`} onClick={() =>isOpenSubmenu(1)}><span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md '><FaPersonCircleExclamation /></span>
    HR
    <span className={`arrow ml-auto w-[25px] h-[25px] flex items-center justify-center ${activeTab===1&&isToggleSubmenu===true? 'rotate':''}`}>
      <MdArrowForwardIos /></span>
      </Button>
    <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu === true? 'colapse':'colapsed'}`}>
    <div className='submenu'>
    <Link to ='/'><Button className='w-100'> 
       leave</Button></Link>
     <Link to='/'> <Button className='w-100'> 
      Employee info</Button></Link>
      <Link to='/'><Button className='w-100'> 
      Attendence</Button></Link>
      
    </div>
    </div>
    </Link>
    </li>
    <li>
      <Link to='/'>
    <Button className={`w-100${activeTab==2? 'active':''}`}onClick={() =>isOpenSubmenu(2)}><span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md'><GiReceiveMoney /></span> Finance</Button>
    </Link>
    </li>
    <li>
      <Link to='/'>
    <Button className={`w-100${activeTab==3? 'active':''}`} onClick={() =>isOpenSubmenu(3)}><span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md'><RiAdminLine /></span> Admin/Legal</Button>
    </Link> </li>
    <li>
      <Link to='/'>
    <Button className={`w-100${activeTab==4? 'active':''}`} onClick={() =>isOpenSubmenu(4)}><span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md'>< FcSalesPerformance  /></span>Sales</Button>
    </Link></li>
    <li>
      <Link to='/'>
    <Button className={`w-100${activeTab==5? 'active':''}`}onClick={() =>isOpenSubmenu(5)}><span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md'><MdOutlineProductionQuantityLimits/></span>Product/Service </Button>
    </Link>
    </li>
    <li>
      <Link to =''>

    <Button className={`w-100${activeTab==6? 'active':''}`} onClick={() =>isOpenSubmenu(6)}><span className='icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md'>< GrLogout /></span> Setting</Button>
    </Link></li>
    
  </ul>

<br/>


<div className='logoutWrapper'></div>



  
</div>
</div>




   </>
  )
}
