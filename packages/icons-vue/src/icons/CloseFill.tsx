// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseFillSvg from '@airclass/icons-svg/lib/asn/CloseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseFillSvg}></AntdIcon>;
};

CloseFill.displayName = 'CloseFill';
CloseFill.inheritAttrs = false;
export default CloseFill;