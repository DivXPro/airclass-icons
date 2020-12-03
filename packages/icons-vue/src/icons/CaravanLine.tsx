// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaravanLineSvg from '@airclass/icons-svg/lib/asn/CaravanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaravanLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaravanLineSvg}></AntdIcon>;
};

CaravanLine.displayName = 'CaravanLine';
CaravanLine.inheritAttrs = false;
export default CaravanLine;