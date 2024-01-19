import Image from 'next/image';
import stacklineLogo from 'app/public/stackline_logo.svg';

const Navbar = () => {
    return (
        <nav>
            <Image src={stacklineLogo} alt='Stackline logo' width={100} height={50} />
        </nav>
    );
};

export default Navbar;
