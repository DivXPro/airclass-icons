// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowLeftSLineSvg from '@airclass/icons-svg/lib/asn/ArrowLeftSLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftSLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftSLineSvg}></AntdIcon>;
};

ArrowLeftSLine.displayName = 'ArrowLeftSLine';
ArrowLeftSLine.inheritAttrs = false;
export default ArrowLeftSLine;