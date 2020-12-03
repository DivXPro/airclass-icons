// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EBike2LineSvg from '@airclass/icons-svg/lib/asn/EBike2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EBike2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EBike2LineSvg}></AntdIcon>;
};

EBike2Line.displayName = 'EBike2Line';
EBike2Line.inheritAttrs = false;
export default EBike2Line;