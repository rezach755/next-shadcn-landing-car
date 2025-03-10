import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.sarvestan-emdad.ir/",
            lastModified: new Date().toISOString(),
        },
    ];
}
