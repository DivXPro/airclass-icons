// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowLeftUpLineSvg from '@airclass/icons-svg/lib/asn/ArrowLeftUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftUpLineSvg}></AntdIcon>;
};

ArrowLeftUpLine.displayName = 'ArrowLeftUpLine';
ArrowLeftUpLine.inheritAttrs = false;
export default ArrowLeftUpLine;