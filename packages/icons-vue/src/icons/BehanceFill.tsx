// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BehanceFillSvg from '@airclass/icons-svg/lib/asn/BehanceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceFillSvg}></AntdIcon>;
};

BehanceFill.displayName = 'BehanceFill';
BehanceFill.inheritAttrs = false;
export default BehanceFill;