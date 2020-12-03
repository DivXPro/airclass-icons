// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrafficLightFillSvg from '@airclass/icons-svg/lib/asn/TrafficLightFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrafficLightFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrafficLightFillSvg}></AntdIcon>;
};

TrafficLightFill.displayName = 'TrafficLightFill';
TrafficLightFill.inheritAttrs = false;
export default TrafficLightFill;