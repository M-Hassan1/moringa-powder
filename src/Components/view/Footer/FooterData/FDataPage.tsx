import Link from "next/link"


const FDataPage = () => {
  return (
<div className='flex flex-col gap-3 shrink-0'>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
            My Store
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
            New Shope
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
            Sign up for mail
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
          Special Discount
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
          Feedback
          </Link>

        </div>
  )
}

export default FDataPage