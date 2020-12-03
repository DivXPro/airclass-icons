// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InkBottleFillSvg from '@airclass/icons-svg/lib/asn/InkBottleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InkBottleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InkBottleFillSvg}></AntdIcon>;
};

InkBottleFill.displayName = 'InkBottleFill';
InkBottleFill.inheritAttrs = false;
export default InkBottleFill;