// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RepeatFillSvg from '@airclass/icons-svg/lib/asn/RepeatFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RepeatFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatFillSvg}></AntdIcon>;
};

RepeatFill.displayName = 'RepeatFill';
RepeatFill.inheritAttrs = false;
export default RepeatFill;