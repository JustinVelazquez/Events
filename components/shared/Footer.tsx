import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row ">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="EventPulse logo"
            width={128}
            height={32}
          />
        </Link>
        <p>2024. All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
