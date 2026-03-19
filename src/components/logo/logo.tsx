import Image from "next/image";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src="/lynx-64px-safe.svg"
      alt="Slynx logo"
      width={64}
      height={64}
      className={className}
      priority
    />
  );
};

export default Logo