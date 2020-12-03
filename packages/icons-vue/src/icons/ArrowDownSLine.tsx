// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowDownSLineSvg from '@airclass/icons-svg/lib/asn/ArrowDownSLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDownSLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownSLineSvg}></AntdIcon>;
};

ArrowDownSLine.displayName = 'ArrowDownSLine';
ArrowDownSLine.inheritAttrs = false;
export default ArrowDownSLine;