// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SensorLineSvg from '@airclass/icons-svg/lib/asn/SensorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SensorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SensorLineSvg}></AntdIcon>;
};

SensorLine.displayName = 'SensorLine';
SensorLine.inheritAttrs = false;
export default SensorLine;