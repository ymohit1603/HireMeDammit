import Link from "next/link";

const NavBar = () => {
    const isSignedIn = false;
    return <div>
            <Link href={"/Pricing"}>Pricing</Link>
            <Link href={"/"}>Star this repo</Link>
            {isSignedIn?<Link href={"/logout"}>Log out</Link>:<Link href={"/signin"}>Sign in</Link>}
    </div>
}

export default NavBar;