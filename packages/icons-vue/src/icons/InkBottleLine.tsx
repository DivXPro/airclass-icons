// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InkBottleLineSvg from '@airclass/icons-svg/lib/asn/InkBottleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InkBottleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InkBottleLineSvg}></AntdIcon>;
};

InkBottleLine.displayName = 'InkBottleLine';
InkBottleLine.inheritAttrs = false;
export default InkBottleLine;