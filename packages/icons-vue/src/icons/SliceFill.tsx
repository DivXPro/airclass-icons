// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SliceFillSvg from '@airclass/icons-svg/lib/asn/SliceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SliceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliceFillSvg}></AntdIcon>;
};

SliceFill.displayName = 'SliceFill';
SliceFill.inheritAttrs = false;
export default SliceFill;