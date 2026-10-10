// FOOTER - dark block at the bottom of every page: address, social links, quick links.
// Icons come from react-icons (https://react-icons.github.io/react-icons/).
import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useLang } from "../i18n/LanguageContext";
export default function Footer() {
  // LANGUAGE: t("key") returns text in the chosen language (src/i18n/translations.js).
  const { t } = useLang();
  // Hover style for the Quick Links.
  const linkStyle = "hover:text-blue-800 transition-colors duration-300";

  return (
    <div className="bg-[#0B1F3A] text-white px-4 py-8 rounded-t-2xl">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Address */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">{t("footer.address")}</h1>

          {/*
            EDIT HERE: business name.
          */}
          <p className="font-semibold text-lg">{t("brand")}</p>

          {/*
            EDIT HERE: postal address (<br /> = new line). Address also appears in Home.jsx and Contact.jsx.
          */}
          <p className="leading-relaxed text-gray-300">
            {t("footer.addr1")} 
            <br />
            <span className="block md:inline">{t("footer.addr2")}</span>
            <br />
            {t("footer.addr3")}
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{t("footer.social")}</h1>

          <ul className="space-y-4">
            {/*
              PHONE link. tel:+91... is the number a phone dials; the visible text is below it.
              Phone number appears in: Footer.jsx, Home.jsx, ProductDetail.jsx, Contact.jsx - change all.
            */}
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-red-400 text-lg" />

              <a
                href="tel:+919827003016"
                className="hover:text-red-400 transition-colors"
              >
                +91 9827003016
              </a>
            </li>
            {/*
              EMAIL link - change the address after mailto: and the visible text.
            */}
            <li className="flex items-center justify-center md:justify-start gap-3">
              <IoMail className="hover:text-red-400 text-2xl" />
              <a href="mailto:hpclcfasatna@gmail.com">{t("footer.email")}</a>
            </li>

            {/*
              WHATSAPP link - wa.me/<country code + number, no + or spaces>.
            */}
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaSquareWhatsapp className="text-green-400 text-2xl" />

              <a
                href="https://wa.me/919827003016"
                className="hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >{t("footer.whatsapp")}</a>
            </li>

            {/*
              INSTAGRAM link - replace the profile URL.
            */}
            <li className="flex items-center justify-center md:justify-start gap-3">
              <SlSocialInstagram className="text-pink-400 text-2xl" />

              <a
                href="https://www.instagram.com/hpclcfasatna/"
                className="hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            {/*
              TWITTER link - replace the profile URL.
            */}
            <li className="flex items-center justify-center md:justify-start gap-3">
              <TiSocialTwitter className="text-blue-400 text-2xl" />

              <a
                href="https://twitter.com/cfa_hp_satna"
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{t("footer.quick")}</h1>

          {/*
            Quick links - to="..." must match routes in App.jsx.
          */}
          <ul className="space-y-3">
            <li>
              <Link to="/" className={linkStyle}>{t("nav.home")}</Link>
            </li>

            <li>
              <Link to="/products" className={linkStyle}>{t("nav.products")}</Link>
            </li>

            <li>
              <Link to="/about" className={linkStyle}>{t("nav.about")}</Link>
            </li>

            <li>
              <Link to="/contact" className={linkStyle}>{t("nav.contact")}</Link>
            </li>

            <li>
              <Link to="/achievements" className={linkStyle}>{t("nav.achievements")}</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      {/*
        EDIT HERE: copyright year and bottom phone number.
      */}
      <footer className="border-t border-gray-600 mt-10 pt-6 text-center text-sm md:text-base text-gray-300">
        <p>{t("footer.rights")}</p>

        <p className="mt-2">
          {t("footer.contactUs")}
          <a href="tel:+919827003016" className="ml-2 hover:text-yellow-400">
            +91 9827003016
          </a>
        </p>
      </footer>
    </div>
  );
}
