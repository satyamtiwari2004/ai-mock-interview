import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/"  className='flex items-center gap-2'>
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        <h2 className="text-primary-100">MockINT</h2>

        </Link>
      </nav>
      {children}

    </div>
  )
}

export default RootLayout