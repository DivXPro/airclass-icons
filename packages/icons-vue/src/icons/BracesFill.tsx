// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BracesFillSvg from '@airclass/icons-svg/lib/asn/BracesFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BracesFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BracesFillSvg}></AntdIcon>;
};

BracesFill.displayName = 'BracesFill';
BracesFill.inheritAttrs = false;
export default BracesFill;