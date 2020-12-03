// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BracesLineSvg from '@airclass/icons-svg/lib/asn/BracesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BracesLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BracesLineSvg}></AntdIcon>;
};

BracesLine.displayName = 'BracesLine';
BracesLine.inheritAttrs = false;
export default BracesLine;