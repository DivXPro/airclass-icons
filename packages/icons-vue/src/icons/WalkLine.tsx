// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalkLineSvg from '@airclass/icons-svg/lib/asn/WalkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalkLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalkLineSvg}></AntdIcon>;
};

WalkLine.displayName = 'WalkLine';
WalkLine.inheritAttrs = false;
export default WalkLine;