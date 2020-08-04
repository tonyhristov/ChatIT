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
        title: "About",
        link: "/about",
      },
      {
        title: "Home",
        link: "/",
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