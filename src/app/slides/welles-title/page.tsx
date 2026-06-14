import { SlideStage } from "@/components/SlideStage"

import "./welles-title.css"

export default function WellesTitleSlide() {
  return (
    <SlideStage>
      <div className="welles-title-bg" />
      <div className="welles-title-content">
        <p className="welles-title-eyebrow">welles</p>
        <h1 className="welles-title-headline">
          Screen recordings <em>that edit themselves.</em>
        </h1>
      </div>
    </SlideStage>
  )
}
