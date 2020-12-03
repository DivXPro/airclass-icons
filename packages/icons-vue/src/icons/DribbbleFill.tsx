// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DribbbleFillSvg from '@airclass/icons-svg/lib/asn/DribbbleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DribbbleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DribbbleFillSvg}></AntdIcon>;
};

DribbbleFill.displayName = 'DribbbleFill';
DribbbleFill.inheritAttrs = false;
export default DribbbleFill;