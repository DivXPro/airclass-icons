// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassesFillSvg from '@airclass/icons-svg/lib/asn/CompassesFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassesFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassesFillSvg}></AntdIcon>;
};

CompassesFill.displayName = 'CompassesFill';
CompassesFill.inheritAttrs = false;
export default CompassesFill;