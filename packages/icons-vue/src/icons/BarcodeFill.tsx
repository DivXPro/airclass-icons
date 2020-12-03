// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarcodeFillSvg from '@airclass/icons-svg/lib/asn/BarcodeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeFillSvg}></AntdIcon>;
};

BarcodeFill.displayName = 'BarcodeFill';
BarcodeFill.inheritAttrs = false;
export default BarcodeFill;