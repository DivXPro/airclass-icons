// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RocketFillSvg from '@airclass/icons-svg/lib/asn/RocketFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RocketFillSvg}></AntdIcon>;
};

RocketFill.displayName = 'RocketFill';
RocketFill.inheritAttrs = false;
export default RocketFill;