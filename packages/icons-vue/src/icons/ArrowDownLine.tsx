// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowDownLineSvg from '@airclass/icons-svg/lib/asn/ArrowDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownLineSvg}></AntdIcon>;
};

ArrowDownLine.displayName = 'ArrowDownLine';
ArrowDownLine.inheritAttrs = false;
export default ArrowDownLine;