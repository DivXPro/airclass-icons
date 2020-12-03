// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BusLineSvg from '@airclass/icons-svg/lib/asn/BusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BusLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusLineSvg}></AntdIcon>;
};

BusLine.displayName = 'BusLine';
BusLine.inheritAttrs = false;
export default BusLine;