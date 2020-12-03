// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowDropDownLineSvg from '@airclass/icons-svg/lib/asn/ArrowDropDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDropDownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDropDownLineSvg}></AntdIcon>;
};

ArrowDropDownLine.displayName = 'ArrowDropDownLine';
ArrowDropDownLine.inheritAttrs = false;
export default ArrowDropDownLine;