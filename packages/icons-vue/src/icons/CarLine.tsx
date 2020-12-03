// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarLineSvg from '@airclass/icons-svg/lib/asn/CarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarLineSvg}></AntdIcon>;
};

CarLine.displayName = 'CarLine';
CarLine.inheritAttrs = false;
export default CarLine;