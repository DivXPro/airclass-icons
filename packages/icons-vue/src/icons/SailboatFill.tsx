// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SailboatFillSvg from '@airclass/icons-svg/lib/asn/SailboatFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SailboatFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SailboatFillSvg}></AntdIcon>;
};

SailboatFill.displayName = 'SailboatFill';
SailboatFill.inheritAttrs = false;
export default SailboatFill;