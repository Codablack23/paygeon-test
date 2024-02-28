import { MetadataRoute } from "next";

export default function manifest():MetadataRoute.Manifest{
    return{
        name: "Paygeon Web App",
        short_name: "Paygeon",
        description: "Paygeon Platform Progressive Web App",
        start_url: "/dashboard",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0052FF",
        icons: [
          {
            src: "/paygeon-icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/paygeon-icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/paygeon-icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/paygeon-icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
    }
}