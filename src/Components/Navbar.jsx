import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar p-5 w-[50%] flex items-center justify-between bg-transparent fixed top-0 left-0 z-99">
      <img src={Logo} alt="" />

      {/* <i class="ri-menu-line text-2xl mix-blend-difference text-[#523122]"></i> */}
    </div>
  );
};

export default Navbar;
