// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScalesFillSvg from '@airclass/icons-svg/lib/asn/ScalesFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScalesFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScalesFillSvg}></AntdIcon>;
};

ScalesFill.displayName = 'ScalesFill';
ScalesFill.inheritAttrs = false;
export default ScalesFill;