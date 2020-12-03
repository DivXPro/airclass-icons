// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RepeatOneFillSvg from '@airclass/icons-svg/lib/asn/RepeatOneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RepeatOneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatOneFillSvg}></AntdIcon>;
};

RepeatOneFill.displayName = 'RepeatOneFill';
RepeatOneFill.inheritAttrs = false;
export default RepeatOneFill;