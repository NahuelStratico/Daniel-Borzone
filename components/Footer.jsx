import Link from 'next/link'
import Image from 'next/image'
import instagram from '../assets/instagram.svg'

const Footer = () => {
    return(
        <div class="grid grid-cols-3 gap-4 px-4 justify-center h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div>
                <h1 className="h-full font-bold leading-loose text-stone-50 font-sans text-2xl ">Footer</h1>
            </div>
            <div class="">
            02
            </div>
            <div class="text-stone-50 text-4xl grid justify-center items-center">
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