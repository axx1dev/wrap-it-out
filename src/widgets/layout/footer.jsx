import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import "../styles/footer.css"

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Typography color={color}>
                      <i className={`fa-brands fa-brands-custom fa-${name}`} />
                    </Typography>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-blue-gray-500 whiteShadowInline" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Wrap It Out Ags",
  description:
    "Creamos el diseño de tus sueños.",
  socials: [
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/axl_palacioos/",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/@AxelPalacios",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/axx1dev",
    },
  ],
  menus: [
    {
      name: "Avisos",
      items: [
        { name: "Aviso Legal", path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/" },
        { name: "Politítica de privacidad", path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/" },
        {
          name: "Politítica de cookies",
          path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/",
        }
      ],
    },
    {
      name: "Contáctanos",
      items: [
        {
          name: "4491126766",
          path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/",
        },
        {
          name: "axelpalacioos",
          path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/",
        },
        {
          name: "Lun - Dom de 09:00 am - 06:00 pm",
          path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/",
        },
        {
          name: "Real del Sol Ags.",
          path: "https://www.linkedin.com/in/axel-palacios-66a8aa118/",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Wrap It Out by{" "}
      <a
        href="https://www.linkedin.com/in/axel-palacios-66a8aa118/"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Axel Palacios
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
