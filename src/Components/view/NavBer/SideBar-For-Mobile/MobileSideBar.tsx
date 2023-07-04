import React from 'react'
import Link from 'next/link'


const data = [
  {id: 1, name: "Home", url: "/"},
  {id: 2, name: "AboutProduct", url: "/AboutPageRo"},
  {id: 3, name: "BeneFits", url: "/"},
  {id: 4, name: "Uses", url: "/UsesPage"},
  {id: 5, name: "Blogs", url: "/Blogpage"},
];

type MobileSideBarProps = {
  showDesktopMenu: boolean;
  setShowDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSideBar: React.FC<MobileSideBarProps> = ({ showDesktopMenu, setShowDesktopMenu, setMobileMenu }) => {
  return (
    <ul className='flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white md:hidden font-bold border-t text-black' >
      {data.map((item) =>{
        return (
          <li key={item.id} className='py-4 px-5 border-b'>
            <Link href={item.url} onClick={() => setMobileMenu(false)} >
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MobileSideBar;
