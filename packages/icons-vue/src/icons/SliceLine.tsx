// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SliceLineSvg from '@airclass/icons-svg/lib/asn/SliceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SliceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliceLineSvg}></AntdIcon>;
};

SliceLine.displayName = 'SliceLine';
SliceLine.inheritAttrs = false;
export default SliceLine;