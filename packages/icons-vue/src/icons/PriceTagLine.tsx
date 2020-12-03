// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PriceTagLineSvg from '@airclass/icons-svg/lib/asn/PriceTagLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PriceTagLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PriceTagLineSvg}></AntdIcon>;
};

PriceTagLine.displayName = 'PriceTagLine';
PriceTagLine.inheritAttrs = false;
export default PriceTagLine;