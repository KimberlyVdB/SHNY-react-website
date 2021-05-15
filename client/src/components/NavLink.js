import { Link } from "@reach/router";

function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? "text-secondary" : "text-primary"
        };
      }}
    />
  )
};

export default NavLink;
