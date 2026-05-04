import { Search } from "lucide-react";
import Link from "next/link";
import IconGithub from "../IconGithub";
import Logo from "../logo/logo";
import { Button } from "../ui/button";
import NavBar from "./nav-bar/nav-bar";

export default function Header() {
	return (
		<header className="grid grid-cols-[auto_1fr_auto] items-center gap-8 w-full max-w-480 px-8 py-2 mx-auto text-black">
			<div>
				<Link href="/" className="flex items-center gap-2">
					<Logo className="w-18 h-16" />
					<span className="text-3xl font-bold bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
						Slynx
					</span>
				</Link>
			</div>

			<div className="flex items-center justify-center min-w-0 justify-self-center">
				<NavBar />
			</div>

			<div className="justify-self-end items-center gap-4 hidden md:flex">
				<Button variant="ghost">
					<Search className="size-6" />
				</Button>

				{/* <Link href="#" className={`getStartedLink ${styles.headerGetStartedLink}`}>Get Started</Link>

        <ThemeToggle />

        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:translate" height={24} />
        </button> */}

				<a href="https://github.com/slynx/slynx" target="_blank" rel="noopener">
					<IconGithub />
				</a>
			</div>
		</header>
	);
}
