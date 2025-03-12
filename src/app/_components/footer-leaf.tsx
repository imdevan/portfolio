import React from 'react'

import SVG from 'react-inlinesvg'
import snakePlant from '_public/assets/icons/snake-plant.svg'
import monsteraDeliciosa from '_public/assets/icons/monstera-deliciosa.svg'
import monsteraObliqua from '_public/assets/icons/monstera-obliqua.svg'

import mdsl1 from '_public/assets/icons/leaves/mdsl1.svg'
import mdsl2 from '_public/assets/icons/leaves/mdsl2.svg'
import mosl1 from '_public/assets/icons/leaves/mosl1.svg'
import mosl2 from '_public/assets/icons/leaves/mosl2.svg'
import mosl3 from '_public/assets/icons/leaves/mosl3.svg'

const dividerSize = 12.5

const plants = [
  snakePlant.src,
  monsteraDeliciosa.src,
  mdsl1.src,
  mdsl2.src,
  mosl1.src,
  mosl2.src,
  mosl3.src,
]

const FooterLeaf = () => {
  const randomLeaf = () => Math.floor(Math.random() * plants.length)
  const leaf1 = randomLeaf()
  let leaf2 = randomLeaf()
  while (leaf2 === leaf1) {
    leaf2 = randomLeaf()
  }

  return (
    <div className="relative w-full flex justify-center items-center my-28 lg:my-32">
      <SVG
        src={plants[leaf1]}
        width={120}
        // className="absolute top-50 right-50 translate-y-[-50%]	translate-x-[50%]	z-0 current-color"
        title="React"
      />
      {/* <SVG src={plants[leaf1]} /> */}
    </div>
  )
}

export default FooterLeaf
