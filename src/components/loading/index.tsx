import {ActivityIndicator} from 'react-native'
import {styles} from './styles'
import {colors} from '@/styles/theme'

export default function Loading() {
  return (
    <ActivityIndicator 
      style={styles.container}
      size='large'
      color={colors.green.base}
    />
  )
}