import Link from 'next/link'


const SecondMenu = () => {
  return (
<div className='flex flex-col gap-3'>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium uppercase text-sm'>
            About
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
            News & information
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
          Terms and Policies
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
           Payment Policies
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
          Customer Support
          </Link>
            </div>
  )
}

export default SecondMenu