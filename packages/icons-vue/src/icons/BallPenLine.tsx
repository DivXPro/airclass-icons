// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BallPenLineSvg from '@airclass/icons-svg/lib/asn/BallPenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BallPenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BallPenLineSvg}></AntdIcon>;
};

BallPenLine.displayName = 'BallPenLine';
BallPenLine.inheritAttrs = false;
export default BallPenLine;