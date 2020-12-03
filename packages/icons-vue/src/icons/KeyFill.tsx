// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyFillSvg from '@airclass/icons-svg/lib/asn/KeyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyFillSvg}></AntdIcon>;
};

KeyFill.displayName = 'KeyFill';
KeyFill.inheritAttrs = false;
export default KeyFill;