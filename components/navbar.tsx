import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex h-18 items-center justify-between bg-white shadow-[0px_3px_0_0_#17171740] px-6 font-mont font-extrabold relative z-10">
            <button>ICON HERE</button>
            <div className="flex items-center gap-3">
                <Link
                    href="/"
                    className="inline-flex custombtn w-26 items-center justify-center"
                >
                    HOME
                </Link>
                <button className="custombtn w-30">CREATOR</button>
                <Link
                    href="/costsheet"
                    className="inline-flex custombtn w-32 items-center justify-center"
                >
                    COSTSHEET
                </Link>
                <button className="custombtn w-16">KB</button>
                <button>ACCOUNT ICON</button>
            </div>
        </div>
    );
}
