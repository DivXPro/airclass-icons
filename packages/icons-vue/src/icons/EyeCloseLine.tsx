// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeCloseLineSvg from '@airclass/icons-svg/lib/asn/EyeCloseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeCloseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeCloseLineSvg}></AntdIcon>;
};

EyeCloseLine.displayName = 'EyeCloseLine';
EyeCloseLine.inheritAttrs = false;
export default EyeCloseLine;