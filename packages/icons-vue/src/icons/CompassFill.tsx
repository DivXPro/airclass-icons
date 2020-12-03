// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassFillSvg from '@airclass/icons-svg/lib/asn/CompassFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassFillSvg}></AntdIcon>;
};

CompassFill.displayName = 'CompassFill';
CompassFill.inheritAttrs = false;
export default CompassFill;