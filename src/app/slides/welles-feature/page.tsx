import { SlideStage } from "@/components/SlideStage"

import "./welles-feature.css"

const features = [
  {
    num: "01",
    name: "Record",
    desc: "Capture your screen at native quality, no setup.",
  },
  {
    num: "02",
    name: "Polish",
    desc: "An AI editor cuts the dead air, captions, and tightens.",
  },
  {
    num: "03",
    name: "Share",
    desc: "Send anywhere without ever leaving the app.",
  },
]

export default function WellesFeatureSlide() {
  return (
    <SlideStage>
      <div className="welles-feature-content">
        <p className="welles-feature-eyebrow">welles</p>
        <ul className="welles-feature-list">
          {features.map((f, i) => (
            <li key={f.num} className={`welles-feature-item welles-feature-item--${i + 1}`}>
              <span className="welles-feature-num">{f.num}</span>
              <span className="welles-feature-name">{f.name}</span>
              <p className="welles-feature-desc">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SlideStage>
  )
}
