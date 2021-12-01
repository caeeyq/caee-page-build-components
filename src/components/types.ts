import { mapValues } from 'lodash-es'

export interface CommonComponentProps {
  // actions
  actionType: string
  url: string
  /** 以下为样式属性 */
  // size
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  // border type
  borderStyle: string
  borderColor: string
  borderWidth: string
  borderRadius: string
  // shadow and opacity
  boxShadow: string
  opacity: string
  // position and x,y
  position: string
  left: string
  top: string
  right: string
}

export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: 'auto',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
}

export function transformObjToProps<T extends CommonComponentProps>(obj: T) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return mapValues(obj, (value: any) => {
    return {
      type: value.constructor,
      default: value,
    }
  })
}
