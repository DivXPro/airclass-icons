// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarWashingLineSvg from '@airclass/icons-svg/lib/asn/CarWashingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarWashingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarWashingLineSvg}></AntdIcon>;
};

CarWashingLine.displayName = 'CarWashingLine';
CarWashingLine.inheritAttrs = false;
export default CarWashingLine;