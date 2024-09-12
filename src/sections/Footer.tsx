import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/riid.esign?igsh=MWwwMzVsdzdqbWlqYQ==",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nur-ika-aini-oktavia-420a79215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full z-10"> {/* Ubah z-index menjadi 10 */}
      {/* Gradient meluas ke kanan dan kiri */}
      <div className="absolute h-[400px] w-full bottom-0 left-0 bg-gradient-to-t from-emerald-300/20 to-transparent z-0"></div> {/* Ubah z-index menjadi 0 */}

      <div className="w-full border-t border-white/15">
        <div className="container mx-auto py-6 text-sm flex justify-between items-center gap-8 w-full">
          {/* Tulisan di sisi kiri */}
          <div className="text-white/40 w-full text-left">
            &copy; 2024 Nur Ika Aini. All rights reserved.
          </div>

          {/* Media sosial di sisi kanan */}
          <nav className="flex gap-8 w-full justify-end">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                style={{ zIndex: 10 }} // Tambahkan z-index pada link
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
