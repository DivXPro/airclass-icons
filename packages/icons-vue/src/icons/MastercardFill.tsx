// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MastercardFillSvg from '@airclass/icons-svg/lib/asn/MastercardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MastercardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MastercardFillSvg}></AntdIcon>;
};

MastercardFill.displayName = 'MastercardFill';
MastercardFill.inheritAttrs = false;
export default MastercardFill;