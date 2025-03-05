import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroHeader } from "@/config/contents";

export default function HeroHeader() {
  return (
    <>
      <section className="container flex flex-col gap-4 pb-6 pt-2 text-center lg:items-center lg:gap-6 lg:py-10">
        <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
          <div className="space-y-4 bg-slate-50 dark:bg-slate-900 rounded-lg p-3 w-full">
            <h1 className="text-2xl font-semibold lg:text-4xl">{heroHeader.header}</h1>
            {/* <h1 className="text-xs font-bold lg:text-sm">{heroHeader.headertag}</h1> */}
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">

            <h2 className="text-xl font-bold lg:text-2xl whitespace-nowrap">
              شماره تماس ها :
            </h2>
            <div className="flex items-center justify-center gap-4 mt-2">
              {heroHeader.tell.split("،").map((phone, index) => (
                <a 
                  key={index} 
                  href={`tel:${phone.trim()}`} 
                  className="text-blue-600 hover:underline px-4 py-2 border border-blue-500 rounded-lg"
                >
                  {phone.trim()}
                </a>
              ))}
            </div>
            </div>
            {/* Clickable phone numbers */}

            <h3 className="text-sm font-light text-muted-foreground lg:text-lg">{heroHeader.subheader}</h3>
          </div>
        </div>
        
        {heroHeader.image && (
          <div className="flex flex-1 justify-center lg:justify-end">
            <Image className="w-full" src="/car1.jpg" width={500} height={400} alt="Header image" />
          </div>
        )}
      </section>
    </>
  );
}
