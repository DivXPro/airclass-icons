// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BracketsLineSvg from '@airclass/icons-svg/lib/asn/BracketsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BracketsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BracketsLineSvg}></AntdIcon>;
};

BracketsLine.displayName = 'BracketsLine';
BracketsLine.inheritAttrs = false;
export default BracketsLine;