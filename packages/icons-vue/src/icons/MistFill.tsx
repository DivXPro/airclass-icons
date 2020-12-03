// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MistFillSvg from '@airclass/icons-svg/lib/asn/MistFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MistFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MistFillSvg}></AntdIcon>;
};

MistFill.displayName = 'MistFill';
MistFill.inheritAttrs = false;
export default MistFill;