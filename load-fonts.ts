import { loadFont } from "@remotion/fonts"
import { staticFile } from "remotion"


export const KoPubFonts = [
  "KoPub-Batang-Bold",
  "KoPub-Batang-Light",
  "KoPub-Batang-Medium",
  "KoPub-Dotum-Bold",
  "KoPub-Dotum-Light",
  "KoPub-Dotum-Medium",
]

export const loadKoPubFonts = () => {
  KoPubFonts.forEach(f => {
    loadFont({
      family: f,
      url: staticFile(`fonts/${f}.ttf`)
    })
  })
}