// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShuffleFillSvg from '@airclass/icons-svg/lib/asn/ShuffleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShuffleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleFillSvg}></AntdIcon>;
};

ShuffleFill.displayName = 'ShuffleFill';
ShuffleFill.inheritAttrs = false;
export default ShuffleFill;