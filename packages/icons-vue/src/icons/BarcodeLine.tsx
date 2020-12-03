// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarcodeLineSvg from '@airclass/icons-svg/lib/asn/BarcodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeLineSvg}></AntdIcon>;
};

BarcodeLine.displayName = 'BarcodeLine';
BarcodeLine.inheritAttrs = false;
export default BarcodeLine;