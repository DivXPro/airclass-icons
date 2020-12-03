// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeynoteFillSvg from '@airclass/icons-svg/lib/asn/KeynoteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeynoteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeynoteFillSvg}></AntdIcon>;
};

KeynoteFill.displayName = 'KeynoteFill';
KeynoteFill.inheritAttrs = false;
export default KeynoteFill;