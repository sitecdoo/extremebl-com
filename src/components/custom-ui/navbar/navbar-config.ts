import { getDictionary } from "@/utils/dictionary";

export const getNavigationItems = async () => {
  const { navigation } = await getDictionary();
  const navbarConfig = {
    main: [
      { href: "/", label: navigation.home },
      { href: "/o-nama", label: navigation.about },
      { href: "/djeca-penjanje", label: navigation.children },
      { href: "/odrasli-penjanje", label: navigation.adults },
      { href: "/rodjendani", label: navigation.birthdays },
      { href: "/teambuilding", label: navigation.teambuilding },
      { href: "/kontakt", label: navigation.contact },
    ],
    secondary: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  };
  return navbarConfig;
};

export type NavigationItem = Awaited<ReturnType<typeof getNavigationItems>>;
