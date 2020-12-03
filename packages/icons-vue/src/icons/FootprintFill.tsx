// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FootprintFillSvg from '@airclass/icons-svg/lib/asn/FootprintFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FootprintFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FootprintFillSvg}></AntdIcon>;
};

FootprintFill.displayName = 'FootprintFill';
FootprintFill.inheritAttrs = false;
export default FootprintFill;