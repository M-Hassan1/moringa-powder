import Link from "next/link"
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'



const ThirdPage = () => {
  return (
    <div className='flex gap-4 justify-center md:justify-start'>
<Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
  <FaGithub />
</Link>
<Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
  <FaLinkedin />
</Link>
<Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
  <FaYoutube />
</Link>
<Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
  <FaTwitter />
</Link>
</div>
      
  )
}

export default ThirdPage




