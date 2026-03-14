import './Header.css'
import HomeButton from './HomeButton';

export default function Header() {

    return (
        <div className="flex flex-row justify-center items-center mt-3 mb-3 w-full">
            <div className='absolute left-10'>
                <HomeButton />
            </div>
            <h1 className='font-sans font-bold tracking-tight text-5xl'>MARTA</h1>
        </div>
    );
}