import { getDictionary } from "@/utils/dictionary";

export const getFooterItems = async () => {
  const { navigation } = await getDictionary();
  const footer = {
    company: [
      { href: "/o-nama", label: navigation.about },
      { href: "/kontakt", label: navigation.contact },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
    activity: [
      { href: "/odrasli-penjanje", label: navigation.adults },
      { href: "/djeca-penjanje", label: navigation.children },
      { href: "/rodjendani", label: navigation.birthdays },
      { href: "/teambuilding", label: "Teambuilding" },
    ],
    contact: {
      name: navigation.contact,
      phone: "+387 65 779 027",
      email: "extremebl@gmail.com",
      location: "Bulevar vojvode P. Bojovića 1, Banja Luka 78000",
    },
  };
  return footer;
};
