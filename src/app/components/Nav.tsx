import logo from "../../imports/logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-50 p-4 md:p-6">
      <img
        src={logo}
        alt="Motion Marketing"
        className="h-8 md:h-9 w-auto"
      />
    </nav>
  );
}
