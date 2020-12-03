// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyboardBoxLineSvg from '@airclass/icons-svg/lib/asn/KeyboardBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyboardBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardBoxLineSvg}></AntdIcon>;
};

KeyboardBoxLine.displayName = 'KeyboardBoxLine';
KeyboardBoxLine.inheritAttrs = false;
export default KeyboardBoxLine;