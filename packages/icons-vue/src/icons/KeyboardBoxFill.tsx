// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyboardBoxFillSvg from '@airclass/icons-svg/lib/asn/KeyboardBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyboardBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardBoxFillSvg}></AntdIcon>;
};

KeyboardBoxFill.displayName = 'KeyboardBoxFill';
KeyboardBoxFill.inheritAttrs = false;
export default KeyboardBoxFill;