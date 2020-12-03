// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AtFillSvg from '@airclass/icons-svg/lib/asn/AtFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AtFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AtFillSvg}></AntdIcon>;
};

AtFill.displayName = 'AtFill';
AtFill.inheritAttrs = false;
export default AtFill;