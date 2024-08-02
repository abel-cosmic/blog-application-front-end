"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-white  px-12 gap-2 py-3 flex md:flex-row flex-col items-center justify-center">
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/abel-cosmic"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition"
          prefetch={false}
        >
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/abel-shibabaw-4b3b6125a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbMi0SsifS2mpkxNgA2veeg%3D%3D"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition"
          prefetch={false}
        >
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://t.me/abel_cosmic"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition"
          prefetch={false}
        >
          <Send className="w-5 h-5" />
          <span className="sr-only">Telegram</span>
        </Link>
        <Link
          href="abelshibabaw@gmail.com"
          className="text-muted-foreground hover:text-primary transition"
          prefetch={false}
        >
          <Mail className="w-5 h-5" />
          <span className="sr-only">Contact</span>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
