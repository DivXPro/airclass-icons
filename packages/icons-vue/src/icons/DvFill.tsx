// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DvFillSvg from '@airclass/icons-svg/lib/asn/DvFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DvFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DvFillSvg}></AntdIcon>;
};

DvFill.displayName = 'DvFill';
DvFill.inheritAttrs = false;
export default DvFill;