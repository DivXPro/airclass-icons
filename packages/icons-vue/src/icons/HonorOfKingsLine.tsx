// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HonorOfKingsLineSvg from '@airclass/icons-svg/lib/asn/HonorOfKingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HonorOfKingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HonorOfKingsLineSvg}></AntdIcon>;
};

HonorOfKingsLine.displayName = 'HonorOfKingsLine';
HonorOfKingsLine.inheritAttrs = false;
export default HonorOfKingsLine;