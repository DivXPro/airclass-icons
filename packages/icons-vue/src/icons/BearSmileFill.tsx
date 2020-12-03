// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BearSmileFillSvg from '@airclass/icons-svg/lib/asn/BearSmileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BearSmileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BearSmileFillSvg}></AntdIcon>;
};

BearSmileFill.displayName = 'BearSmileFill';
BearSmileFill.inheritAttrs = false;
export default BearSmileFill;