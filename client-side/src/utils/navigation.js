const getNavigation = (user) => {
  const guestLinks = [
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Home",
      link: "/",
    },
  ];
  const authLinks = [
    {
      title: "Profile",
      link: `/profile/${user && user.id}`,
    },
    {
      title: "Chats Part Of",
      link: `/chats-part-of`,
    },
    {
      title: "Create Chat",
      link: `/create-chat`,
    },
    {
      title: "Home",
      link: "/home",
    },
  ];

  const loggedIn = user && user.loggedIn;
  return loggedIn ? authLinks : guestLinks;
};

export default getNavigation;
