// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScissorsFillSvg from '@airclass/icons-svg/lib/asn/ScissorsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScissorsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorsFillSvg}></AntdIcon>;
};

ScissorsFill.displayName = 'ScissorsFill';
ScissorsFill.inheritAttrs = false;
export default ScissorsFill;