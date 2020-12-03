// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrafficLightLineSvg from '@airclass/icons-svg/lib/asn/TrafficLightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrafficLightLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrafficLightLineSvg}></AntdIcon>;
};

TrafficLightLine.displayName = 'TrafficLightLine';
TrafficLightLine.inheritAttrs = false;
export default TrafficLightLine;