// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BilibiliLineSvg from '@airclass/icons-svg/lib/asn/BilibiliLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilibiliLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BilibiliLineSvg}></AntdIcon>;
};

BilibiliLine.displayName = 'BilibiliLine';
BilibiliLine.inheritAttrs = false;
export default BilibiliLine;