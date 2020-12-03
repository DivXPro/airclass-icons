// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BallPenFillSvg from '@airclass/icons-svg/lib/asn/BallPenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BallPenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BallPenFillSvg}></AntdIcon>;
};

BallPenFill.displayName = 'BallPenFill';
BallPenFill.inheritAttrs = false;
export default BallPenFill;