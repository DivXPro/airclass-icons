// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GlobalFillSvg from '@airclass/icons-svg/lib/asn/GlobalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalFillSvg}></AntdIcon>;
};

GlobalFill.displayName = 'GlobalFill';
GlobalFill.inheritAttrs = false;
export default GlobalFill;