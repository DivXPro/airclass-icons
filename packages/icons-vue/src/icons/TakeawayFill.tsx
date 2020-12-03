// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TakeawayFillSvg from '@airclass/icons-svg/lib/asn/TakeawayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TakeawayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TakeawayFillSvg}></AntdIcon>;
};

TakeawayFill.displayName = 'TakeawayFill';
TakeawayFill.inheritAttrs = false;
export default TakeawayFill;