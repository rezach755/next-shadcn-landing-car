import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"

export default function HeroHeader() {
  return (
    <>
      <section className="container flex flex-col gap-4 pb-6 pt-2 text-center lg:items-center lg:gap-6 lg:py-10">
        <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
          <div className="w-full space-y-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
            <h1 className="text-center text-base font-semibold sm:text-2xl lg:text-4xl">
              {heroHeader.header}
            </h1>
            {/* <h1 className="text-xs font-bold lg:text-sm">{heroHeader.headertag}</h1> */}

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <h2 className="whitespace-nowrap text-base font-semibold sm:text-xl lg:text-2xl">
              {heroHeader.tellText}
              </h2>
              <div className="mt-2 flex flex-wrap  items-center justify-center gap-2 text-base font-semibold sm:text-xl">
                {heroHeader.tell.split("،").map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.trim()}`}
                    className="rounded-lg border border-blue-500 px-4 py-2 text-blue-600 hover:underline"
                  >
                    {phone.trim()}
                  </a>
                ))}
              </div>
            </div>
            {/* Clickable phone numbers */}

            <h3 className="text-center text-sm font-light text-muted-foreground lg:text-lg">
              {heroHeader.subheader}
            </h3>
          </div>
        </div>

        {heroHeader.image && (
          <div className="flex flex-1 justify-center lg:justify-end">
            <Image
              className="w-full"
              src="/car1.jpg"
              width={500}
              height={400}
              alt="Header image"
            />
          </div>
        )}
      </section>
    </>
  )
}
