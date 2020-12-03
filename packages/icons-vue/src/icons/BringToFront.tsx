// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BringToFrontSvg from '@airclass/icons-svg/lib/asn/BringToFront';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BringToFront = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BringToFrontSvg}></AntdIcon>;
};

BringToFront.displayName = 'BringToFront';
BringToFront.inheritAttrs = false;
export default BringToFront;