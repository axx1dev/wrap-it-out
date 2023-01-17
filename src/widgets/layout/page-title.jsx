import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import "../styles/pageTitle.css"

export function PageTitle({ heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3 font-permanent whitShadowWord">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-400 font-permanent">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
