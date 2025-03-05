import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { features } from "@/config/contents"
// import { Icons } from "@/components/icons"
import { Icons } from "@/components/icons/index";

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
            const Icon = Icons[cards.icon || "blank"]
            return (
              <div
                key={cards.text}
                className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem]" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold sm:text-2xl md:text4xl ">
                    {cards.text}
                  </p>
                  {/* Split the subtext by newline and render each line as a bullet */}
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
        <div
          className="md:border"
          style={{
            backgroundImage: `url(${features.image})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>
    </section>
  )
}
