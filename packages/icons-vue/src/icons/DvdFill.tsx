// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DvdFillSvg from '@airclass/icons-svg/lib/asn/DvdFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DvdFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DvdFillSvg}></AntdIcon>;
};

DvdFill.displayName = 'DvdFill';
DvdFill.inheritAttrs = false;
export default DvdFill;