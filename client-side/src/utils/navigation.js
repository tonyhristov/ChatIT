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
      title: "My Profile",
      link: `/my-profile/${user && user.id}`,
    },
    {
      title: "Chats Part Of",
      link: `/chats-part-of/${user && user.id}`,
    },
    {
      title: "Create Chat",
      link: `/${user && user.id}/create-chat`,
    },
    {
      title: "Join Chat",
      link: `/join-chat`,
    },
    {
      title: "Home",
      link: `/home/${user && user.id}`,
    },
  ];

  const loggedIn = user && user.loggedIn;
  return loggedIn ? authLinks : guestLinks;
};

export default getNavigation;
