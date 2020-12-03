// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SimCardFillSvg from '@airclass/icons-svg/lib/asn/SimCardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SimCardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimCardFillSvg}></AntdIcon>;
};

SimCardFill.displayName = 'SimCardFill';
SimCardFill.inheritAttrs = false;
export default SimCardFill;