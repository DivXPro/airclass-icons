// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestartFillSvg from '@airclass/icons-svg/lib/asn/RestartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestartFillSvg}></AntdIcon>;
};

RestartFill.displayName = 'RestartFill';
RestartFill.inheritAttrs = false;
export default RestartFill;