import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { features } from "@/config/contents"
import { Icons } from "@/components/icons/index"

export default function Features() {
  return (
    <section className="container space-y-8 py-12 lg:py-20" id="features">
      {features.header || features.subheader ? (
        <HeadingText
          subtext={features.subheader}
          className="text-center text-base font-semibold sm:text-2xl"
        >
          {features.header}
        </HeadingText>
      ) : null}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {features.content.map((cards) => {
            // Define the valid keys for Icons mapping.
            type IconKey = keyof typeof Icons
            // If cards.icon is not provided or doesn't match, fallback to a default key (e.g., "fileSearch")
            const iconKey: IconKey = (cards.icon as IconKey) || "fileSearch"
            const Icon = Icons[iconKey]
            return (
              <div
                key={cards.text}
                className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem]" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold sm:text-2xl md:text-4xl">
                    {cards.text}
                  </p>
                  <ul className="list-disc pl-5 font-light text-muted-foreground md:text-lg">
                    {cards.subtext
                      .split("\n")
                      .map((line, i) =>
                        line.trim() ? <li key={i}>{line.trim()}</li> : null
                      )}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
