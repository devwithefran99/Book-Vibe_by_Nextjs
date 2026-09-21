
import Link from "next/link";

const Navbar = () => {
  const links = [
    <li key="home">
      <Link href="/" className="font-medium hover:text-green-600">Home</Link>
    </li>,
    <li key="pages-to-read">
      <Link href="/books" className="font-medium hover:text-green-600">All Books</Link>
    </li>,
    <li key="listed-books">
      <Link href="/listedBooks" className="font-medium hover:text-green-600">Listed Books</Link>
    </li>,
    <li key="pages-to-read">
      <Link href="/" className="font-medium hover:text-green-600">Pages to Read</Link>
    </li>,
  ];

  return (
    <nav className="shadow-md border border-gray-100">
      <section className=" py-2">
      <div className="navbar bg-white rounded-2xl  px-4 lg:px-6 container mx-auto">

        {/* Logo + Mobile Menu */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white rounded-xl z-50 mt-3 w-56 p-3 shadow-lg border border-gray-100 gap-1"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-2xl font-bold tracking-tight">
            Book<span className="text-green-600">Vibe</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {links}
          </ul>
        </div>

        {/* Buttons */}
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost hidden sm:flex">
            Sign In
          </button>

          <button className="btn bg-green-600 hover:bg-green-700 border-none text-white px-5 rounded-lg">
            Sign Up
          </button>
        </div>

      </div>
    </section>
    </nav>
  );
};

export default Navbar;
