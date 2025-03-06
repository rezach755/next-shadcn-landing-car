import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import { heroHeader } from "@/config/contents"

export default function Footer() {
  return (
    <footer className="mt-auto" id="footer">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="mb-2 text-base font-semibold sm:mb-0 sm:text-2xl">
              {siteConfig.name}
            </h1>
          </Link>
          <ul className="mb-6 flex flex-col items-center text-primary opacity-60 sm:mb-0 sm:flex-row">
            {navLinks.map((link) => (
              <li key={link.route} className="mb-2 sm:mb-0">
                <Link href={link.path} className="mr-0 hover:underline sm:mr-6">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="flex flex-wrap items-center text-sm font-semibold text-muted-foreground sm:text-center sm:text-2xl">
            {heroHeader.tell.split("،").map((phone, index) => (
              <a
                key={index}
                href={`tel:${phone.trim()}`}
                className="rounded-lg px-4 py-1 text-blue-600 hover:underline"
              >
                {phone.trim()}
              </a>
            ))}
          </span>
          <span className="text-sm font-semibold sm:text-2xl">
            امداد خودرو سروستان جوکار
          </span>
        </div>
      </div>
    </footer>
  )
}
