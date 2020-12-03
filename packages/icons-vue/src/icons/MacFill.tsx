// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MacFillSvg from '@airclass/icons-svg/lib/asn/MacFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MacFillSvg}></AntdIcon>;
};

MacFill.displayName = 'MacFill';
MacFill.inheritAttrs = false;
export default MacFill;