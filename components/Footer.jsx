import Link from 'next/link'
import Image from 'next/image'
import instagram from '../assets/instagram.svg'

const Footer = () => {
    return(
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 justify-center h-auto bg-gradient-to-r from-cyan-500 to-blue-500">
            <div>
                <h1 className="font-sans h-full font-bold leading-loose text-stone-50 font-sans text-2xl ">borzonedaniel@gmail.com </h1>
            </div>
            <div>
            
            </div>
            <div className="text-stone-50 text-4xl grid justify-center lg:justify-end items-center">
                <Link href="https://www.instagram.com/nextart.gallery/" class="from-cyan-500 to-blue-500 cursor-pointer">
                <Image
                    src={instagram}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
                </Link>
            </div>
      </div>
    )
}

export default Footer