// componet by fuad hasan
import Logo from "../../assets/460501538_122116695884475122_5254163446392055715_n.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-gray-500 text-base-content p-10">
      <aside>
        <img className="w-24 rounded-full" src={Logo} alt="" />
        <p>
          আমরাই বাংলাদেশ
          <br />
          একটি সামাজিক সেচ্ছাসেবী সংগঠন
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
