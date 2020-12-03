// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyboardFillSvg from '@airclass/icons-svg/lib/asn/KeyboardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyboardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardFillSvg}></AntdIcon>;
};

KeyboardFill.displayName = 'KeyboardFill';
KeyboardFill.inheritAttrs = false;
export default KeyboardFill;