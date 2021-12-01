import { without } from 'lodash-es'
import { CommonComponentProps, commonDefaultProps, transformObjToProps } from '../types'

export interface ImageComponentProps extends CommonComponentProps {
  src: string
}

export const imageDefaultObj: ImageComponentProps = {
  src: 'https://dummyimage.com/600x400/000/fff',
  ...commonDefaultProps,
}

export const imageDefaultProps = transformObjToProps(imageDefaultObj)

export const imageStyleProps = without(Object.keys(imageDefaultObj), 'src')
