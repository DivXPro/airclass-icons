// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RoadMapFillSvg from '@airclass/icons-svg/lib/asn/RoadMapFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RoadMapFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoadMapFillSvg}></AntdIcon>;
};

RoadMapFill.displayName = 'RoadMapFill';
RoadMapFill.inheritAttrs = false;
export default RoadMapFill;