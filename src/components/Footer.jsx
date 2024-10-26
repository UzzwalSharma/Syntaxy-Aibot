import { Typography } from "@material-tailwind/react";

const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-6 py-12 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center">
        {/* Flexbox for links with responsive adjustments */}
        <div className="flex flex-wrap items-center justify-center gap-8 pb-6">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="inherit"
                  className="font-medium !text-gray-400 hover:!text-white transition-all duration-300"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-400 text-center"
        >
          Copyright &copy; {currentYear} <span className="font-semibold">Syntax Squad</span>. All rights reserved.
        </Typography>
        <h1 className="mt-6 text-white text-lg text-center">
          Made with ❤️ by Ujjwal
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
