// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OpenArmFillSvg from '@airclass/icons-svg/lib/asn/OpenArmFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenArmFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OpenArmFillSvg}></AntdIcon>;
};

OpenArmFill.displayName = 'OpenArmFill';
OpenArmFill.inheritAttrs = false;
export default OpenArmFill;