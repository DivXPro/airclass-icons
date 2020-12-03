// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EdgeFillSvg from '@airclass/icons-svg/lib/asn/EdgeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EdgeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EdgeFillSvg}></AntdIcon>;
};

EdgeFill.displayName = 'EdgeFill';
EdgeFill.inheritAttrs = false;
export default EdgeFill;