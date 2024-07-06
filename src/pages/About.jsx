// react router nav link
import { Outlet, NavLink } from "react-router-dom";

const About = () => {
  const aboutViews = [
    {
      id: 1,
      path: "teams",
      name: "Teams",
    },
    {
      id: 2,
      path: "news",
      name: "News",
    },
  ];

  return (
    <div>
      {aboutViews.map((item) => (
        <NavLink to={item.path} key={item.id} className={"m-4"}>
          <span>{item.name}</span>
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};

export default About;
