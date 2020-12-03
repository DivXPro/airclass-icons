// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandHeartFillSvg from '@airclass/icons-svg/lib/asn/HandHeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandHeartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandHeartFillSvg}></AntdIcon>;
};

HandHeartFill.displayName = 'HandHeartFill';
HandHeartFill.inheritAttrs = false;
export default HandHeartFill;