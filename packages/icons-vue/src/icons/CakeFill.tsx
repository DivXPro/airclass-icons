// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CakeFillSvg from '@airclass/icons-svg/lib/asn/CakeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CakeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeFillSvg}></AntdIcon>;
};

CakeFill.displayName = 'CakeFill';
CakeFill.inheritAttrs = false;
export default CakeFill;