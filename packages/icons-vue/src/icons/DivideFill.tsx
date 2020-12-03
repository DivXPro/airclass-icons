// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DivideFillSvg from '@airclass/icons-svg/lib/asn/DivideFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DivideFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DivideFillSvg}></AntdIcon>;
};

DivideFill.displayName = 'DivideFill';
DivideFill.inheritAttrs = false;
export default DivideFill;