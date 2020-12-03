// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SensorFillSvg from '@airclass/icons-svg/lib/asn/SensorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SensorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SensorFillSvg}></AntdIcon>;
};

SensorFill.displayName = 'SensorFill';
SensorFill.inheritAttrs = false;
export default SensorFill;