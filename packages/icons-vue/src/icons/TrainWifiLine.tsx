// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrainWifiLineSvg from '@airclass/icons-svg/lib/asn/TrainWifiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrainWifiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrainWifiLineSvg}></AntdIcon>;
};

TrainWifiLine.displayName = 'TrainWifiLine';
TrainWifiLine.inheritAttrs = false;
export default TrainWifiLine;