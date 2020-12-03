// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RunFillSvg from '@airclass/icons-svg/lib/asn/RunFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RunFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RunFillSvg}></AntdIcon>;
};

RunFill.displayName = 'RunFill';
RunFill.inheritAttrs = false;
export default RunFill;