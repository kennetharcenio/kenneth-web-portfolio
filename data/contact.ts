export type ContactItem = {
  icon: string;
  label: string;
  href: string;
};

export const contact: ContactItem[] = [
  {
    icon: "✉",
    label: "arceniokas@gmail.com",
    href: "mailto:arceniokas@gmail.com",
  },
  {
    icon: "☎",
    label: "+63 995 353 4351",
    href: "tel:+639953534351",
  },
  {
    icon: "◎",
    label: "Quezon City, Philippines (UTC+8)",
    href: "https://www.google.com/maps/place/Quezon+City",
  },
  {
    icon: "⌥",
    label: "GitHub",
    href: "https://github.com/kennetharcenio",
  },
  {
    icon: "⬡",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kenneth-audrey-arcenio-2986aa106",
  },
];
