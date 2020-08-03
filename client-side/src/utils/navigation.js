const getNavigation = (userId) => {
    const links = [
      {
        title: "Register",
        link: "/register",
      },
      {
        title: "Login",
        link: "/login",
      },
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/about",
      },
      // {
      //     title: "Profile",
      //     link: `/profile/${userId}`,
      // },
      // {
      //     title: "Create Chat",
      //     link: `/create-chat`,
      // },
    ];

    return links;
};

export default getNavigation;