import React from 'react'
import { Svg, Path } from 'react-native-svg'

export const Icon = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'back':
      return (
        <Svg viewBox='0 0 1024 1024' width={size} height={size} {...rest}>
          <Path
            d='M402.816 512L795.52 134.912a76.8 76.8 0 0 0 0-111.616 84.736 84.736 0 0 0-116.224 0L228.48 456.192a76.8 76.8 0 0 0 0 111.616l450.56 432.896a84.736 84.736 0 0 0 116.224 0 76.8 76.8 0 0 0 0-111.616z'
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      )
    case 'pause':
      return (
        <Svg viewBox='0 0 1024 1024' width={size} height={size} {...rest}>
          <Path
            d='M73.225643 0m129.382487 0l0.594127 0q129.382487 0 129.382486 129.382487l0 765.235026q0 129.382487-129.382486 129.382487l-0.594127 0q-129.382487 0-129.382487-129.382487l0-765.235026q0-129.382487 129.382487-129.382487Z'
            fill={getIconColor(color, 0, '#333333')}
          />
          <Path
            d='M655.241175 0m129.382487 0l0.594126 0q129.382487 0 129.382487 129.382487l0 765.235026q0 129.382487-129.382487 129.382487l-0.594126 0q-129.382487 0-129.382487-129.382487l0-765.235026q0-129.382487 129.382487-129.382487Z'
            fill={getIconColor(color, 1, '#333333')}
          />
        </Svg>
      )
    case 'play':
      return (
        <Svg viewBox='0 0 1024 1024' width={size} height={size} {...rest}>
          <Path
            d='M849.92 618.66666666L315.73333333 953.17333333c-63.14666667 39.25333333-148.48 20.48-187.73333333-42.66666667-13.65333333-22.18666667-20.48-46.08-20.48-71.68V168.10666666c0-75.09333333 61.44-136.53333333 136.53333333-136.53333333 25.6 0 51.2 6.82666667 71.68 20.48l534.18666667 334.50666667c63.14666667 39.25333333 83.62666667 124.58666667 42.66666667 187.73333333-10.24 18.77333333-23.89333333 32.42666667-42.66666667 44.37333333z'
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      )
    case 'full':
      return (
        <Svg viewBox='0 0 1024 1024' width={size} height={size} {...rest}>
          <Path
            d='M147.91111147 147.91111147v204.8a68.26666667 68.26666667 0 0 1-136.53333334 0v-273.06666667A68.26666667 68.26666667 0 0 1 79.6444448 11.37777813h273.06666667a68.26666667 68.26666667 0 0 1 0 136.53333334H147.91111147zM876.08888853 876.08888853v-204.8a68.26666667 68.26666667 0 0 1 136.53333334 0v273.06666667a68.26666667 68.26666667 0 0 1-68.26666667 68.26666667h-273.06666667a68.26666667 68.26666667 0 0 1 0-136.53333334H876.08888853z'
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      )
  }

  return null
}

Icon.defaultProps = {
  size: 18
}

const getIconColor = (color, index, defaultColor) => {
  return color ? (typeof color === 'string' ? color : color[index] || defaultColor) : defaultColor
}

export default Icon
