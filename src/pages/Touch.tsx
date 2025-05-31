import React from "react";
import {
  IconMessageCircleUser,
  IconMailOpened,
  IconPhone,
  IconQuestionMark,
  IconBrandMeta,
  IconBrandBehance,
  IconBrandYoutubeFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";

type Item = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

const contactItems: Item[] = [
  {
    icon: <IconMessageCircleUser size={20} />,
    text: "Live Chat",
    href: "#",
  },
  {
    icon: <IconMailOpened size={20} />,
    text: "Email us",
    href: "mailto:demo@demo.com",
  },
  {
    icon: <IconPhone />,
    text: "+000 123 456 78",
    href: "tel:00012345678",
  },
  {
    icon: <IconQuestionMark />,
    text: "FAQ",
    href: "#",
  },
];

const socialLinks: Item[] = [
  {
    text: "Facebook",
    icon: <IconBrandMeta />,
    href: "#",
  },
  {
    text: "Behance",
    icon: <IconBrandBehance />,
    href: "#",
  },
  {
    text: "YouTube",
    icon: <IconBrandYoutubeFilled />,
    href: "#",
  },
  {
    text: "Instagram",
    icon: <IconBrandInstagram />,
    href: "#",
  },
];

const Touch = () => {
  return (
    <div className="bg-footer w-full h-[222px] flex justify-between items-center p-20  tablet_touch:flex-row " >
      {/* Left */}
      <div className="flex items-center gap-4 flex-wrap">
        <h2 className="text-3xl font-semibold leading-[30px] whitespace-nowrap pr-10">
          GET IN TOUCH
        </h2>

        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex items-center gap-1 px-4 py-2 bg-white text-neutral-700 shadow-sm hover:bg-black hover:text-white rounded-full transition font-inter text-[14px] "
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center justify-around gap-4">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="p-[14px] bg-white border-[1px] rounded-xl border-black hover:bg-neutral-800  hover:text-lime-300 transition-colors"
          >
            <span className="transition-all duration-300">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Touch;
