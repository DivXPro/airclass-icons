// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RoadsterFillSvg from '@airclass/icons-svg/lib/asn/RoadsterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RoadsterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoadsterFillSvg}></AntdIcon>;
};

RoadsterFill.displayName = 'RoadsterFill';
RoadsterFill.inheritAttrs = false;
export default RoadsterFill;