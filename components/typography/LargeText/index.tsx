import cx from 'classnames'
import { LargeTextComponentType, LargeTextProps } from './types'
import styles from './styles.module.css'

const LargeText: LargeTextComponentType = ({
  color,
  children,
}: LargeTextProps) => {
  return (
    <span
      className={cx(styles.text, {
        [styles.textprimarycolor]: color === 'primary',
        [styles.textsecondarycolor]: color === 'secondary',
      })}
    >
      {children}
    </span>
  )
}

export default LargeText
