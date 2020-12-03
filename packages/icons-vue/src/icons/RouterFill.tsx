// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RouterFillSvg from '@airclass/icons-svg/lib/asn/RouterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RouterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouterFillSvg}></AntdIcon>;
};

RouterFill.displayName = 'RouterFill';
RouterFill.inheritAttrs = false;
export default RouterFill;